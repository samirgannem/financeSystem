import React from 'react'
import { MenuSty01, MenuObject } from '../../elements/elements'

export default function Menu01() {
    return (
        <>
            <MenuSty01 marginLeft='1.3rem'>
                <MenuObject to='/menu01/Clientes'>
                    Clientes
                </MenuObject>
                <MenuObject to='/menu01/Fornecedores'>
                    Fornecedores
                </MenuObject>
                <MenuObject to='/menu01/'>
                    Departamentos
                </MenuObject>
                <MenuObject to='/menu01/'>
                    Produtos
                </MenuObject>
            </MenuSty01>
        </>
    )
}

