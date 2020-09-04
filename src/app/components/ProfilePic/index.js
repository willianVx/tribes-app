import styled from 'styled-components';

const ProfilePic = styled.div`
    display: flex;
    justify-content: center;
    img {
        max-width: 100%;
    }
    div {
        width: 250px;
        height: 250px;
        border: 9px solid #81C565;
        border-radius: 50%;
    }
`;

export const ProfileContentContainer = styled.div`
    margin-top: 60px;
`;

export default ProfilePic;
