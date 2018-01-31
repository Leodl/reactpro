import React, { Component } from 'react';
import $ from 'jquery';


import PropTypes from 'prop-types';//类型检查
export default class Home extends Component {
  constructor(props) {  //初始化函数，每次class一个类，就初始化
    super(props);  //super执行父类的构造函数方法
    //this.age = this.props.age;w
    this.state={
      age:props.age,
      status:0,
      homeLink:props.initialName
    }
      setTimeout(()=>{
      this.setState({
      status:1
    })
  },2000)
      console.log(props)
      
  }

   onClick() {
    this.setState({
      age:this.state.age+3
    })
    console.log(this);
  }

  chuanGreet(){
    this.props.Greet(this.state.age)
  }

  onborther(){
    this.props.borther(this.state.homeLink)
  }
  changeinput(event){
    this.setState({
      homeLink:event.target.value
    })
    console.log(event.target.value)
  }

  componentDidMount(){
     var token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwMDMyMCwidXNlclR5cGUiOjEsInVzZXJOYW1lIjoi5aWV6aOeIn0.hF2PmlYju0Ofk6yp3P4alD_M4auKHEJQa3gaPv8OOIg"
     $.ajax({
        url:"/meritpay/roster/getDetail/100316",
        //type:'post',
       headers:{"User-Token":token},
       contentType: 'application/json',
       dataType: "json",
        success:function(res){
          console.log(res)
        }

     })
  }



  render() {
   // this.getAjax()
    console.log(this.props)
    return (
            <div>
                <p>我叫{this.props.name}，今年{this.state.age}岁,我的爱好是{this.props.user.hobby.map((hobby,i) => <span key={i}>{hobby}</span>)}</p>
                <p>{this.props.children}</p>
                <p>status:{this.state.status}</p>
                <button onClick={this.onClick.bind(this)} type="button" className="btn btn-primary">按钮</button>
                <hr/>
              <button className="btn btn-primary" onClick={this.props.Greet}>点击</button> {/*父组件传递给子组件的方法*/}
              <button className="btn btn-primary" onClick={this.chuanGreet.bind(this)}>点击</button> {/*子组件传递给父组件的方法*/}

              <hr/>
              <input value={this.state.homeLink} onChange={this.changeinput.bind(this)}/>
               <button className="btn btn-primary" onClick={this.onborther.bind(this)}>点击</button> {/*兄弟之间组件传递*/}



            </div>
        
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
};