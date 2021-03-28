import React, {useState, useContext} from "react"
import {Tree } from "../components"
import { TreeContext } from "../context/tree"

export default function TreeContainer({tree}) {
    const [clicked, setClicked] = useState(false)
    const [hover, setHover] = useState("")
    const [contents, setContents] = useState([])
    const [displayContent, setDisplayContent] = useState(false)
    const {data, setEditorData, setSelectEditor} = useContext(TreeContext)

    function handleContentClick() {
        setContents(prev => [...prev, `Content ${data.indexOf(tree)+1}.${prev.length+1}`])
        setDisplayContent(true)
        setClicked(true)
    }

    function handleClick() {
        setClicked(prev => !prev)
        setDisplayContent(prev => !prev)
    }

    function setEditor(content) {
        setEditorData(prev => ({...prev, [content]: prev[content] ? prev[content]: {title: "", text:""}}))
        setSelectEditor(content)
    }

    return (
        <Tree>
            <Tree.Header>
                <Tree.Item 
                    onClick={() => handleClick()}
                    clicked={clicked}
                >
                    <i className="fas fa-angle-right"></i>
                    <p>{tree.title}</p>
                </Tree.Item>
                <Tree.Item item={true} hover={hover} clicked={false}>
                    <i
                        onClick={() => handleContentClick()}
                        onMouseEnter={()=>setHover("Add Content")}
                        onMouseLeave={() => setHover("")}
                        className="fas fa-plus"
                    >
                    </i>
                    <i 
                        onMouseEnter={()=>setHover("Add Container")}
                        onMouseLeave={() => setHover("")}
                        className="far fa-plus-square">
                    </i>
                    <i className="fas fa-ellipsis-v"></i>
                </Tree.Item>
            </Tree.Header>
            
            {displayContent && <ul>{contents.map(content => 
                <Tree.Content 
                    onClick={() => setEditor(content)}
                    >{content}</Tree.Content>
            )}</ul>}
        </Tree>
    )
}