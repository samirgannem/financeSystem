import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Menu00 from '../../views/Menu00'
import Menu01 from '../../views/Menu01'
import Menu01_Clientes from '../../views/Menu01/Clientes'
import Menu01_Fornecedores from '../../views/Menu01/Fornecedores'
import Menu02 from '../../views/Menu02'
import Menu03 from '../../views/Menu03'
import Menu04 from '../../views/Menu04'
import About from '../../views/About'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Menu00} />
      <Route exact path='/menu01' component={Menu01} />
      <Route exact path='/menu01/Clientes' component={Menu01_Clientes} />
      <Route exact path='/menu01/Fornecedores' component={Menu01_Fornecedores} />
      <Route path='/menu02' component={Menu02} />
      <Route path='/menu03' component={Menu03} />
      <Route path='/menu04' component={Menu04} />
      <Route path='/About' component={About} />
    </Switch>
  )
}