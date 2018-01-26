import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//把组件引过来

import Header from './components/header'
import Home from './components/home'

class App extends Component {
  render() {
     const user={
             name:"yh",
             hobby:["吃饭","睡觉"]
 }

    return (
    <div className="container">
    <p>我是app</p>
     <Header/>
     <Home name={"Leo"} age={18} user={user}>
       <a>我是home的子组件</a>   //利用组件的闭合标签，写一个子组件 在通过this.props.children接受
     </Home>  

     
    </div>
     
    );
  }
}

export default App;
