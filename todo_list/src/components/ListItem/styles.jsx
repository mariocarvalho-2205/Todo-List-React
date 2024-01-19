import styled from "styled-components";

export const Container = styled.div(({ done }) => (
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 20px;
        height: 20px;
        margin-right: 15px
    },
    label {
       color: #ccc; 
       text-decoration: ${done ? 'line-through' : 'initial'};
    },
`
))