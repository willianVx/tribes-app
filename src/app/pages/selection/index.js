import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTopicslist } from '../../queries';
import { GetLocalStorage } from '../../helpers/localStorage';
import PresentationContainer from '../../components/presentationContainer';
import ScrollContainer from '../../components/Scrollcontainer';
import { setTopicList, setSubsList } from '../../components/topics/topicsSlice';
import { CircleIntro3, NextBar } from '../../components/textintroContainer';
import useTryToLoggin from '../../helpers/useTryToLoggin';
import loginCheck from '../../helpers/auth';
import SelectionList, {LabelSelection, ErrorMessageContainer, Listitem, RoundImage} from '../../components/selectionList';

const Selection = () => {
    const [redirectFeedPage, setRedirectFeedPage] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [searchText, setSearchText] = useState('');
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [topicSublist, setTopicSublist] = useState([]);
    const dispatch = useDispatch();
    const topicsList = useSelector(state => state.topics.list[0]);

    const loginForm = useSelector(state => state.loginForm);

    const [ , setIsLogged] = useTryToLoggin();
    const [ redirectRule, setRedirectRule ] = useState(false);


    const credentials = GetLocalStorage();

    const handleSubmitTopics = () => {
        if (!topicSublist.length) {
            setErrorMessage('Inclua pelo menos um tópico para acompanhar.');
            return;
        }
        dispatch(setSubsList(topicSublist));
        setRedirectFeedPage(true);
    }

    const topicHasBenAdded = topicId => topicSublist.find(t => t === topicId);

    const handleAddTopic = (topicId) => {
        if (topicHasBenAdded(topicId)) {
            const newTopics = topicSublist.filter(t => t !== topicId);
            setTopicSublist(newTopics);
            return;
        }
        setTopicSublist([...topicSublist, topicId])
    }

    const filterTopics = () => {
        const newFilteredTopics = topicsList.filter(topic => {
            const regex = new RegExp(searchText.toLocaleLowerCase(), 'g');
            const isMach =  topic.title.toLocaleLowerCase().match(regex);
            if(isMach) {
                return topic;
            }
            return false;
        });
        setFilteredTopics(newFilteredTopics);
    }

    const handleSearchInput = e => {
        e.preventDefault();
        const value = e.target.value;
        setSearchText(value);
        if (value.length === 0) {
            setFilteredTopics(topicsList);
            return;
        }
        filterTopics();
    }

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

        const handleAsync = (data) => {
            data.then(result => dispatch(setTopicList(result)))
        }
        handleAsync(getTopicslist());
    }, [credentials, loginForm.logged, setIsLogged, dispatch]);

    useEffect(() => {
        setFilteredTopics(topicsList);
    }, [topicsList]);

    if (redirectRule) {
        return <Redirect to="/" />
    }

    return (
        <PresentationContainer backgroundImage={'./img/rectangle.jpg'}>
            <CircleIntro3 />

            <LabelSelection>
                <input type='text' value={searchText} onChange={handleSearchInput} placeholder='Faça uma busca...' />
            </LabelSelection>
            <ScrollContainer>
                <SelectionList>
                    {filteredTopics &&
                        filteredTopics.map(topic => (
                            <Listitem key={topic.id} onClick={e => handleAddTopic(topic.id)} value={topic.id}>
                                <span> <RoundImage src='./img/roundImage.png' alt='roundImage' /> </span>
                                <span>{topic.title}</span>
                                {topicHasBenAdded(topic.id) ? <span>x</span> : <span>+</span>  }
                            </Listitem>
                        ))
                    }
                </SelectionList>
            </ScrollContainer>
            <ErrorMessageContainer>
                {errorMessage && <span>{errorMessage}</span>}
            </ErrorMessageContainer>
            {redirectFeedPage && <Redirect to="/perfil" />}
            <NextBar>
                <div><span></span> <span></span></div>
                <button onClick={handleSubmitTopics}><img src='./img/arrowRight.png' alt='arrowRight' /> </button>
            </NextBar>
        </PresentationContainer>
    );
}

export default Selection;
