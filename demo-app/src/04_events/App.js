import React, { Component } from 'react';

class App extends Component {
     handleText(event){
         console.log(event.target.value);
     }
     add(){
         alert('add clicked');
     }
     edit(){
         alert('Edit clicked');
     }
     delete(){
         alert('delete clicked');
     }
    render() { 
        return ( 
            <>
            <h2>EVENT DEMO</h2>
            <input type="text" onChange={(e) => this.handleText(e)} />
            <button onClick={() => this.add()}>Add</button>
            <button onClick={() => this.edit()}>edit</button>
            <button onClick={() => this.delete()}>delete</button>

            
            </>
         );
    }
}
 
export default App;