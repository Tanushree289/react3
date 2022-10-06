import React from 'react'
import { Link } from 'react-router-dom';


class ClassComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            name:'',
            depart:'',
            rate:'',
            showName:false
        }
    }

    updateName = (event) =>{
        this.setState({name:event.target.value})
    }
    updateDepart = (event) =>{
        this.setState({depart:event.target.value})
    }
    updateRate = (event) =>{
        this.setState({rate:event.target.value})
    }
    handleShowName = () =>{
        const updateArray = this.props.users
        updateArray.push({name:this.state.name,depart:this.state.depart,rate:this.state.rate})
        this.props.updateUsers(updateArray)
       this.setState({showName: true})
    }

render(){
    return(
        <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <p>Name :<input type="text"  value={this.state.name} onChange={this.updateName}/></p>
        <p>Department :<input type="text"  value={this.state.depart} onChange={this.updateDepart}/></p>
        <p>Rating :<input type="number"  value={this.state.rate} onChange={this.updateRate}/></p>
        <Link to="/NextPage"> <button onClick={this.handleShowName}>SUBMIT</button></Link>
        {this.state.showName && 
        <p id="box2">
         {this.state.arr.map(item =>{
         return(
                 <p id='box'>{`Name :${item.name} | Department : ${item.depart} | Rating :${item.rate}`}</p>
            )
         })
        }
        </p>
   }
       </div> 
        
    )
 }
}

export default ClassComponent;
