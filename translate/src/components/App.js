import React from 'react';

class App extends React.Component {
    state = {
        language: 'english'
    };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select a lanaguage: 
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag pl" onClick={() => this.onLanguageChange('polish')} />
                </div>
                {this.state.language}
            </div>
        )
    }
}

export default App;