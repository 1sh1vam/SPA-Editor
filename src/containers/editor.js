import React from "react"
import { Editor } from "../components"

export default function EditorContainer() {
    return (
        <Editor>
            <Editor.Title />
                <Editor.Item>
                    <Editor.SubTitle />
                    <Editor.Text />
                </Editor.Item>
            <Editor.AddIcon/>
        </Editor>
    )
}