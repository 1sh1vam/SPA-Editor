import React, {useContext} from "react"
import { ItemPanel } from "../components"
import TreeContainer from "./tree"
import { TreeContext } from "../context/tree"

export default function ItemPanelContainer() {
    const {data, setData} = useContext(TreeContext)
    
    function onClickHandle() {
        setData(prev => [...prev, 
        {
            title: "Container "+String(prev.length+1),
            children: []
        }])
    }
    return(
        <ItemPanel>
            <ItemPanel.Header>
                <ItemPanel.Item>
                    <ItemPanel.Element>
                        <i onClick={onClickHandle} className="fas fa-plus"></i>
                    </ItemPanel.Element>
                    <ItemPanel.Element>
                        <i className="fas fa-angle-double-left"></i>
                    </ItemPanel.Element>
                </ItemPanel.Item>
            </ItemPanel.Header>
            {
                    data.map(obj => <TreeContainer key={obj.title} tree={obj} />)
            }            
        </ItemPanel>
    )
}