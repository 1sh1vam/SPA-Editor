import styled from "styled-components"

export const Container = styled.nav`
    position: absolute;
    background: #F7F7F7;
    z-index: 100;
    position: fixed;
    color: #2e2b2a;
    top: 70px;
    right: 30px;
    border-radius: 2px;
    width: 200px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2)

`
export const List = styled.ul`
    margin: 0;
    width: 100%;
    list-style: none;
    padding: 1em;
    text-align: left;
    box-sizing: border-box;
`

export const Element = styled.li`
    padding: 0.2em 0.1em;
    font-size: 1.1rem;

    a {
        text-decoration: none;
        color: #fff;
    }

    a:hover,
    a:focus {
        text-decoration: underline;
    }

    &: first-of-type {
        padding-top: 0;
    }

    &: last-of-type {
        padding-bottom: 0;
    }
`