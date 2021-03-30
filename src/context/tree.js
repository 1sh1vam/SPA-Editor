import React, {useState, createContext} from "react"

const TreeContext = createContext()

function TreeContextProvider({children}) {
    const [dataCount, setDataCount] = useState(0)
    const [editorData, setEditorData] = useState({})
    const [selectEditor, setSelectEditor] = useState("")

    return (
        <TreeContext.Provider
            value={{
                dataCount, setDataCount, editorData, 
                setEditorData, selectEditor, 
                setSelectEditor
            }}
        >
            {children}
        </TreeContext.Provider>
    )
}

export { TreeContextProvider, TreeContext }