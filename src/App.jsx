 import Counter from "./components/counter";
import Heading from "./components/heading";
import Increment from "./components/increment";
import Decrement from "./components/Decrement";
import { useState } from "react";

function App() {

  const[counter,setCounter]= useState(0);

  let num = 26;
  console.log("this is the counter value", counter);
  console.log("this is the num",num);

  

  return (
    <div
      id="main"
      style={{
        border: "solid 1px green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <section>
        <Heading />
      </section>
      <section>
        <Counter setCounter={setCounter} counter ={counter} />
      </section>
      <section>
        <Increment setCounter={setCounter} counter ={counter}/>
        <Decrement setCounter={setCounter} counter ={counter} />
      </section>
    </div>
  );
}

export default App;
