import React, {useState, useContext} from "react"
import {TreeContext} from "../../context/tree"
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
    const {selectEditor, editorData, setEditorData} = useContext(TreeContext)
    const [ show, setShow ] = useState(false)
    const [selectedEle, setSelectedEle] = useState("H2")

    function handleChange({target}) {
        setEditorData(prev => {
            return {
                ...prev,
                [selectEditor]: {...prev[selectEditor], title: target.value}
            }
        })
    }
    return (
        <>
        { show && 
            <Popup {...restProps}>
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
            value={selectEditor ? editorData[selectEditor].title : ""}
            onClick={() => setShow(prev=>!prev)}
            onChange={handleChange}
        />
        </>
    )
}

Editor.Text = function EditorText({...restProps}) {
    const {selectEditor, editorData, setEditorData} = useContext(TreeContext)
    const [ show, setShow ] = useState(false)
    const [selectedEle, setSelectedEle] = useState("")

    function handleKeyDown({target}) {
        console.log(target)
        target.style.height = "inherit";
        target.style.height= `${target.scrollHeight}px`
    }

    function handleChange({target}) {
        setEditorData(prev => {
            return {
                ...prev,
                [selectEditor]: {...prev[selectEditor], text: target.value}
            }
        })
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
                value={selectEditor ? editorData[selectEditor].text : ""}
                onClick={() => setShow(prev=>!prev)}
                onChange={handleChange}
            />
        </Text>
        </>
        
    )
}

Editor.AddIcon = function EditorAddIcon({...restProps}) {
    return (
        <AddIcon  {...restProps}>
            <img src="images/icons/plus.svg" alt="plus icon" />
        </AddIcon>
    )
} 