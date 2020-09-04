import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {CreateThreadOverlayContainer, OverlayHeader, Title, NewTopicButton} from './index.style.js';
import { FeedListOwnerImage, TextImageItem } from '../../components/FeedList';
import { InputForm, InputContainer, DescriptionContainer, TextArea } from '../FormContainer';
import { CreateTopic } from '../../queries';

const CreateThreadOverlay = ({user, overlay, topicUpdate}) => {
    const [titleTopic, setTitleTopic] = useState('');
    const [descriptionTopic, setDescriptionTopic] = useState('');

    const handleTitleTopic = e => {setTitleTopic(e.target.value)};
    const handleDescriptionTopic = e => {setDescriptionTopic(e.target.value)};

    const userData = useSelector(state => state.users);

    const handleSubmit = () => {
        if(titleTopic.length < 1) {
            return;
        }

        if(titleTopic.length < 1) {
            return;
        }

        const newTopicData = {
            title: titleTopic,
            description: descriptionTopic,
            topicOwnerId: userData.id,
            owner: {
                image: "./img/users/jessica.png",
                name: "Jessica",
                color: "#81C565"
              },
            topicImage: "./img/topicImage.png",
            comments: []
        }
        CreateTopic(newTopicData).then(result => {
            topicUpdate(result);
        });
    }

    return (
        <CreateThreadOverlayContainer overlay={overlay}>
            <Title>TÍTULO</Title>
            <OverlayHeader>
                <TextImageItem position='relative'>
                    <FeedListOwnerImage src={user.image} alt='topic owner' color={user.color} />
                    <span>{user.name}</span>
                </TextImageItem>
                <InputContainer>
                    <InputForm type='text' name='title' value={titleTopic} onChange={handleTitleTopic} />
                </InputContainer>
            </OverlayHeader>

            <DescriptionContainer>
                <span>DESCRIÇÃO</span>
                <TextArea name='description' value={descriptionTopic} onChange={handleDescriptionTopic} />
            </DescriptionContainer>
            <NewTopicButton onClick={handleSubmit}>Novo tópico</NewTopicButton>
        </CreateThreadOverlayContainer>
    );
}

export default CreateThreadOverlay;
