import styled from 'styled-components';

const ScrollContainer = styled.div`
    overflow: overlay;
    height: 420px;

    ::-webkit-scrollbar {
    width: 4px;
    }

    ::-webkit-scrollbar-track {
    background: #9597A1;
    }

    ::-webkit-scrollbar-thumb {
    background: #E57728;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;

export default ScrollContainer;
