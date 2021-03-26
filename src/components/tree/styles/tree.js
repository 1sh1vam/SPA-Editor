import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1em;

    ul {
        margin: 0;
        padding: 0;
        padding-left: 2em;
    }
`

export const Header = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
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
    }

    &: last-of-type {
        p {
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
    width: 100%;
    margin: 0 auto;
    text-align:left;
    list-style: none;
    color: #2e2b2a;
    cursor: pointer;
`