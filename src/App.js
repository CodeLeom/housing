import { useEffect, useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const fetchHouses = async() => {
      const res = await fetch('/houses.json')
      const houseData = await res.json()
      setHouses(houseData);
    }

    fetchHouses();
  }, [])

  useMemo(() => {
    if (houses.length){
      const randIndex = Math.floor(Math.random() * houses.length)
      return houses[randIndex]
    }
  }, [houses])

  return (
    <>
      <div className='container'>
        <Header />
          <h1 className="ml-10 text-3xl font-bold underline">
           Hello world!
          </h1>
      </div>
    </>
  )
}

export default App;
