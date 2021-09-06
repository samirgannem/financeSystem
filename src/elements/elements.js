import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { colors, layout } from '../assets/globals'

const HeaderH1 = styled.h1`
    background: ${colors.background};
	color: ${colors.textMenu};
	padding: .2rem 1rem;
	font-size: 1.2rem;
	font-weight: 100;
`

const MenuApp = styled.ul`
    gap: 2rem;
    flex-wrap: wrap;
    display:flex;
    padding: .3rem 1.5rem;
    height:  ${({ height }) => height || 'auto'};
    background: ${colors.backMenu};
    color: ${colors.textMenu};
    border: ${layout.menuLine} ${layout.borderType} ${colors.borderBox};
`

const MenuArq = styled.ul`
    list-style: none;
    color: ${colors.textMenu};
    text-decoration: none;
    
    &:hover {
        color: ${colors.tittlesColor};
    }     
`

const MenuAppIcon = styled.ul`
    gap: 2px;
    flex-wrap: wrap;
    display:flex;
    padding: 0;
    height:  ${({ height }) => height || 'auto'};
    background: ${colors.whiteTransparency};
    color: ${colors.textMenu};
    border: ${layout.menuLine} ${layout.borderType} ${colors.borderBox};
`

const MenuIconDiv = styled.div`
    heigth: 100%;
    width:  ${({ width }) => width || 'auto'};
    justify-items: center;
    justify-content: center;
    padding: 0.2rem 0 0 0.2rem;
    background: ${({ background }) => background || colors.whiteTransparency };
    border: ${layout.menuLine} ${layout.borderType} ${colors.borderBox};
    border-radius: ${layout.borderRadius};
    
    &:hover {
        background:  ${({ backgroundH }) => backgroundH || colors.tittlesColor};
    }     
`

const MenuIcon = styled.ul`
    list-style: none;
    heigth: 100%;
    z-index: 1;
    
    &:hover {
        color: ${colors.tittlesColor};
    }     
`

const ButtonActionsProps = styled.button`
    padding: .5rem;
    text-align: center;
    width: ${({ width }) => width || '8rem'};
    background: ${({ background }) => background || 'rgb(215, 215, 215)'};
    color: ${({ color }) => color || 'black'};
    font-weight: 700;
    font-size: .9rem;
    border-radius: ${layout.borderRadius};
    transition: .5s;

    &:hover {
        background: ${colors.tittlesColor};
        border-radius: ${layout.borderRadius};
    }
`
const ButtonActions = ({ width, background, color, children }) => {
    return (
        <ButtonActionsProps width={width} background={background} color={color}>
            {children}
        </ButtonActionsProps>
    )
}

ButtonActions.propTypes = {
    width: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
}

const FrameButtonProps = styled.div`
    display: flex;
    flex-direction:row;
    padding: 1rem 0;
    gap: 2rem;
    border-radius: 0 0 ${layout.borderRadius} ${layout.borderRadius};
    justify-content: center;
    height: ${({ height }) => height || '100vh'};
    background: ${({ background }) => background || ''};
`

const FrameButton = ({ height, background, children }) => {
    return (
        <FrameButtonProps height={height} background={background}>
            {children}
        </FrameButtonProps>
    )
}

FrameButton.propTypes = {
    height: PropTypes.string,
}

const FrameGroupProps = styled.div`
    display: flex;
    gap: .5rem;
    padding: .5rem;
    justify-content: left;
    width: ${({ width }) => width || '90%'};
`

const FrameGroup = ({ width, children }) => {
    return (
      <FrameGroupProps width={width}>
          {children}
      </FrameGroupProps>
    )
  }

FrameGroup.propTypes = {
    width: PropTypes.string,
  }

const InputBoxProps = styled.input`
  color: black;
  text-decoration: none;
  background: ${colors.backgroundInput};
  padding: .1rem .3rem;
  border-radius: 2px;
  border: ${layout.menuLine} ${layout.borderType} ${colors.borderBox};
  border-height: 1px;
  font-size: .9rem;
  width: ${({ width }) => width || '10rem'};
  text-align: ${({ textAlign }) => textAlign || 'left'};

  &:hover {
      cursor: text;
  }
`
const InputBox = ({ width, textAlign }) => {
    return (
      <InputBoxProps width={width} textAlign={textAlign}>
          
      </InputBoxProps>
    )
  }

  InputBox.propTypes = {
    width: PropTypes.string,
  }


const CadastroBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: ${layout.borderRadius};
    justify-content: space-between;
    background:  ${colors.textMenu};
    gap: .5rem;
    margin: ${({ margin }) => margin || '3.7rem 0 0 1.3rem' };
    width:  ${({ width }) => width || 'auto' };
    height:  ${({ height }) => height || 'auto' };  
    -webkit-box-shadow: ${layout.boxShadow1} ${layout.boxShadow2} ${layout.boxShadow3} ${colors.shadow};
    -moz-box-shadow: ${layout.boxShadow1} ${layout.boxShadow2} ${layout.boxShadow3} ${colors.shadow};
    box-shadow: ${layout.boxShadow1} ${layout.boxShadow2} ${layout.boxShadow3} ${colors.shadow}
`

const TitleBox = styled.span`
    display: flex;
    justify-content: space-between;
    color: ${colors.tittlesColor};
    background: ${colors.background};
    width: 100%;
    border-radius: ${layout.borderRadius} ${layout.borderRadius} 0 0;
`

const TitleBox1 = styled.a`
    color: ${colors.tittlesColor};
    padding: .3rem .5rem;
`

// const BtnClose = styled(Link)`
const BtnClose = styled.button`
    color: red;
    text-decoration: none;
    background: ${colors.backgroundInput};
    border-radius: ${layout.borderRadius};
    padding: .3rem .6rem;
    border-radius: 2px;
    
    &:hover {
        background: red;
        color: ${colors.tittlesColor};
        border-radius: ${layout.borderRadius};
    }
     
`

const LabelBox = styled.span`
    color: black;
    text-decoration: none;
    background: ${colors.textMenu};
    padding: .3rem .6rem;
    border-radius: 2px;
    font-size: .9rem;
    width: 8rem;
    text-align: right;
`

//Styles Menu
const MenuSty01 = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: ${colors.dark03};
    gap: .5rem;
    margin-top: ${layout.menuTop};
    margin-left: ${({ marginLeft }) => marginLeft || 0};
    padding: .5rem;
    width: 12rem;
    border: ${layout.menuLine} ${layout.borderType} ${colors.borderBox};
    -webkit-box-shadow: ${layout.boxShadowMenu1} ${layout.boxShadowMenu2} ${layout.boxShadowMenu3} ${colors.shadow};
    -moz-box-shadow: ${layout.boxShadowMenu1} ${layout.boxShadowMenu2} ${layout.boxShadowMenu3} ${colors.shadow};
    box-shadow: ${layout.boxShadowMenu1} ${layout.boxShadowMenu2} ${layout.boxShadowMenu3} ${colors.shadow}
`

// const MenuObject = styled(Link)`
const MenuObject = styled.ul`
list-style: none;
    color: ${colors.textMenu};
    text-decoration: none;
    
    &:hover {
        color: ${colors.tittlesColor};
    }

`

const InfoBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: ${layout.borderRadius};
    justify-content: space-between;
    background: ${colors.borderBox};
    gap: .5rem;
    padding: 0 0 1rem 0;
    margin: ${({ margin }) => margin || '28% 0 0 33%' };
    width:  ${({ width }) => width || '34%' };
    height:  ${({ height }) => height || 'auto' };  
    -webkit-box-shadow: ${layout.boxShadow1} ${layout.boxShadow2} ${layout.boxShadow3} ${colors.shadow};
    -moz-box-shadow: ${layout.boxShadow1} ${layout.boxShadow2} ${layout.boxShadow3} ${colors.shadow};
    box-shadow: ${layout.boxShadow1} ${layout.boxShadow2} ${layout.boxShadow3} ${colors.shadow}
`


const ContentInfo = styled.span`
    color: ${colors.textMenu};
    padding: 0 1rem;
`


export { HeaderH1, MenuApp, MenuArq, MenuAppIcon, MenuIcon, MenuIconDiv, ButtonActions, FrameButton, FrameGroup, InputBox, CadastroBox, TitleBox, TitleBox1, BtnClose, LabelBox, MenuSty01, MenuObject, colors, layout, InfoBox, ContentInfo}