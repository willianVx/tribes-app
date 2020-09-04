import styled from 'styled-components';

const OverlayContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #303134;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    transition: all 400ms ease;
    bottom: ${({overlayThread}) => overlayThread ? '-18px' : ' -100%'};
    left: 0;

`;

export const Title = styled.span`
    position: relative;
    top: 10px;
`;

export const OverlayHeader = styled.div`

    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`;

export const TopicItemImageNano = styled.div`
    width: 55px;
    height: 55px;
    overflow: hidden;
    img {
        min-width: 100%;
        height: 100%;
    }
`;

export const TextContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    font-size: 13px;
    line-height: 17px;
    hr {
        border: 1px solid #ffffff17;
    }
`;

export const CommentContainer = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
        width: 25px;
        height: 25px;
        margin-left: 5px;
    }
`;

export const CommentInput = styled.input`
    width: 70%;
    background-color: #242529;
    color: white;
    border-style: none;
    border-radius: 12px;
`;

export const CommentButton = styled.button`
    background-color: transparent;
    color: white;
    font-size: 30px;
    border-style: none;
    margin-right: 5px;
`;

export const TopLineOverlay = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    span {
        width: 30px;
        height: 4px;
        background-color: #585858;
        border-radius: 10px;
    }
`;

export const NewTopicButton = styled.button`
    border: none;
    color: white;
    border-radius: 12px;
    padding: 15px;
    background-color: #191A1D;
`;

export const CreateThreadOverlayContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 324px;
    background-color: #303134;
    z-index: 10;
    transition: all 400ms ease;
    top: ${({overlay}) => overlay ? '20%' : '-100%'} ;
    left: 0;
    border-radius: 20px;
    text-align: center;
    h3 {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
        font-family: 'Montserrat', sans-serif;
    }
`

export default OverlayContainer;
