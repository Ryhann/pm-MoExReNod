import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MainApp, Login, Register } from '../../pages'

const routes = () => {
  return (
    <Router>
        <Switch>
            <Route path='/login'><Login/></Route>
            <Route path='/register' ><Register /></Route>
            <Route path='/'><MainApp/></Route>
        </Switch>
    </Router>
  )
}

export default routes;
