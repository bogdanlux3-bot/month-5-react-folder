const ThirdComponent = () => {

  const showText = () => {
    console.log("Third Componenta")
  }

  return (
    <div>
      <p onClick={showText}>
        Third Componenta
      </p>
    </div>
  )
}

export default ThirdComponent