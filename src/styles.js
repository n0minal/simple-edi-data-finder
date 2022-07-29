import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const PasteArea = styled.textarea`
    width: 30vw;
    height: 70vh;
    overflow-y: scroll;
`;

export const HighlightArea = styled.pre`
    margin: 0;
    flex: 1;
    height: 70vh;
    border: 1px solid black;
    overflow-y: scroll;
    word-wrap: break-word;
`;