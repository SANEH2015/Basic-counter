function Decrement(props) {
  //This increase the value:
  const decrement = () => {
    // alert("it has  decremented");
    props.setCounter(props.counter -1)
  };

  return (
    <button
      style={{
        background: "red",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
      onClick={decrement}
    >
      Decrement
    </button>
  );
}
export default Decrement;
