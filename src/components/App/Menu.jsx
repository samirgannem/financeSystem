import React from 'react'
import { HeaderH1, MenuApp, MenuArq, MenuIcon, MenuAppIcon, MenuIconDiv } from '../../elements/elements'
import { useLocation } from 'react-router-dom'
import { FaUser, FaBuilding } from 'react-icons/fa'
import { colors } from '../../assets/globals'

export default function Menu() {
    const { pathname } = useLocation()
    const validPaths = ['/', '/menu01', '/menu02', '/menu03', '/menu04', '/About']
    const menuActive = !!~validPaths.indexOf(pathname)
    console.log(pathname)
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
                            <MenuArq to='/menu01'>
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
                            <MenuArq to='/About'>
                                Sobre o sistema
                            </MenuArq>
                        </MenuApp>
                        <MenuAppIcon>
                            <MenuIconDiv width='2.4rem' background={colors.light01}>
                                <MenuIcon to='/menu01/Clientes'>
                                    <FaUser size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>
                            <MenuIconDiv width='2.4rem' background={colors.light01}>
                                <MenuIcon to='/menu01/Clientes'>
                                    <FaBuilding size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>
                        </MenuAppIcon>
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

