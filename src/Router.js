import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FacilitiesList from './components/FacilitiesList';
import ResourcesList from './components/ResourcesList';
import ResourceEditForm from './components/ResourceEditForm';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" initial/>
				</Scene>
				<Scene key="main">
					<Scene
						key="facilityList"
						component={FacilitiesList}
						title="Facilities"
					/>
					<Scene
						key="resourceList"
						component={ResourcesList}
						title="Resources"
					/>
					<Scene
						key="showResource"
						component={ResourceEditForm}
						title="Edit Resource"
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
