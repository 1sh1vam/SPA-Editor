import React from "react"
import {Container } from "./styles/itempanel"
export default function ItemPanel({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

