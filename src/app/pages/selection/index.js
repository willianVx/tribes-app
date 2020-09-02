import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTopicslist } from '../../queries';
import { setTopicList } from '../../components/topics/topicsSlice';

const Selection = () => {
    const [redirectFeedPage, setRedirectFeedPage] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [topicSublist, setTopicSublist] = useState([]);
    const dispatch = useDispatch();
    const topicsList = useSelector(state => state.topics.list[0]);

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
        const handleAsync = (data) => {
            data.then(result => dispatch(setTopicList(result)))
        }
        handleAsync(getTopicslist());
    });

    useEffect(() => {
        setFilteredTopics(topicsList);
    }, [topicsList]);

    return (
        <div>
            <label>
                Pesquisa:
                <input type='text' value={searchText} onChange={handleSearchInput} />
            </label>
            <ul>
                {filteredTopics &&
                    filteredTopics.map(topic => (
                        <li key={topic.id}>
                            <span onClick={e => handleAddTopic(topic.id)} value={topic.id}>{topic.title}</span>
                            {topicHasBenAdded(topic.id) ? <span>x</span> : <span>+</span>  }
                        </li>
                    ))
                }
            </ul>
            <button>Next</button>
        </div>
    );
}

export default Selection;
