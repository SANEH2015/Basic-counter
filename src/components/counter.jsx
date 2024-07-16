function Counter(props){

    const counter = () =>{
props.setCounter(props.counter+1)
    }

  
return(
    <h1>{props.counter}</h1>
)
}
export default Counter;