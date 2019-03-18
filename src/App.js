import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers=[
 {
  'id':1,
  'image' : "https://placeimg.com/64/64/1",
  'name':'조명기',
  'birthday':'980719',
  'gender':'남자',
  'job':'대학생'
  
},
{
  'id':2,
  'image' : "https://placeimg.com/64/64/2",
  'name':'파커',
  'birthday':'150819',
  'gender':'남자',
  'job':'강아지'  
},
{
  'id':3,
  'image' : "https://placeimg.com/64/64/3",
  'name':'유금석',
  'birthday':'980009',
  'gender':'남자',
  'job':'군인'  
}

]


class App extends Component {//웹문서에서 보여지게 될 최소단위
  render() {
    return (
      <div>
      {
        customers.map(c=>{
          return <Customer  key={c.id}  id={c.id}  image={c.image} name={c.name}  birthday={c.birthday} gender={c.gender} job={c.job}
          />
        })
      }
      </div>
    );
  }
}

export default App;
