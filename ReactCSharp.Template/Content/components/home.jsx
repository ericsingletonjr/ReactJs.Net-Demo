import { Component, Fragment } from 'react';
import {
	Link,
	BrowserRouter,
	Route,
	Switch,
	StaticRouter,
	Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Inventory } from './inventory.jsx';

class Navbar extends Component {
	render() {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
			</ul>
		);
	}
}

class HomePage extends Component {
	render() {
		return (
			<Fragment>
				<Helmet>
					<title>ReactJS.NET Demos</title>
				</Helmet>
				<h1
					style={{
						lineHeight: '2',
						color: '#222',
						fontFamily: 'Helvetica, sans-serif',
						textShadow: '0 0 5px lightgray',
					}}
				>
					ReactJS.NET is 🔥🔥
				</h1>
			</Fragment>
		);
	}
}

export default class HomeComponent extends Component {
	render() {
		const app = (
			<Fragment>
				<Navbar />
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Redirect to="/home" />}
					/>
					<Route path="/home" component={HomePage} />					
                    <Route path="/inventory" component={Inventory} />
					<Route
						path="*"
						component={({ staticContext }) => {
							if (staticContext) staticContext.status = 404;

							return <h1>Not Found :(</h1>;
						}}
					/>
				</Switch>
			</Fragment>
		);

		if (typeof window === 'undefined') {
			return (
				<StaticRouter
					context={this.props.context}
					location={this.props.location}
				>
					{app}
				</StaticRouter>
			);
		}
		return <BrowserRouter>{app}</BrowserRouter>;
	}
}
