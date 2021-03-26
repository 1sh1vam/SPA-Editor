import styled from "styled-components"

export const Container = styled.div`
    height: 20px;
    min-width: 120px;
    width: 20%;
    color: #fff;
    background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    padding: 0.2em 0;

    ${({text}) => text && `
        min-width: 50px;
        width: 7%;
    `}
`

export const Item = styled.div`
    width: 20px;
    cursor: pointer;
    color: ${({selected}) => selected && "#eb5834"};
    
    &:hover {
        color: #eb5834;
    }
`