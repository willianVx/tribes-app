import styled from 'styled-components';

export const VerticalAlign = styled.div`
    margin-top: 50%;
`;

export const CircleIntro1 = styled.div`
    position: absolute;
    top: 21px;
    left: -18px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(147.47deg, #FEB665 24.48%, #F66EB4 118.65%);
`;

export const CircleIntro2 = styled.div`
    position: absolute;
    top: 80px;
    right: 15px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(228.76deg, #2DEEF9 -34.42%, #E084F1 127.18%);
    transform: rotate(-15.82deg);
`;

export const CircleIntro3 = styled.div`
    position: absolute;
    left: -15px;
    bottom: -35px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(228.76deg, rgba(45, 238, 249, 0.7) -34.42%, rgba(224, 132, 241, 0.7) 127.18%);
    transform: rotate(-15.82deg);
`;

export const NextBar = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        span {
            width: 4px;
            height: 6px;
            background-color: #E57728;
        }
    }
    button {
        padding: 10px;
        background-color: #E57728;
        border-radius: 50%;
        border: none;
        img {
            width: 15px;
        }
    }
    a {
        padding: 10px;
        background-color: #E57728;
        border-radius: 50%;
        img {
            width: 15px;
        }
    }
`;

const TextintroContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    text-align:center;
    p {
        font-style: italic;
        font-size: 14px;
        line-height: 22px;
    }
`;

export default TextintroContainer;
