import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSubList } from '../../components/topics/topicsSlice';
import PresentationContainer from '../../components/presentationContainer';
import { Redirect } from 'react-router-dom';
import loginCheck from '../../helpers/auth';
import Header from '../../components/Header';
import { setTopicList, setSubsList } from '../../components/topics/topicsSlice';
import { getTopicslist } from '../../queries';
import { GetLocalStorage } from '../../helpers/localStorage';
import useTryToLoggin from '../../helpers/useTryToLoggin';
import ProfilePic, {ProfileContentContainer} from '../../components/ProfilePic';
import SelectionList, {Listitem, DropArea, RoundImage} from '../../components/selectionList';
import SecondTopic from '../../components/SecondTitle';
import Menu from '../../components/menu';
import {EditUser} from '../../queries.js';
import array_move from '../../helpers/arrayMove.js';

const Profile = () => {

    const topicsList = useSelector(state => state.topics.list[0]);
    const topicsSub = useSelector(state => state.topics.subsTopicIds[0]);
    const userData = useSelector(state => state.users);
    const [menuOverlay, setMenuOverlay] = useState(false);

    const [ , setIsLogged] = useTryToLoggin();

    const loginForm = useSelector(state => state.loginForm);

    const [topicOrdered, setTopicOrdered] = useState([]);
    const [dropArea, setDropArea] = useState('0');
    const dispatch = useDispatch();

    const [ redirectRule, setRedirectRule ] = useState(false);
    const credentials = GetLocalStorage();

    useEffect(() => {
        const tryTologin = (result) => {
            if(result.login) {
                setIsLogged(result);
                return;
            }
            setRedirectRule(true);
        }

        if (!credentials) {
            setRedirectRule(true);
            return;
        };

        if (!loginForm.logged) {
            loginCheck(credentials, tryTologin)
        }
    }, [credentials, loginForm.logged, setIsLogged]);

    useEffect(() => {
        if(!topicsList) {
            const handleAsync = (data) => {
                data.then(result => dispatch(setTopicList(result)))
            }
            handleAsync(getTopicslist());
            return;
        }
        if(!topicsSub) {
            dispatch(setSubsList(userData.topics));
            return;
        }

        const newtopic = topicsList.filter(topic => {
            const n = topicsSub.find(sub => sub === topic.id);
            if (n !== undefined) return topic;
            return false;
        });
        setTopicOrdered(newtopic);
        EditUser({topics: topicsSub}, userData);
    }, [topicsList, topicsSub, userData, dispatch]);

    const handleDrag = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.dropEffect = 'move';
        setDropArea('15px');
    }

    const handleDrop = (event, index) => {
        event.preventDefault();
        var data = event.dataTransfer.getData('text');

        const newOrderedList = array_move(topicOrdered, parseInt(data), index);
        const newSubslist = newOrderedList.map(t => {
            return t.id;
        });
        setTopicOrdered([...newOrderedList]);

        dispatch(updateSubList(newSubslist));
        EditUser({topics: newSubslist}, userData);
        dispatch(updateSubList(newSubslist));

        setDropArea('0');
    }

    const handleDropOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    if (redirectRule) {
        return <Redirect to="/" />
    }

    return (
        <PresentationContainer>
            <Menu user={userData} overlay={menuOverlay} />
            <Header>
                <div onClick={() => setMenuOverlay(!menuOverlay)}> <img src='./img/burguerMenu.png' alt='menu' /> </div>
                <header> {userData.name} {userData.surName} </header>
                <div><img src='./img/editProfile.png' alt='edit' /></div>
            </Header>

            <ProfileContentContainer onClick={() => setMenuOverlay(!menuOverlay)}>
                <ProfilePic>
                    <div>
                    </div>
                </ProfilePic>
                <SecondTopic>Prioridade de tópicos</SecondTopic>
                <SelectionList>
                    {
                        topicOrdered.map((topic, index) => (
                            <div key={topic.id}>
                            <DropArea onDrop={e => handleDrop(e, index)} onDragOver={handleDropOver} dropArea={dropArea}></DropArea>
                            <Listitem id={index} draggable="true" onDragStart={handleDrag}>
                                    <span><RoundImage src='./img/roundImage.png' alt='roundImage' /></span>
                                    <span>{topic.title}</span>
                                    <span><img src='./img/dragAndDrop.png' alt='roundImage' /></span>
                            </Listitem>
                            </div>
                        ))
                    }
                </SelectionList>

            </ProfileContentContainer>
        </PresentationContainer>
    );
}

export default Profile;
