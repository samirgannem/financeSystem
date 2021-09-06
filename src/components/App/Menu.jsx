import React from 'react'
import {  MenuObject, MenuSty01, HeaderH1, MenuApp, MenuArq, MenuIcon, MenuAppIcon, MenuIconDiv, InfoBox, TitleBox, TitleBox1, ContentInfo, BtnClose } from '../../elements/elements'
import { FaUser, FaBuilding } from 'react-icons/fa'
import { colors } from '../../assets/globals'
// import { MenuObject } from '../Submenu/components'

import ClientesFile from '../../views/Menu01/Clientes'
import FornecedoresFile from '../../views/Menu01/Fornecedores'

const viewsMenu = [
    '#menuFiles',
    '#menuTransactions',
    '#menuReports',
    '#menuTools',
    '#menuAbout'
]

var menuActive='/'

export default function Menu() {

    // const [menuActive, setMenuActive] = React.useState('/') 

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
                            <MenuArq onClick={(e)=>menuView(e,'#menuFiles')}>
                                Arquivos
                            </MenuArq>
                            <MenuArq onClick={(e)=>menuView(e,'#menuTransactions')}>
                                Movimentações
                            </MenuArq>
                            <MenuArq onClick={(e)=>menuView(e,'#menuReports')}>
                                Relatórios
                            </MenuArq>
                            <MenuArq onClick={(e)=>menuView(e,'#menuTools')}>
                                Utilidades
                            </MenuArq>
                            <MenuArq onClick={(e)=>menuView(e,'#menuAbout')}>
                                Sobre o sistema
                            </MenuArq>
                        </MenuApp>
                        <MenuAppIcon>
                            <MenuIconDiv width='2.4rem' background={colors.light01}>
                                <MenuIcon>
                                    <FaUser onClick={(e)=>fileView(e,'#clientes')} size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>
                            <MenuIconDiv width='2.4rem' background={colors.light01}>
                                <MenuIcon>
                                    <FaBuilding onClick={(e)=>fileView(e,'#fornecedores')} size='1.8rem' color={colors.blueAccent}/>
                                </MenuIcon>
                            </MenuIconDiv>
                        </MenuAppIcon>

                            <div id='menuFiles' style={{display: 'none'}}>
                                <MenuSty01 marginLeft='1.3rem'>
                                    <MenuObject onClick={(e)=>fileView(e,'#clientes')}>
                                        Clientes
                                    </MenuObject>
                                    <MenuObject onClick={(e)=>fileView(e,'#fornecedores')}>
                                        Fornecedores
                                    </MenuObject>
                                    <MenuObject>
                                        Departamentos
                                    </MenuObject>                          
                                    <MenuObject>
                                        Produtos
                                    </MenuObject>
                                </MenuSty01>
                            </div>
                            <div id='menuTransactions' style={{display: 'none'}}>
                                <MenuSty01 marginLeft='7.3rem'>
                                    <MenuObject>
                                        Vendas
                                    </MenuObject>
                                    <MenuObject>
                                        Compras
                                    </MenuObject>
                                    <MenuObject>
                                        Contas a receber
                                    </MenuObject>
                                    <MenuObject>
                                        Contas a pagar
                                    </MenuObject>
                                </MenuSty01>
                            </div>
                            <div id='menuReports' style={{display: 'none'}}>
                                <MenuSty01 marginLeft='16.5rem'>
                                    <MenuObject content='Financeiro' />
                                    <MenuObject content='Produtos' /> 
                                    <MenuObject content='Clientes' />
                                    <MenuObject content='Fornecedores' />
                                </MenuSty01>
                            </div>
                            <div id='menuTools' style={{display: 'none'}}>
                                <MenuSty01 marginLeft='23.1rem'>
                                    <MenuObject content='Dados da empresa' />
                                    <MenuObject content='Backup dados' />
                                    <MenuObject content='Restore backup' />
                                </MenuSty01>
                            </div>
                            <div id='menuAbout' style={{display: 'none'}}>
                                <InfoBox>
                                    <TitleBox>
                                        <TitleBox1>
                                            - Sistema de controle financeiro
                                        </TitleBox1>
                                        <BtnClose onClick={(e)=>menuViewClose(e)}>
                                            X
                                        </BtnClose>           
                                    </TitleBox>

                                    <ContentInfo>

                                    </ContentInfo>
                                    <ContentInfo>
                                        Sistema financeiro para controle de estoque,
                                    </ContentInfo>
                                    <ContentInfo>
                                        faturamento, compras, contas a receber e pagar.
                                    </ContentInfo>
                                    <ContentInfo>
                                        
                                    </ContentInfo>
                                    <ContentInfo>
                                        Colaboradores no desenvolvimento
                                        Samir Gannem, Elvis Gannem e Erick Gannem
                                    </ContentInfo>
                                </InfoBox>
                            </div>

                            <div id='clientes' style={{display: 'none'}}>
                                <ClientesFile/>
                            </div>     
                            <div id='fornecedores' style={{display: 'none'}}>
                                <FornecedoresFile/>
                            </div>
                            <div id='departamentos' style={{display: 'none'}}>

                            </div>
                            <div id='produtos' style={{display: 'none'}}>

                            </div>
                            <div id='usuarios' style={{display: 'none'}}>

                            </div>                       
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
                                <FaUser size='1.8rem' color={colors.logoAccent}/>
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

// function btnClose(e) {
//     console.log(e)
//     document.location='/'
// }

function menuViewClose(e) {
    var element = ''
    viewsMenu.forEach((n, i) => {
        element = document.querySelector(viewsMenu[i])
        element.style.display = 'none'
    }
    )
}

function menuView(e, menuActivate) {
    var element = ''
    menuViewClose()
    element = document.querySelector(menuActivate)
    element.style.display = ''
}

function fileView(e, viewActivate) {
    // this.setMenuActive = undefined
    var element = ''
    console.log(viewActivate)
    menuViewClose()
    element = document.querySelector(viewActivate)
    element.style.display = ''
}

window.addEventListener('keydown', function (event) {
    let keyEvent=''
    if (event.key === "Escape") {

        var element = ''
    
        viewsMenu.forEach((n, i) => {
            element = document.querySelector(viewsMenu[i])
            element.style.display = 'none'
        }
        )
    
        keyEvent = event.key
        return (keyEvent)
        
    }
});
