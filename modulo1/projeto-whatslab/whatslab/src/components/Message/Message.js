import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`
display: flex;
flex-direction: row;
`
const MessageUser = styled.p`
font-weight: bold;
`
const MessageText = styled.p`
font-weight: normal;
`

const Messages = ()=> {
    return (
        <MessageBox>
        <MessageUser>Pedro:</MessageUser>
        <MessageText>Olá</MessageText>
        </MessageBox>
    )
}

export {Messages}