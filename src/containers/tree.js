import React, {useState, useContext} from "react"
import {Tree } from "../components"
import { TreeContext } from "../context/tree"

export default function TreeContainer({path, tree}) {
    const [clicked, setClicked] = useState(false)
    const [hover, setHover] = useState("")
    const [contents, setContents] = useState([])
    const [displayContent, setDisplayContent] = useState(false)
    const {setDataCount, setEditorData, selectEditor, setSelectEditor} = useContext(TreeContext)
    const hasChild = path.length > 0;

    function handleContentClick() {
        setContents(prev => [...prev, `Content ${tree.id}.${prev.length+1}`])
        setDisplayContent(true)
        setClicked(true)
    }

    function handleContainerClick() {
        path.push({  
            id: `${tree.id}.${path.length+1}`,
            title: `Container ${tree.id}.${path.length+1}`,
            children: []
        })
        setDataCount(prev => prev+1)
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
                        onClick={handleContainerClick}
                        onMouseEnter={()=>setHover("Add Container")}
                        onMouseLeave={() => setHover("")}
                        className="far fa-plus-square">
                    </i>
                    <i className="fas fa-ellipsis-v"></i>
                </Tree.Item>
            </Tree.Header>
            
            {displayContent && <>
                {
                    hasChild && path.map((child, index) => (
                        <TreeContainer children={true} key={child.id} path={path[index].children} 
                            tree={child} />
                    ))
                }
                {
                contents.map(content =>
                    <Tree.Content 
                        selected={content === selectEditor}
                        onClick={() => setEditor(content)}
                    >{content}</Tree.Content>
                )}
                </>
            }
        </Tree>
    )
}