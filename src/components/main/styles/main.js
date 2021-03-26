import styled from "styled-components"


export const MainDiv = styled.div`
    
`

export const Container = styled.div`
   width: 100%;
   display: flex;
   
   @media (max-width: 900px) {
       flex-direction: column;
   }
`

export const Header = styled.div`
    position:fixed;
    top: 50px;
    padding-top: 50px;
    z-index: 3;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const HeaderItems = styled.div`
    margin-left: 1.2em;
    min-width:250px;
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
`
export const HeaderItem = styled.p`
    cursor: pointer;
    color: #2e2b2a;
    text-align:center;
    margin: 0;
    padding: 0.5em 0.5em;
    font-size: 1rem;
    ${({focused}) => focused && `border-bottom: 2px solid #CC5104;
        font-weight: 700;
        padding-bottom: 0.4em;
    `};

    ${({dotMenu}) => dotMenu && `
        display: flex;
        padding-left: 9.6px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 24.8px;

        span {
            margin: 1.5px auto;
            width: 4px;
            height: 4px;
            border-radius: 40%;
            background-color: #2e2b2a
        }
    `}

`