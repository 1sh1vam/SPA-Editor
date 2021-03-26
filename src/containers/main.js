import React, {useState} from "react"
import { Main } from "../components"
import ItemPanelContainer from "./itempanel"
import EditorContainer from "./editor"

export default function MainContainer() {
    const [focused, setFocused] = useState("all")
    return (
        <Main>
            <Main.Header>
                <Main.HeaderItems>
                    <Main.HeaderItem 
                        focused={focused==="all"} 
                        onClick={()=>setFocused("all")}>All
                    </Main.HeaderItem>
                    <Main.HeaderItem 
                        focused={focused==="board"} 
                        onClick={()=>setFocused("board")}>Board
                    </Main.HeaderItem>
                    <Main.HeaderItem   
                        focused={focused==="graph"} 
                        onClick={()=>setFocused("graph")}>Graph
                    </Main.HeaderItem>
                    <Main.HeaderItem 
                        focused={focused==="recent"} 
                        onClick={()=>setFocused("recent")}>Recent
                    </Main.HeaderItem>
                    <Main.HeaderItem dotMenu={true}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Main.HeaderItem>
                </Main.HeaderItems>
            </Main.Header>

            <Main.Container>
                <ItemPanelContainer />
                <EditorContainer />
            </Main.Container>
        </Main>
    )
}