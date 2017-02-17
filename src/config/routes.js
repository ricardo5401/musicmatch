import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from '../App'
import Splash from '../views/login/Splash'
import Login from '../views/login/Body'
import Home from '../views/home/Body'
import Setting from '../views/setting/Body'
import Profile from '../views/profile/Body'
import Onboarding from '../views/onboarding/Body'

export default (
	<Route>
	  <Route path="/" component={App}/>
	  <IndexRoute component={App} />
	  <Route path={"login"} component={Login} />
	  <Route path={"splash"} component={Splash} />
	  <Route path={"home"} component={Home} />
	  <Route path={"settings"} component={Setting} />
	  <Route path={"profile"} component={Profile} />
	  <Route path={"onboarding"} component={Onboarding} />
  </Route>
)