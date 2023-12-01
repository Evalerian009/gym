import { useState } from 'react'
import './App.css'
import { Hero, Trainers, Membership, About, Reviews, Movements, Contact,  } from './components'

function App() {
  const [ menu, setMenu] = useState(false)

  const handler = () => (
    setMenu(prev => !prev)
  )

  return (
    <main className={`w-screen h-screen overflow-x-hidden ${menu ? 'overflow-y-hidden' : ''}`}>
      <Hero menu={menu} handler={handler} />
      <Trainers />
      <Membership />
      <About />
      <Reviews />
      <Movements />
      <Contact />
      <div className='bg-slate-600 p-5 text-center text-sm text-slate-100'>
        All Rights Reserved 2023. Coined from NicePage.com
      </div>
    </main>
  )
}

export default App
