import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router,Route} from "react-router-dom"

//把组件引过来

import Header from './components/header'
import Home from './components/home'
import first from './components/first'

class App extends Component {
  constructor(){
    super();
    this.state = {
      homeLink:"header"
    }
  }


    onGreet(age){
    alert(age)
     }

     borther(newName){
       this.setState({
        homeLink:newName
       })
     }
  render() {
    const user = {
      name: "yh",
      hobby: ["吃饭", "睡觉"]
    }

    return (
      <div className="container">


   <Header homeLink={this.state.homeLink} />
     <Home name={"Leo"} 
           age={18} user={user} 
           Greet={this.onGreet.bind(this)} 
           borther={this.borther.bind(this)}
           initialName={this.state.homeLink}
         >    {/*父组件写参数，传递给子组件*/}
       <a>我是home的子组件</a>       {/*利用组件的闭合标签，写一个子组件 在通过this.props.children接受*/}
     </Home>  





      
    

      <Router>
       <div>
       <Route exact path="/header" component={Header} /> 
       <Route  path="/first/:id" component={first} /> 
        </div>
       </Router>


     
    </div>


    );
  }
}

export default App;
