import React from "react"
import {Container, MainDiv, Header, HeaderItems, HeaderItem} from "./styles/main"
export default function Main({children, ...restProps}) {
    return (
        <MainDiv {...restProps}>{children}</MainDiv>
    )
}

Main.Container = function MainContainer({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Main.Header = function MainHeader({children, ...restProps}) {
    return (
        <Header {...restProps}>{children}</Header>
    )
}

Main.HeaderItems = function MainHeaderItems({children, ...restProps}) {
    return (
        <HeaderItems {...restProps}>{children}</HeaderItems>
    )
}

Main.HeaderItem = function MainHeaderItem({children, ...restProps}) {
    return (
        <HeaderItem {...restProps}>{children}</HeaderItem>
    )
}