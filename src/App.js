import {useState} from 'react'

const App = () => {
  const [userChoice,setUserChoice] = useState(null)
  const choices = [' rock',' paper',' scissors']
  const handleClick = (value) => {
    setUserChoice(value)
  }

  return (
    <div className="App">
      <h1>user choice is:{userChoice}</h1>
      <h1>user choice is:</h1>
      {choices.map((choice, index) => 
        <button key= {index}onClick={() => handleClick(choice)}>{choice}</button>
        )}
    </div>
  );
}

export default App;
