const FirstComponent = () => {

  const hello = () => {
    console.log("First Componenta")
  }

  return (
    <div>
      <button onClick={hello}>
        First Button
      </button>
    </div>
  )
}

export default FirstComponent