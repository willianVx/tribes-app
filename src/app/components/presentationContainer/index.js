import styled from 'styled-components';

export const TextForm = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    position: absolute;
    bottom: 0;
`;

const PresentationContainer = styled.section`
    position: relative;
    overflow: hidden;
    margin: auto;
    max-width: 295px;
    min-height: 560px;
    background-color: #303134;
    color: white;
    padding: 10px 15px;
    background-image: ${({backgroundImage}) => `url("${backgroundImage}")`};
    background-repeat: no-repeat;
`;

export default PresentationContainer;
