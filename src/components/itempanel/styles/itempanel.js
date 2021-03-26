import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    width: 25%;
    top: 122px;
    height: 84.4vh;
    background-color: #ECF0F1;
    overflow: auto;

    @media (max-width: 900px) {

        width: 100%;
        height: 300px;
        position:relative;
    }
`

export const Header = styled.div`
    top: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1em;
`
export const Item = styled.div`
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`

export const Element = styled.div`
    color: #2e2b2a;
    padding: 0 0.8em;
    cursor: pointer;
    &: last-of-type {
        padding-right: 0.5em;
    }
    height: 20px;
    i {
        width: 100%;
        height: 100%;
    }
`