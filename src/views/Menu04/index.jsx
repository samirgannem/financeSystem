import React from 'react'
import styled from 'styled-components';

export default function Menu04 () {
    return (
        <MenuSty04>
            <MenuObject>
                Dados da empresa
            </MenuObject>    
            <MenuObject>
                Backup dados
            </MenuObject>    
            <MenuObject>
                Restore backup
            </MenuObject>    
        </MenuSty04>
    )
}

const MenuSty04 = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: rgba(39, 38, 38, .5);
    gap: .5rem;
    margin-top: 3.5rem;
    margin-left: 23.1rem;
    padding: .5rem;
    width: 12rem;
`

const MenuObject = styled.a`
    list-style: none;
    color: rgb(219, 213, 213);
    text-decoration: none;
    
    &:hover {
        color: white;
    }

`

