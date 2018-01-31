import React, { Component } from 'react';


export default class Header extends Component {
   constructor(props){
   	console.log(props)
   	super(props);
   	this.state = {
   		id:6
   	}
   }

   topath(){
    // this.props.history.push("/first/2")
    // console.log(this.props.history)
    window.location="#/first/"+this.state.id
   }



  render() {
  	//console.log(this.props)
    return (
      <div>
     <p>{this.props.homeLink}</p>
     <h1>Header</h1>

      <div>
 
    </div>
      <a href="#/header">点击跳转header</a>
      <button className="btn btn-primary" onClick={this.topath.bind(this)}>点击跳转first</button>
      </div>
     
   
    );
  }
}


