import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import News from './Component/News'
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <LoadingBar
          color="gold"
          progress={this.state.progress}
        />
        <Header />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key={"general"} category={"general"} />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} key={"technology"} category={"technology"} />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} key={"sports"} category={"sports"} />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} key={"science"} category={"science"} />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} key={"health"} category={"health"} />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key={"entertainment"} category={"entertainment"} />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} key={"business"} category={"business"} />} />
        </Routes>
      </>
    )
  }
}

export default App
