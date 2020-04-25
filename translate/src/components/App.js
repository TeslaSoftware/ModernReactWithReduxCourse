import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component {
    state = {
        language: 'english',
        color: 'red'
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
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate/>
                    </ColorContext.Provider>                    
                </LanguageContext.Provider>                
            </div>
        )
    }
}

export default App;