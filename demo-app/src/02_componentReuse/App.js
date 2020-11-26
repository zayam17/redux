import React, { Component } from 'react';

class WelcomeComponent extends Component {
    
    render() { 
        return ( 
            <h1>Welcome to React!!</h1>
         );
    }
}

class App extends Component {

    render() { 
        return (
            <>
            <WelcomeComponent />
            <WelcomeComponent />
            <WelcomeComponent />

            </>
          );
    }
}
 
export default App;
 
