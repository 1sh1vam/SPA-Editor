import React from "react"
import { Container, Header, Item, Content} from "./styles/tree"

export default function Tree({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Tree.Header = function TreeHeader({children, ...restProps}) {
    return (
        <Header {...restProps}>{children}</Header>
    )
}

Tree.Item = function TreeItem({children, item, hover,...restProps}) {
    return (
        <Item {...restProps}>
            {item && hover && <p 
                display={hover ==="Add Container" || hover === "Add Content" ? true: false} 
                className="popup">{hover}</p>}
            {children}
            
        </Item>
    )
}

Tree.Content = function TreeContent({children, ...restProps}) {
    return (
        <Content {...restProps}>{children}</Content>
    )
}
