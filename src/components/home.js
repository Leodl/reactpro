import React, { Component } from 'react';

import PropTypes from 'prop-types';//类型检查
export default class Home extends Component {
  constructor(props) {  //初始化函数，每次class一个类，就初始化
    super(props);  //super执行父类的构造函数方法
    //this.age = this.props.age;
    this.state={
      age:props.age,
      ststus:0
    },
      setTimeout(()=>{
    this.setState({
      status:1
    })
  },2000)
      
  }

   onClick() {
    this.setState({
      age:this.state.age+3
    })
    console.log(this);
  }


  render() {
    console.log(this.props)
    return (
            <div>
                <p>我叫{this.props.name}，今年{this.state.age}岁,我的爱好是{this.props.user.hobby.map((hobby,i) => <span key={i}>{hobby}</span>)}</p>
                <p>{this.props.children}</p>
                <p>{this.state.status}</p>
                <button onClick={()=>{this.onClick()}} type="button" className="btn btn-primary">按钮</button>
            </div>
        
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
};