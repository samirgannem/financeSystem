import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <header>
            <div>
                <HeaderH1>
                    Sistema de controle financeiro
                </HeaderH1>
            </div>
            <MenuApp>
                <MenuArq to='/'>
                    Arquivos
                </MenuArq>
                <MenuArq to='/menu02'>
                    Movimentações
                </MenuArq>
                <MenuArq to='/menu03' /*onClick={() => console.log('hola')}*/>
                    Relatórios
                </MenuArq>
                <MenuArq to='/menu04'>
                    Utilidades
                </MenuArq>
                <MenuArq to='/menu05'>
                    Sobre o sistema
                </MenuArq>
            </MenuApp>
        </header>
    )
}

const HeaderH1 = styled.h1`
    background: rgba(39, 38, 38, .8);
	color: rgb(219, 213, 213);
	padding: .2rem 1rem;
	font-size: 1.2rem;
	font-weight: 100;
`

const MenuApp = styled.ul`
    gap: 2rem;
    flex-wrap: wrap;
    display:flex;
    padding: .3rem 1.5rem;
    background: rgba(39, 38, 38, .5);
    color: rgb(219, 213, 213);
`

const MenuArq = styled(Link)`
    list-style: none;
    color: rgb(219, 213, 213);
    text-decoration: none;
    
    &:hover {
        color: white;
    }
     
`


