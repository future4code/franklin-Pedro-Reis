import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
`
const SmallCardImg = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`
const SmallCardContainerInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    margin-left: 10px;
`



function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardImg src={ props.imagem } />
            <SmallCardContainerInfos>
                <strong>{ props.contato }:</strong>{ props.info }
            </SmallCardContainerInfos>
        </SmallCardContainer>
    )
}

export default CardPequeno;