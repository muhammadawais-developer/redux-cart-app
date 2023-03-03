import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App