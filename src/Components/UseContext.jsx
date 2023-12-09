import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const [text, setText] = useState(false);
  const [likes, setLikes] = useState(0);


  useEffect(()=>{
    alert("Content button is clicked")
  },[text])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div style={themeStyle}>
      {text &&
      
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fugiat
        tempora atque modi cumque officiis reiciendis quae ut repellat
        doloremque, corrupti tempore eum expedita autem. Enim nemo animi quos
        quisquam.
      </p>}
      <button onClick={() => setText(!text)}>Content</button>
      <h1>{likes}</h1>
      <button onClick={()=>setLikes(pre=>pre+1)}>Like</button>
    </div>
  );
}

export default UseContext;
