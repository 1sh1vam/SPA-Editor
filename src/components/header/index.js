import React from "react"
import {
    Container,
    Item, 
    HamBurger, 
    Search, SearchIcon, SearchInput,
    Invite,
    Notification, 
    Profile,
    Inner,
    Nav, NavList, NavElement,
    NavClose
} from "./styles/header"

export default function Header({children, ...restProps}) {
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}
Header.Inner = function HeaderInner({children, ...restProps}) {
    return(
        <Inner {...restProps}>
            {children}
        </Inner>)
}
Header.Item = function HeaderItem({children, ...restProps}) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

Header.HamBurger = function HeaderHamBurger({navOpen, setNavOpen, ...restProps}) {
    return (
        <HamBurger 
            navOpen={navOpen}
            onClick={() => setNavOpen(open => !open)} 
            {...restProps} >
            <div className="menu-btn__burger"></div>
        </HamBurger>
    )
}

Header.Search = function HeaderSearch({...props}) {
    return (
    <Search {...props}>
        <SearchIcon >
            <img src="images/icons/search.png" alt="search" />
        </SearchIcon>
        <SearchInput 
            placeholder="Search"
        />
    </Search>
    )
}

Header.Invite = function HeaderInvite({...restProps}) {
    return (
        <Invite {...restProps}>
            <img src="images/icons/add.png" alt="add icon" />
            <p>INVITE TEAM MEMBER</p>
        </Invite>
    )
}

Header.Notification = function HeaderNotification({...restProps}) {
    return (
        <Notification {...restProps}>
            <i class="far fa-bell"></i>
        </Notification>
    )
}

Header.Profile = function HeaderProfile({setProfileOpen, children, ...restProps}) {
    console.log(setProfileOpen)
    return (
        <Profile onClick={() => setProfileOpen(profile => !profile)} {...restProps}>
             <svg height="50" width="50">
                 <g className="big-circle">
                    <circle cx="25" cy="27" r="18" fill="purple" />
                    <text x="50%" y="50%" text-anchor="middle" stroke="#fff" fill="#fff" width="1px"  dy="8px">SM</text>
                </g>
            </svg> 
            <svg className="small-svg" height="20" width="20">
                 <g className="small-circle">
                    <circle cx="10" cy="10" r="6" fill="red" stroke="#fff" stroke-width="1px" />
                    <text x="50%" y="50%"  text-anchor="middle" fill="#fff" dy="3.5px">N</text>
                </g>
            </svg>
            {children}
        </Profile>
    )
}

Header.Nav = function HeaderNav({children, navOpen, ...restProps}) {
    return (
        <Nav navOpen={navOpen} {...restProps}>
            {children}
        </Nav>
    )
}

Header.NavList = function HeaderNavList({children, ...restProps}) {
    return (
        <NavList {...restProps}>
            {children}
        </NavList>
    )
}

Header.NavElement = function HeaderNavElement({children, ...restProps}) {
    return (
        <NavElement {...restProps}>
            {children}
        </NavElement>
    )
}

Header.NavClose = function HeaderNavClose({navOpen, setNavOpen, ...restProps}) {
    return (
        <NavClose onClick={()=>setNavOpen(nav => !nav)} {...restProps} />
    )
}