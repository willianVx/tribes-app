import styled from 'styled-components';

export const LabelSelection = styled.div`
    display: flex;
    justify-content: center;
    input {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
        font-family: 'Montserrat', sans-serif;
        color: white;
        padding: 10px;
        background-color: #47484C;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 10px;
        width: 100%;
    }
`;

export const DropArea = styled.div`
    width: 100%;
    transition: all 400ms ease-in;
    height: ${({dropArea}) => dropArea};
    background-color: green;
`;

export const RoundImage = styled.img`
        border-radius: 50%;
`;

export const ErrorMessageContainer = styled.div``;

export const SelectionList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const Listitem = styled.li`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    margin: 0 0px 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #47484C;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    img {
        width: 25px;
    }
    span {
        align-self: center;
    }
`;


export default SelectionList;
