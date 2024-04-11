import React, { Component } from 'react'

class LVH_ClassComp extends Component {
    constructor(props){
        super(props);
        // tạo đói tượng dữ liệu
        this.state={
            firtName:"Lê Văn",
            listname:"Hoàng",
            userName:"K22CNT3",

        }
    }
    // arrow funcion
    member=(props)=>{
        return(
            <div className='alert alert-danger'>
                <h3>Xin chào:{props.fullName}-Bạn đã {props.age}tuổi.</h3>
            </div>

        );
    }
    ListMember=()=>{
    
        return(
            <>
            <this.member fullName="Lê Văn Hoàng" age="20"/>
            <this.member fullName="Lê Văn Hoàng A" age="22"/>
            <this.member fullName="Lê Văn Hoàng B" age="23"/>
            <this.member fullName="Lê Văn Hoàng c" age="24"/>
            </>
        )
    };
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Class Component Demo</h2>
        <hr/>
        <h3>Dữ liệu trong State</h3>
        <h4>Xin chào: {this.state.firtName}</h4>
        <hr/>
        <h3>Dữ liệu từ props</h3>
        <p>Company:{this.props.company}</p>
        <p>Course:{this.props.course}</p>
        <hr/>
        <this.member fullName="Lê Văn Hoàng" age="20"/>
        <hr/>
        <this.ListMember/>

      </div>
    )
  }
}
export default LVH_ClassComp;