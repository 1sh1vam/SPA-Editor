import styled from "styled-components"

export const Container = styled.div`
    padding: 0 1em;
`

export const Header = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;
`

export const Item = styled.div`
    display: flex;
    align-items:center;

    p {
        cursor: pointer;
    }

    i {
        cursor: pointer;
        padding: 0 0.5em;
    }

    &:first-of-type {
        i {
            padding: 0;
            padding-right: 0.5em;
        }

        width: fit-content;
        min-width: fit-content;
    }

    &: last-of-type {
        p { 
            position: relative;
            z-index: 10;
            background: #2e2b2a;
            color: #fff;
            font-size: 0.8em;
            padding: 0.2em 0.5em;
            border-radius: 3px;
        }
    }

    ${({clicked}) => clicked && `
        .fa-angle-right {
            transform: rotate(45deg);
        }
    `}

`

export const Content = styled.li`
    width: 95%;
    margin: 0 auto;
    margin-left: 0em;
    margin-right: 1em;
    text-align:left;
    list-style: none;
    color: #2e2b2a;
    cursor: pointer;
    padding-left: 1.5em;
    ${({selected}) => selected && `
        border-left: 2px solid orange;
        background: #fff;
    `}
`