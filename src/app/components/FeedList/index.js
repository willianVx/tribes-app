import styled from 'styled-components';

const FeedList = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    list-style-type: none;
    position: relative;
    margin: 0;
    padding: 0%;
`;

export const Feeditem = styled.li`
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #191A1D;
    border: 5px solid #191A1D;
    padding: 15px;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 10px;
    background-image: ${({backgroundImage}) => `url("${backgroundImage}")`};
    background-repeat: no-repeat;
    min-height: ${({height}) => height ? '115px' : '90px'};
`

export const TextImageItem = styled.div`
    position: ${({position}) => `${position}` };
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    bottom: 5px;
    right: 10px;
    span {
        font-size: 10px;
    }
`;

export const FeedListOwnerImage = styled.img`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: ${({color}) => color && `4px solid ${color}`};

`;

export const TitleCommentsItem = styled.div`
    position: absolute;
    width: 60%;
    bottom: 5px;
    left: 15px;
    hr {
        color: #ffffff21;
        border: 1px solid;
    }
    div {
        img {
            margin-right: 10px;
        }
    }
`;

export default FeedList;
