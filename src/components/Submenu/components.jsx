import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, layout } from '../../assets/globals'

const MenuApp = styled.ul`
    gap: 2rem;
    flex-wrap: wrap;
    display:flex;
    margin-top= -10rem;
    padding: .3rem 1.5rem;
    height:  ${({ height }) => height || 'auto'};
    background: ${colors.backMenu};
    color: ${colors.textMenu};
    border: ${layout.menuLine} ${layout.borderType} ${colors.borderBox};
`

const StyledMenuObj = styled.ul`
    list-style: none;
    color: ${colors.textMenu};
    text-decoration: none;
    font-weight: 500;
    
${this}:hover {
    color: ${colors.tittlesColor};
}     
`
const MenuObject = ({ to, content }) => {
    return (
      <StyledMenuObj
        to={to}
        children
      >
        <b>{content}</b>
      </StyledMenuObj>
    )
  }

  MenuObject.propTypes = {
    content: PropTypes.string,
    to: PropTypes.string,
  }


export { MenuApp, MenuObject }