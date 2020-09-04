import React, {useState} from 'react';
import OverlayContainer,
    {OverlayHeader,
    TopicItemImageNano,
    TextContainer,
    CommentContainer,
    CommentInput,
    CommentButton,
    TopLineOverlay
} from './index.style';
import { EditTopic } from '../../queries';
import { useSelector } from 'react-redux';
import {FeedListOwnerImage, TextImageItem } from '../../components/FeedList';


const ThreadOverlay = ({topic, overlayThread, setOverlayThread, topicUpdate}) => {
    const [commentText, setCommentText] = useState();
    const userData = useSelector(state => state.users);

    if (!topic) {
        return <div></div>;
    }

    const handleInputText = (e) => { setCommentText(e.target.value) };
    const handleSubmitText = () => {
        const data = { comments: [
            ...topic.comments,
            {
                usersId: userData.id,
                text: commentText
            }
         ]}
        EditTopic(data, topic).then(result => {
            topicUpdate(result);
        });
    }

    return (
        <OverlayContainer overlayThread={overlayThread}>
            <TopLineOverlay onClick={() => {setOverlayThread(false)}}><span></span></TopLineOverlay>

            <OverlayHeader>
                <TextImageItem position='relative'>
                    <FeedListOwnerImage src={topic.owner.image} alt='topic owner' color={topic.owner.color} />
                    <span>{topic.owner.name}</span>
                </TextImageItem>
                <h1>{topic.title}</h1>
                {
                    topic.topicImage && <TopicItemImageNano><img src={topic.topicImage} alt='topic owner' /></TopicItemImageNano>
                }
            </OverlayHeader>

            <TextContainer>
                <div>
                    <p>
                    <span>Descrição:</span>{topic.description}
                    </p>
                </div>
                <hr />
            </TextContainer>

            <TextContainer>
                <h2>Comentários</h2>
                {
                    topic.comments.map((comment, index) => (
                        <div key={index}>
                            <h4>{comment.author}</h4>
                            <p>{comment.text}</p>
                        </div>
                    ))
                }
            </TextContainer>

            <CommentContainer>
                <FeedListOwnerImage src='./img/users/carla.png' alt='chat' color={topic.owner.color} />
                <CommentInput type='text' onChange={handleInputText} value={commentText}></CommentInput>
                <CommentButton onClick={handleSubmitText}>+</CommentButton>
            </CommentContainer>
        </OverlayContainer>
    );
}

export default ThreadOverlay;
