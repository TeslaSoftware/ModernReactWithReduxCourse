//import the react and reactDOm libs
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App = () => {
    const buttonText = { text: 'Click Me' };
    const style = { backgroundColor: 'blue', color: 'white'}

    return (
        <div>Hi there!
            <label className="label" htmlFor="name" >
                Enter Name
            </ label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById("root")
);