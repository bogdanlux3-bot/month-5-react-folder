const SecondComponent = () => {

  const sayHi = () => {
    console.log("Second Componenta")
  }

  return (
    <div>
      <h1 onClick={sayHi}>
        Second Componenta
      </h1>
    </div>
  )
}

export default SecondComponent