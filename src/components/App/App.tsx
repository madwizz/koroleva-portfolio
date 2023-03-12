import * as React from 'react'
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
