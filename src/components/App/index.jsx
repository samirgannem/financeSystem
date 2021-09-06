import React from 'react'
import {
  BrowserRouter as Router

} from 'react-router-dom'
import Routes from '../Routes'

import Menu from "./Menu";
import Footer from "./Footer";
import styled from 'styled-components';
//import Home from './views/Home'

function App() {
  return (
    <Wrapper>
      <Menu />
      <Router>
        <Routes />
      </Router>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: space-between;
	  height: 100vh;
`


