import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FacilitiesList from './components/FacilitiesList';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" initial/>
				</Scene>
				<Scene
					key="facilityList"
					component={FacilitiesList}
					title="Facilities"
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
