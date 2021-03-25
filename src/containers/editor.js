import React, {useState} from "react"
import { Editor } from "../components"

export default function EditorContainer() {
    const item = <Editor.Item>
                    <Editor.SubTitle />
                    <Editor.Text />
                </Editor.Item>
    const [numPara, setNumPara] = useState([item])

    return (
        <Editor>
            <Editor.Title />
            {
                numPara
            }
            <Editor.AddIcon onClick={()=>setNumPara(prev => [...prev, item])}/>
        </Editor>
    )
}