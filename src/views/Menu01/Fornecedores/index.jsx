import React from 'react'
import { ButtonActions, FrameButton, FrameGroup, InputBox, CadastroBox, TitleBox, TitleBox1, BtnClose, LabelBox, colors } from '../../../elements/elements' 

export default function Menu01_Fornecedores () {
    return (
        <>
        <CadastroBox width='52%' height='52%' margin='14% 0 0 24%'>
            <TitleBox>
                <TitleBox1>
                    - Cadastro de fornecedores
                </TitleBox1>
                <BtnClose to="/">
                        X
                </BtnClose>
            </TitleBox>
            <FrameGroup/>
            <FrameGroup/>
            <FrameGroup width = '100%'>
                <LabelBox>
                    CODIGO :
                </LabelBox>
                <InputBox id="codText" textAlign = 'right'>

                </InputBox>
            </FrameGroup>
            <FrameGroup width = '100%'>
                <LabelBox>
                    NOME :
                </LabelBox>
                <InputBox width = '30rem'>

                </InputBox>
            </FrameGroup>
            <FrameGroup width = '100%'>
                <LabelBox>
                    CPF/CNPJ :
                </LabelBox>
                <InputBox width = '10rem'>

                </InputBox>
                <LabelBox>
                    RG :
                </LabelBox>
                <InputBox width = '10rem'>

                </InputBox>
            </FrameGroup>
            <FrameGroup width = '100%'>
                <LabelBox>
                    ENDEREÇO :
                </LabelBox>
                <InputBox width = '30rem'>

                </InputBox>
            </FrameGroup>
            <FrameGroup width = '100%'>
                <LabelBox>
                    EMAIL :
                </LabelBox>
                <InputBox width = '20rem'>

                </InputBox>
            </FrameGroup>
            <FrameGroup width = '100%'>
                <LabelBox>
                    TELEFONE :
                </LabelBox>
                <InputBox width = '20rem'>

                </InputBox>
            </FrameGroup>
            <FrameGroup width = '100%'>
                <LabelBox>
                    CONVENIO :
                </LabelBox>
                <InputBox width = '5rem'>

                </InputBox>
            </FrameGroup>
            <FrameButton height = 'auto' background = {colors.background}>
                <ButtonActions color = 'blue'>
                    Salvar
                </ButtonActions>
                <ButtonActions color = 'red'>
                    Cancelar
                </ButtonActions>
            </FrameButton>
        </CadastroBox>
        </>
        
    )
}

export function clearForm () {
    var pCod = document.getElementById('codText');
    pCod.textContent = '';
}
