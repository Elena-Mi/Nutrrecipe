import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [advice, setAdvice] = useState("")

  useEffect( () => {
    const getAdvice = async () => {
      const response = await fetch(` https://api.quotable.io/random `);
      const data = await response.json();
      setAdvice(data.content)
      

    }
    getAdvice()
  },[])
  
  



 
	return (
		<div>
       <p>{advice}</p>
       <button onClick={() => setAdvice}>Show next</button>
		</div>
	)
}

export default App
