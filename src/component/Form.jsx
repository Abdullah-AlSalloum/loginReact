import React , {useState} from "react";
import Input from "./Input";








function Form(props) {
  const [isMoureOver , setMouseOver] = useState(false)
  function HandleMouseOver(){
    setMouseOver(true)
  }
  
  function HandleMouseOut(){
    setMouseOver(false)
  }
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegisterd ? null : <Input type="password" placeholder="Confirm Password"/>}
      <button style={{backgroundColor : isMoureOver ? "black" : "white"}} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut} type="submit">{props.isRegisterd ? "Login" : "Resgister"}</button>

    </form>
  );
}

export default Form;
