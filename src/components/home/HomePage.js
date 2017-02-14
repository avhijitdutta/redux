import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component{
	render(){
		return (
			<div className="jumbotron text-center">
      <h1>My First Bootstrap Page</h1>
      <p>Resize this responsive page to see the effect!</p>
      <Link to="about" className="btn btn-primary btn-lg"> Learn More </Link>
			</div>
		);
	}
}

export default HomePage;
