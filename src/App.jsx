import React from 'react'
import Navigation from './components/nav/Nav'
import HomePage from './pages/Home'


const App = () => {
  return (
    <div className='px-2'>
      <Navigation />
      <HomePage />
    </div>
  )
}

export default App