import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export default function Menu05 () {
    return (
        <MenuSty05>
            <TittleAbout>
                <TittleAbout1>
                    - Sistema de controle financeiro
                </TittleAbout1>
                <TittleClose to='/'>
                    X
                </TittleClose>           
            </TittleAbout>

            <ContentAbout>

            </ContentAbout>
            <ContentAbout>
                Sistema financeiro para controle de estoque,
            </ContentAbout>
            <ContentAbout>
                faturamento, compras, contas a receber e pagar.
            </ContentAbout>
            <ContentAbout>
                
            </ContentAbout>
            <ContentAbout>
                Colaboradores no desenvolvimento
                Samir Gannem, Elvis Gannem e Erick Gannem
            </ContentAbout>
        </MenuSty05>
    )
}

const MenuSty05 = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(39, 38, 38, .5);
    gap: .5rem;
    margin-left: 33%;
    width: 25rem;
    border-radius: 2px;
    padding: 0 0 1rem 0;
    border-stylus: solid;
    
`

const TittleAbout = styled.span`
    display: flex;
    justify-content: space-between;
    color: white;
    background: rgba(39, 38, 38, .4);
    width: 100%
`

const TittleAbout1 = styled.a`
    color: white;
    padding: .3rem .5rem;
`

const TittleClose = styled(Link)`
    color: red;
    text-decoration: none;
    background: rgba(39, 38, 38, .3);
    padding: .3rem .5rem;
    border-radius: 2px;
    
    &:hover {
        background: rgba(39, 38, 38);
    }
     
`

const ContentAbout = styled.span`
    color: rgb(219, 213, 213);
    padding: 0 1rem;
`