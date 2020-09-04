import styled from 'styled-components';

export const InputForm = styled.input`
    margin-top: 6px;
    width: 100%;
    height: 38px;
    background-color: #47484C;
    border: none;
    border-radius: 8px;
    border-bottom: 2px solid #E57728;
    color: white;
`;

export const TextArea = styled.textarea`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin-top: 6px;
    width: 100%;
    height: 82px;
    background-color: #47484C;
    border: none;
    border-radius: 8px;
    border-bottom: 2px solid #E57728;
    color: white;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-flow: column;
    margin: 17px;
    span {
        font-size: 12px;
    }
    input {
        height: 65px;
    }
`;

export const InputContainer = styled.div`
    width: 65%;
`;

const FormContainer = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    label {
        div {
            input {
                margin-top: 6px;
                width: 100%;
                height: 38px;
                background-color: #47484C;
                border: none;
                border-radius: 8px;
                border-bottom: 2px solid #E57728;
                color: white;
            }
        }
        margin-top: 10px;
    }
    button {
            padding: 14px;
            color: white;
            background-color: #E57728;
            border: none;
            border-radius: 8px;
    }
`;

export default FormContainer;
