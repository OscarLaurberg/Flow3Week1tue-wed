import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import App3, {Welcome} from './App3';
import UseState from './Components/UseState';
import ListsAndKeys from './Components/ListsAndKeys';
import ListDemoApp2 from './Components/ListDemoApp2';
import FormDemo from './Components/FormDemo';
import './App.css';
import FormDemoMultiple from './Components/FormDemoMultiple';

let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">ex1</a> &nbsp;
         <a href="/"  className="x" id="app2">ex2</a> &nbsp;
         <a href="/"  className="x" id="app3">ex3</a> &nbsp;
         <a href="/"  className="x" id="useState">State and Events with react</a> &nbsp;
         <a href="/"  className="x" id="listsAndKeys">Lists and keys</a> &nbsp;
         <a href="/"  className="x" id="listDemoApp2">Lists Demo App2</a> &nbsp;
         <a href="/"  className="x" id="formDemo">Form demo</a> &nbsp;
         <a href="/"  className="x" id="formDemoMultiple">Form demo Multiple</a> &nbsp;

         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "useState": app = <UseState />; break;
        case "listsAndKeys": app = <ListsAndKeys />; break;
        case "listDemoApp2": app = <ListDemoApp2 />; break;
        case "formDemo": app = <FormDemo />; break;
        case "formDemoMultiple": app = <FormDemoMultiple />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
