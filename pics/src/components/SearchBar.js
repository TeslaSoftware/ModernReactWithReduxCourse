import React from 'react';

export default class SearchBar extends React.Component{

	constructor(props){
		super(props);
		this.state = { term : '' }
	}
    
	onFormSubmit = (event) =>{
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render(){
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit} >
					<div className="field" >
						<label>Image search</label>
						<input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
					</div>
				</form>
			</div>
		);
	}
}