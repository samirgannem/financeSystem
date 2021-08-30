import React from 'react'
import { MenuSty01, MenuObject } from '../../elements/elements'

const Submenu = () => {
    return (
        <MenuSty01>
            <MenuObject to={props.submenu}>
                Clientes
            </MenuObject>
        </MenuSty01>
    )
}

export default Submenu
