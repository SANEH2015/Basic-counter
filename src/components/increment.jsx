

function Increment(props) {
  //This increase the value:
  const increment = () => {
    // alert("it has  incremented");
    props.setCounter(props.counter +1)
  };

  return (
    <button
      style={{
        background: "green",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "7px",
      }}
      onClick={increment}
    >
      Increment
    </button>
  );
}
export default Increment;
