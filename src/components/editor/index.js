import React, {useState} from "react"
import {Container, Title, Item, SubTitle, Text, AddIcon} from "./styles/editor"
import {Popup} from "../index";

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
    const [ show, setShow ] = useState(false)
    const [selectedEle, setSelectedEle] = useState("H2")
    return (
        <>
        { show && 
            <Popup>
                <Popup.Item 
                    selected={selectedEle==="P"} 
                    onClick={() => setSelectedEle("P")} >P
                </Popup.Item>
                <Popup.Item 
                    selected={selectedEle==="H1"} 
                    onClick={() => setSelectedEle("H1")} >H1
                </Popup.Item>
                <Popup.Item 
                    selected={selectedEle==="H2"} 
                    onClick={() => setSelectedEle("H2")} >H2
                </Popup.Item>
                <Popup.Item 
                    selected={selectedEle==="H3"} 
                    onClick={() => setSelectedEle("H3")} >H3
                </Popup.Item>
            </Popup>}
        <SubTitle
            ele={selectedEle}
            placeholder="Title"
            type="text"
            value={subTitle}
            onClick={() => setShow(prev=>!prev)}
            onChange={({target})=>setSubTitle(target.value)}
        />
        </>
    )
}

Editor.Text = function EditorText({...restProps}) {
    const [text, setText] = useState("")
    const [ show, setShow ] = useState(false)
    const [selectedEle, setSelectedEle] = useState("")

    function handleKeyDown({target}) {
        console.log(target)
        target.style.height = "inherit";
        target.style.height= `${target.scrollHeight}px`
    }

    return (
        <>
        { show && 
            <Popup text={true}>
                <Popup.Item 
                    selected={selectedEle==="B"} 
                    onClick={() => setSelectedEle("B")} >B
                </Popup.Item>
                <Popup.Item 
                    selected={selectedEle==="I"} 
                    onClick={() => setSelectedEle("I")} ><em>I</em>
                </Popup.Item>
            </Popup>}
        <Text>
            <textarea
                rows="1"
                ele = {selectedEle}
                onKeyDown = {handleKeyDown}
                placeholder="Text"
                value={text}
                onClick={() => setShow(prev=>!prev)}
                onChange={({target}) => setText(target.value)}
            />
        </Text>
        </>
        
    )
}

Editor.AddIcon = function EditorAddIcon({ setNumPara, item, ...restProps}) {
    return (
        <AddIcon  {...restProps}>
            <img onClick={()=>setNumPara(prev => [...prev, item])} src="images/icons/plus.svg" alt="plus icon" />
        </AddIcon>
    )
} 