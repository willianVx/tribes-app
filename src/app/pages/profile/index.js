import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSubList } from '../../components/topics/topicsSlice';

const Profile = () => {

    const topicsList = useSelector(state => state.topics.list[0]);
    const topicsSub = useSelector(state => state.topics.subsTopicIds[0]);

    const [topicOrdered, setTopicOrdered] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const newtopic = topicsList.filter(topic => {
            const n = topicsSub.find(sub => sub === topic.id);
            if (n !== undefined) return topic;
            return false;
        });
        setTopicOrdered(newtopic);
    }, [topicsList, topicsSub]);

    const handleDrag = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        e.dropEffect = "move";
    }

    const handleDrop = (event, index) => {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");

        const array_move = (arr, old_index, new_index) => {
            if (new_index >= arr.length) {
                var k = new_index - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr;
        };

        const newOrderedList = array_move(topicOrdered, parseInt(data), index);
        const newSubslist = newOrderedList.map(t => {
            return t.id;
        });
        setTopicOrdered([...newOrderedList]);
        dispatch(updateSubList(newSubslist));
    }

    const handleDropOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move"
    }

    return (
        <div>
            <div>menu</div>
            <header> --- Nome user --- </header>
            <div>edit</div>

            <section>
                <div> --- image perfil --- </div>
            </section>

            {
                topicOrdered.map((topic, index) => (
                    <div key={topic.id} >
                        <div onDrop={e => handleDrop(e, index)} onDragOver={handleDropOver}>dDROP AREA AQUI!!</div>
                            <div id={index} draggable="true" onDragStart={handleDrag}>
                                <h3>{topic.title}</h3>
                            </div>
                        <div onDrop={e => handleDrop(e, index)} onDragOver={handleDropOver}>dDROP AREA AQUI!!</div>
                    </div>
                ))
            }
        </div>
    );
}

export default Profile;
