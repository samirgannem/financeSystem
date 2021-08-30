import React from 'react'
import { MenuSty01, HeaderH1, MenuApp, MenuArq, MenuIcon, MenuAppIcon, MenuIconDiv } from '../../elements/elements'
import { useLocation } from 'react-router-dom'
import { FaUser, FaBuilding } from 'react-icons/fa'
import { colors } from '../../assets/globals'
import { MenuObject } from '../Submenu/components'

let keyEvent = ''

export default function Menu() {
    const { pathname } = useLocation()
    const validPaths = ['/', '/file', '/transactions', '/report', '/utility', '/About']
    const menuActive = !!~validPaths.indexOf(pathname)

    if (keyEvent === "Escape") {
        document.to = 'http:/'
    }

    return (
        <header>
            <div>
                <HeaderH1>
                    Sistema de controle financeiro
                </HeaderH1>
            </div>
            <>
                {
                    
                    menuActive ? (
                        <>
                        <MenuApp>
                            <MenuArq to='/file'>
                                Arquivos
                            </MenuArq>
                            <MenuArq to='/transactions'>
                                Movimentações
                            </MenuArq>
                            <MenuArq to='/report' /*onClick={() => console.log('hola')}*/>
                                Relatórios
                            </MenuArq>
                            <MenuArq to='/utility'>
                                Utilidades
                            </MenuArq>
                            <MenuArq to='/About'>
                                Sobre o sistema
                            </MenuArq>
                        </MenuApp>
                        <MenuAppIcon>
                            <MenuIconDiv width='2.4rem' background={colors.light01}>
                                <MenuIcon to='/Clientes'>
                                    <FaUser size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>
                            <MenuIconDiv width='2.4rem' background={colors.light01}>
                                <MenuIcon to='/menu01/Clientes'>
                                    <FaBuilding size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>
                        </MenuAppIcon>

                        {
                            pathname === '/file' ? (
                            <MenuSty01 marginLeft='1.3rem'>
                                <MenuObject content='Clientes' to='/Clientes'/>
                                <MenuObject content='Fornecedores' to='/menu01/'/>
                                <MenuObject content='Departamentos' to='/menu01/'/>                          
                                <MenuObject content='Produtos' to='/menu01/'/> 
                            </MenuSty01>
                            ) : (<></>)
                        }
                        {
                            pathname === '/transactions' ? (
                            <MenuSty01 marginLeft='7.3rem'>
                                <MenuObject content='Vendas' to='/menu01/'/>
                                <MenuObject content='Compras' to='/menu01/'/>  
                                <MenuObject content='Contas a receber' to='/menu01/'/>  
                                <MenuObject content='Contas a pagar' to='/menu01/'/>  
                            </MenuSty01>
                            ) : (<></>)
                        }
                        {
                            pathname === '/report' ? (
                            <MenuSty01 marginLeft='16.5rem'>
                                <MenuObject content='Financeiro' to='/menu01/'/>
                                <MenuObject content='Produtos' to='/menu01/'/> 
                                <MenuObject content='Clientes' to='/menu01/'/>
                                <MenuObject content='Fornecedores' to='/menu01/'/>
                            </MenuSty01>
                            ) : (<></>)
                        }
                        {
                            pathname === '/utility' ? (
                            <MenuSty01 marginLeft='23.1rem'>
                                <MenuObject content='Dados da empresa' to='/menu01/'/>
                                <MenuObject content='Backup dados' to='/menu01/'/>
                                <MenuObject content='Restore backup' to='/menu01/'/>
                            </MenuSty01>
                            ) : (<></>)
                        }
                        </>
                    ) : (
                        <>
                        <MenuApp>
                            <MenuArq>
                                Arquivos
                            </MenuArq>
                            <MenuArq>
                                Movimentações
                            </MenuArq>
                            <MenuArq>
                                Relatórios
                            </MenuArq>
                            <MenuArq>
                                Utilidades
                            </MenuArq>
                            <MenuArq>
                                Sobre o sistema
                            </MenuArq>
                        </MenuApp>
                        <MenuAppIcon>
                        <MenuIconDiv width='2.4rem' background={colors.light01} backgroundH={colors.light01}>
                                <MenuIcon>
                                    <FaUser size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>
                            <MenuIconDiv width='2.4rem' background={colors.light01} backgroundH={colors.light01}>
                                <MenuIcon>
                                    <FaBuilding size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>                  
                        </MenuAppIcon>
                        </>
                    )

                }
            </>
        </header>
    )
}

window.addEventListener('keydown', function (event) {
    let keyEvent=''
    if (event.key === "Escape") {
        keyEvent = event.key
        return (keyEvent)
    }
});
