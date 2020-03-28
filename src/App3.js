import React from 'react';
import PropTypes from 'prop-types';
import  {names} from "./file2";


export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

let person = {firstName: 'Joe', lastName: 'Carl'};

 export function WelcomePerson(props) {
     return <h1>Hello, {props.firstName} {props.lastName} {props.email} </h1>
 } 

 WelcomePerson.propTypes = {
    firstName : PropTypes.string.isRequired,
    lastName : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired

 }

  Welcome.propTypes = {
      name : PropTypes.string.isRequired
  }
  
  function App() {
    return (
      <div>
        <Welcome />
        <Welcome name={432} />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
       {/*<WelcomePerson person={names[0]}/>
        <WelcomePerson person={person}/>*/}
        {names.map((person) => <WelcomePerson {...person}/>)}
      </div>
   
   );
  }

  export default App;
