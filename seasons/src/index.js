import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component { 
	constructor(props){
		super(props);
		this.state = {
			lat : null,
			long: null,
			errorMessage : ''
		};   
	}

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				});
			},
			(error) => this.setState({ errorMessage : error.message})
		);
	}
  
	renderContent(){
		if(this.state.errorMessage && !this.state.lat){
			return <div> Error: {this.state.errorMessage} </div> ;
		}

		if(!this.state.errorMessage && this.state.lat){
			return <SeasonDisplay lat ={this.state.lat} long={this.state.long} />;
		}

		return <Spinner message="Please acccept location request" />;
	}

	render(){		
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
