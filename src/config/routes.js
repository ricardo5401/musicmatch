import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from '../App'
import LoginForm from '../views/login/Form'
import Login from '../views/login/Splash'
import Home from '../views/home/Body'
import Chat from '../views/chat/Body'
import Setting from '../views/setting/Body'
import Profile from '../views/profile/Body'
import Onboarding from '../views/onboarding/Body'

export default (
	<Route>
	  <Route path="/" component={App}/>
	  <IndexRoute component={App} />
	  <Route path={"login"} component={Login} />
	  <Route path={"auth"} component={LoginForm} />
	  <Route path={"home"} component={Home} />
	  <Route path={"settings"} component={Setting} />
	  <Route path={"chat/:id"} component={Chat} />
	  <Route path={"profile"} component={Profile} />
	  <Route path={"onboarding"} component={Onboarding} />
  </Route>
)