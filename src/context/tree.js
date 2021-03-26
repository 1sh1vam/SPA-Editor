import React, {useState, createContext} from "react"

const TreeContext = createContext()

function TreeContextProvider({children}) {
    const [data, setData] = useState([])
    const [editorData, setEditorData] = useState({})
    const [selectEditor, setSelectEditor] = useState("")
    const [count, setCount] = useState(1)

    return (
        <TreeContext.Provider
            value={{
                data, setData, editorData, 
                setEditorData, selectEditor, 
                setSelectEditor, count, setCount
            }}
        >
            {children}
        </TreeContext.Provider>
    )
}

export { TreeContextProvider, TreeContext }