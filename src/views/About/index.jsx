import React from 'react'
import { TitleBox, TitleBox1, BtnClose, InfoBox, ContentInfo } from '../../elements/elements';

export default function About () {
    return (
        <InfoBox>
            <TitleBox>
                <TitleBox1>
                    - Sistema de controle financeiro
                </TitleBox1>
                <BtnClose to='/'>
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
    )
}

