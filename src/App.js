import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customer={
  'name':'조명기',
  'birthday':'980719',
  'gender':'남자',
  'job':'대학생'

}

class App extends Component {//웹문서에서 보여지게 될 최소단위
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
  
      />
    );
  }
}

export default App;
