import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import News from './Component/News'
export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path='/' element={<News key={"general"} category={"general"} />} />
          <Route exact path='/technology' element={<News key={"technology"} category={"technology"} />} />
          <Route exact path='/sports' element={<News key={"sports"} category={"sports"} />} />
          <Route exact path='/science' element={<News key={"science"} category={"science"} />} />
          <Route exact path='/health' element={<News key={"health"} category={"health"} />} />
          <Route exact path='/entertainment' element={<News key={"entertainment"} category={"entertainment"} />} />
          <Route exact path='/business' element={<News key={"business"} category={"business"} />} />
        </Routes>
      </>
    )
  }
}

export default App
