import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';

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
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>                
            </div>
        )
    }
}

export default App;