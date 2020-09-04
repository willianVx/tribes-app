import React, { useState, useEffect } from 'react';
import PresentationContainer from '../../components/presentationContainer';
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileContentContainer } from '../../components/ProfilePic';
import { setSubsList } from '../../components/topics/topicsSlice';
import FeedList, {Feeditem, TitleCommentsItem, TextImageItem, FeedListOwnerImage} from '../../components/FeedList';
import ScrollContainer from '../../components/Scrollcontainer';
import AddTopicButton from '../../components/AddTopicButton';
import ThreadOverlay from '../../components/ThreadOverlay';
import CreateThreadOverlay from '../../components/ThreadOverlay/CreateThreadOverlay.js';
import Menu from '../../components/menu';

const Feed = () => {
    const [selectFeedItem, setSelectFeedItem] = useState();
    const [overlayThread, setOverlayThread] = useState(false);
    const [menuOverlay, setMenuOverlay] = useState(false);
    const [CreateThreadOverlayStatus, setCreateThreadOverlay] = useState(false);
    const [topicList, setTopicList] = useState([]);

    const userData = useSelector(state => state.users);
    const topicsData = useSelector(state => state.topics.list[0]);
    const topicsSub = useSelector(state => state.topics.subsTopicIds[0]);
    const dispatch = useDispatch();

    useEffect(() => {
      // if(!topicsData) {
      //   const handleAsync = (data) => {
      //       data.then(result => dispatch(setTopicList(result)))
      //   }
      //   handleAsync(getTopicslist());
      //   return;
      // }

      if(!topicsSub) {
          dispatch(setSubsList(userData.topics));
          return;
      }

      const newtopic = topicsData.filter(topic => {
        const n = userData.topics.find(sub => sub === topic.id);
        if (n !== undefined) return topic;
        return false;
      });
      setTopicList([...newtopic]);
    }, [dispatch, selectFeedItem, topicsData, topicsSub, userData.topics]);

    const handleSelectFeed = (topic) => {
        setSelectFeedItem(topic);
        setOverlayThread(true);
    }

    const handleTopicCreate = (result) => {
      setTopicList([...topicList, result]);
      setCreateThreadOverlay(false);
      setOverlayThread(false);
    }

    const handleTopicUpdate = (result) => {

      setOverlayThread(false);

      const newTopics = topicList.filter(topic => {
        return topic.id !== result.id;
      });
      setTopicList([...newTopics, result]);
    }

    return (
        <PresentationContainer >
            <CreateThreadOverlay user={userData}  overlay={CreateThreadOverlayStatus} topicUpdate={handleTopicCreate} />
            <Menu user={userData} overlay={menuOverlay} />
            <Header>
                <div onClick={() => setMenuOverlay(!menuOverlay)}> <img src='./img/burguerMenu.png' alt='menu' /> </div>
                <header>{userData.name} {userData.surName}</header>
                <div><img src='./img/editProfile.png' alt='edit' /></div>
            </Header>
            <ProfileContentContainer onClick={() => setMenuOverlay(false)}>
                <FeedList>
                    <ScrollContainer>
                        {topicList.map(topic => (
                            <Feeditem key={topic.id} backgroundImage={topic.topicImage} onClick={() =>  handleSelectFeed(topic)}>
                                <TitleCommentsItem>
                                    <h3>{topic.title}</h3>
                                    <hr />
                                    <div>
                                        <img src='./img/Vector.png' alt='chat' />
                                        <span>{topic.comments.length}</span>
                                    </div>
                                </TitleCommentsItem>
                                <TextImageItem position='absolute'>
                                    <FeedListOwnerImage src={topic.owner.image} alt='topic owner' color={topic.owner.color} />
                                    <span>{topic.owner.name}</span>
                                </TextImageItem>
                            </Feeditem>
                        ))}
                    </ScrollContainer>
                </FeedList>
                <AddTopicButton onClick={() => setCreateThreadOverlay(!CreateThreadOverlayStatus)}>+</AddTopicButton>
            </ProfileContentContainer>
            <ThreadOverlay topic={selectFeedItem} overlayThread={overlayThread} setOverlayThread={setOverlayThread} topicUpdate={handleTopicUpdate} />
        </PresentationContainer>
    );
}

export default Feed;
