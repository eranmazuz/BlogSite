import React from 'react'
import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <h1>My Blog</h1>
            <div id="page-body">
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/articles' element={<ArticlesListPage/>}/>
                    <Route path='/articles/:articleId' element={<ArticlePage/>}/>=
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App;
