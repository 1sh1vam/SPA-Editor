import React, {useContext} from "react"
import { ItemPanel } from "../components"
import TreeContainer from "./tree"
import { TreeContext } from "../context/tree"
import { containerData } from "../utils/data"

export default function ItemPanelContainer() {
    const {setDataCount} = useContext(TreeContext)
    
    function onClickHandle() {
        containerData.push(
            {   id: `${containerData.length+1}`,
                title: `Container ${containerData.length+1}`,
                children: []
            }
        )
        setDataCount(prev => prev + 1)
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
                    containerData.map((obj, idx) => <TreeContainer key={obj.id} path={containerData[idx].children}  tree={obj} />)
            }            
        </ItemPanel>
    )
}