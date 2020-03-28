import React from 'react';
import './App.css';
import file2, {males, females} from './file2';



const person = file2;

const { firstName, email } = person;

let personV2 = {
    email: email,
    firstName: firstName,
    lastName: person.lastName,
    friends: [...males, ...females],
    gender: person.gender,
    phone: 123456
}


function App2() {
  return (
    <div className="App2">
      <h1>If you see this, it works!!!</h1>
      <p>Firstname: {firstName}, email: {email}</p>
      {console.log(...males,...females)}
      {console.log(...males, firstName, 'Helle', ...females, 'Tina')}
      {console.log(personV2)};
    </div>
  );
}

export default App2;
