import styled from "styled-components"


export const MainDiv = styled.div`
    
`

export const Container = styled.div`
   width: 100%;
   display: flex;

   @media (max-width: 600px) {
       flex-direction: column;
   }
`

export const Header = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
`
export const HeaderItems = styled.div`
    margin-left: 1.2em;
    min-width:250px;
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`
export const HeaderItem = styled.p`
    cursor: pointer;
    color: #2e2b2a;
    text-align:center;
    margin: 0;
    padding: 0.5em 0.5em;
    font-size: 1rem;
    ${({focused}) => focused && `border-bottom: 2px solid #CC5104; font-weight: 700`};

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