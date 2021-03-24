import styled from "styled-components"

export const Container = styled.div`
    margin: 0 1em;
    padding: 1em 0;
    background: #fff;
    color: #2e2b2a;
    
`
export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`


export const HamBurger = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-in-out;
    cursor: pointer;

    .menu-btn__burger{
        width: 25px;
        height: 3px;
        border-radius: 3px;
        background-color: #2e2b2a;
        transition: all .5s ease-in-out;
    }

    .menu-btn__burger::before,
    .menu-btn__burger::after{
        content: '';
        position: absolute;
        width: 25px;
        height: 3px;
        border-radius: 3px;
        background-color: #2e2b2a;
        transition: all .5s ease-in-out;
    }

    .menu-btn__burger::before {
        transform: translate(-50%,-7px);
    }

    .menu-btn__burger::after{
        transform: translate(-50%,7px);
    }

    ${({navOpen}) => navOpen && `
        .menu-btn__burger {
            transform: translateX(-50px);
            background: transparent;
            box-shadow: none;
        }
        .menu-btn__burger::before {
            transform: rotate(45deg) translate(35px, -35px);
        }
        .menu-btn__burger::after {
            transform: rotate(-45deg) translate(35px, 35px);
        }
    `}
`

export const Search = styled.div`
    margin-left: 3em;
    display: flex;
    align-items: center;
    @media (max-width: 949px) {
        display: none;
    }
`

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    img {
        filter: brightness(0) invert(0.6);
        width: 16px;
        display: flex;
        align-items: center;
    }
`

export const SearchInput = styled.input`
    background-color: #fff;
    color: #2e2b2a;
    height: 30px;
    border: 1px solid white;
    transition: width 0.5s;
    border-radius: 4px;
`

export const Invite = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 25px;
    }
    p {
        opacity: 0.8;
    }

`

export const Notification = styled.div`
    margin: 0 2em;
`

export const Profile = styled.div`
    position: relative;
    cursor: pointer;
    .small-svg {
        position: absolute;
        top: 4px;
        right: 1px;

        .small-circle text {
            font-size: 9px;
            font-weight: bold;
            text-align: center;
        }
    }


`

export const Nav = styled.nav`
    background: #0a0232;
    z-index: 100;
    position: fixed;
    color: #2e2b2a;
    top: 0;
    left: 0;
    bottom:0;
    transform: translateX(-100%);
    transition: transform 250ms ease-in-out;

    ${({navOpen}) => navOpen && `transform: translateX(0%);`};
`

export const NavList = styled.ul`
    margin: 0 auto;
    margin-top: 3.5em;
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    padding-bottom: 3em;

`

export const NavElement = styled.li`
    margin: 1em auto;
    font-size: 1.25rem;

    a {
        text-decoration: none;
        color: #fff;
    }

    a:hover,
    a:focus {
        text-decoration: underline;
    }
`

export const NavClose = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 22px;
    height: 22px;
    background-color: transparent;
    cursor: pointer;
    opacity: 0.5;
    &:before,&:after {
        content: '';
        color: #fff;
        position: absolute;
        height: 2px;
        width: 22px;
        background-color: white;
    }
    &:before {
        top: 10px;
        left: 0;
        transform: rotate(45deg)
    }
    &:after {
        top: 10px;
        right: 0;
        transform: rotate(-45deg)
    }
    &:hover {
        opacity: 1;
    }
    }
`