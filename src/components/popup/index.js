import React from "react"
import { Container, Item } from "./styles/popup"

export default function Popup({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Popup.Item = function PopupItem({childre, ...restProps}) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}