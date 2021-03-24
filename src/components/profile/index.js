import React from "react"
import { Container, List, Element } from "./styles/profile"

export default function Profile({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Profile.List = function ProfileList({children, ...restProps}) {
    return (
        <List {...restProps}>
            {children}
        </List>
    )
}

Profile.Element = function ProfileElement({children, ...restProps}) {
    return (
        <Element {...restProps}>
            {children}
        </Element>
    )
}