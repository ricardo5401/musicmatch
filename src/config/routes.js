import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from '../App'
import Login from '../views/login/Body'
import Home from '../views/home/Body'
import Setting from '../views/setting/Body'

export default (
	<Route>
	  <Route path="/" component={App}/>
	  <IndexRoute component={App} />
	  <Route path={"login"} component={Login} />
	  <Route path={"home"} component={Home} />
	  <Route path={"settings"} component={Setting} />
  </Route>
)