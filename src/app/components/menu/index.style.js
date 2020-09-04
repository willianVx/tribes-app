import styled from 'styled-components';

export const PerfilContainerMenu = styled.div`
    display: flex;
    margin: 10px;
    justify-content: space-between;
    div {
        margin-block-start: 1em;
        margin-block-end: 1em;
    }
    img {
        width: 35px;
        height: 35px;
    }
`;

export const MenuList = styled.ul`
    list-style: none;
    a {
        text-decoration: none;
    }
`;

export const MenuItem = styled.li`
    margin-top: 30px;
    img {
        width: 15px;
        margin-right: 20px;
    }
`;

export const MenuContainer = styled.div`
    z-index: 10;
    position: absolute;
    width: 60%;
    height: 100%;
    transition: all 400ms ease;
    top: 0;
    left: ${({overlay}) => overlay ? '0' : '-100%'};
    background-color: #303134;
    hr {
        border: 1px solid #ffffff1a;
    }
`;
