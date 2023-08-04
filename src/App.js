import { useState, useMemo, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import SearchResult from './components/SearchResult';
import HouseFilter from './components/HouseFilter';


function App() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const fetchHouses = async () => {
      const res = await fetch("/houses.json")
      const houses = await res.json()
      setHouses(houses)
    }
    fetchHouses()
  }, [])

  const featuredHouse = useMemo(() => {
    if (houses.length){
      const randIndex = Math.floor(Math.random() * houses.length)
      return houses[randIndex]
    }
  }, [houses])

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <HouseFilter houses={houses} />
          
            <Routes>
              <Route path='/' element={<Home house={featuredHouse} />} />
              <Route path='/about' element={<About />} />
              <Route path='/searchresults/:city' element={<SearchResult houses={houses} />} />
            </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
