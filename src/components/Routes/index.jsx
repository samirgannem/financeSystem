import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import ClientesFile from '../../views/Menu01/Clientes'

// import About from '../../views/About'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/Clientes' component={ClientesFile} />
      {/* <Route path='/About' component={About} /> */}
    </Switch>
  )
}