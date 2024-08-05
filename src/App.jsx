import './App.css'
import '@fontsource-variable/onest'
import { useEffect, useState } from 'react'
import getAll from './services/dragons'
import Card from './components/Card'
import Header from './components/Header'
import Description from './components/Description'
import Documentation from './components/Documentation'

function App() {

  const [dragons, setDragons] = useState([])
  const [visibleDragons, setVisibleDragons] = useState(4)

  useEffect(() => {
    getAll()
      .then(data => setDragons(data))
  }, [])

  const showMoreDragons = () => {
    setVisibleDragons(dragons.length)
  }

  return (
    <>
      <Header />

      <Description />

      <div className='container' >
        {dragons.slice(0, visibleDragons).map(dragon => (
          <Card key={dragon.id} {...dragon} />
        ))}
      </div>

      <Documentation />
    </>
  )
}

export default App
