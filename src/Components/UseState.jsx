import { useState } from "react";
import "../App.css"


// PROGRESSION 1 | UPDATE STATE USING useState



// function UseState(){
//   const [currAge,setAge] = useState(19);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <button onClick={handleAge}>Get Older</button>
//     </div>
//   );
// }

// export default UseState;



// ------------------------------------------------------------------------------------------------



// PROGRESSION 2 | MULTIPLE STATE



// function UseState(){
//   const [currAge,setAge] = useState(19);
//   const [currsib,setSib] = useState(1);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   const handleSib = ()=>{
//     setSib(currsib+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h3>My siblings {currsib}</h3>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;


// ------------------------------------------------------------------------------------------------


// PROGRESSION 3 | USE OBJECT STATE


function UseState(){

  const [state, setState] = useState({age:19, siblings:1});

  const handleState = (val)=>{
    setState({
      ...state,[val]:state[val]+1
    })
  }

  const {age,siblings} = state;

  return(
    <div>
      <h3>My Current Age is {age}</h3>
      <h4>My siblings {siblings}</h4>
      <button onClick={()=>{handleState("age")}}>age</button>
      <button onClick={()=>{handleState("siblings")}}>sib</button>
    </div>
  )

}

export default UseState;

// ------------------------------------------------------------------------------------------------


// PROGRESSION 4 | INITIALIZE STATE FROM FUNCTION

// function UseState(){

//     const [currAge, setAge] = useState(19);
//     const [currSib, setSib] = useState(3);
  
//     return(
//       <div>
//         <h3>My Current Age is {currAge}</h3>
//         <h4>My siblings {currSib}</h4>
  
//         <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//         <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//       </div>
//     )
  
//   }
  
//   export default UseState;
  
  
// ------------------------------------------------------------------------------------------------









  