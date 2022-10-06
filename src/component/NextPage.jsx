import { Link } from "react-router-dom"
import React from "react"
// import { render } from "@testing-library/react"
class NextPage extends React.Component{
 

   render(){
    return(
       <div>
        <p id="box2">
         {this.props.users.map(item =>{
         return(
                 <p id='box'>{`Name :${item.name} | Department : ${item.depart} | Rating :${item.rate}`}</p>
            )
         })
        }
        </p>
       <p>
         <Link to="/"><button>BACK</button></Link>
       </p>
       </div>
    )
   }
}
export default NextPage;