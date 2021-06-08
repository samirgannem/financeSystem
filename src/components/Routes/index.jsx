import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Menu01 from '../../views/Menu01'
import Menu02 from '../../views/Menu02'
import Menu03 from '../../views/Menu03'
import Menu04 from '../../views/Menu04'
import Menu05 from '../../views/Menu05'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Menu01} />
      <Route path='/menu02' component={Menu02} />
      <Route path='/menu03' component={Menu03} />
      <Route path='/menu04' component={Menu04} />
      <Route path='/menu05' component={Menu05} />
    </Switch>
  )
}