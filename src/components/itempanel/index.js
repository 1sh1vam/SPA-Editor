import React from "react"
import {Container, Header, Item, Element } from "./styles/itempanel"
export default function ItemPanel({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

ItemPanel.Header = function ItemPanelHeader({children, ...restProps}) {
    return (
        <Header {...restProps}>{children}</Header>
    )
}

ItemPanel.Item = function ItemPanelItem({children, ...restProps}) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

ItemPanel.Element = function ItemPanelElement({children, ...restProps}) {
    return (
        <Element {...restProps}>{children}</Element>
    )
}

