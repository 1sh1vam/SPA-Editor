import React, {useState} from "react"
import {Container, Title, Item, SubTitle, Text, AddIcon} from "./styles/editor"

export default function Editor({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Editor.Title = function EditorTitle({...restProps}) {
    return (
        <Title {...restProps}>WYSIWYG Editor</Title>
    )
}

Editor.Item = function EditorItem({children, ...restProps}) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

Editor.SubTitle = function EditorSubTitle({...restProps}) {
    const [subTitle, setSubTitle] = useState("")
    return (
        <SubTitle
            placeholder="Title"
            type="text"
            value={subTitle}
            onChange={({target})=>setSubTitle(target.value)}
        />
    )
}

Editor.Text = function EditorText({...restProps}) {
    const [text, setText] = useState("")

    function handleKeyDown({target}) {
        console.log(target)
        target.style.height = "inherit";
        target.style.height= `${target.scrollHeight}px`
    }

    return (
        <Text>
            <textarea
                rows="1"
                onKeyDown = {handleKeyDown}
                placeholder="Text"
                value={text}
                onChange={({target}) => setText(target.value)}
            />
        </Text>
        
    )
}

Editor.AddIcon = function EditorAddIcon({...restProps}) {
    return (
        <AddIcon  {...restProps}>
            <img src="images/icons/plus.svg" alt="plus icon" />
        </AddIcon>
    )
} 