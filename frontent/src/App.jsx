import { Provider } from 'react-redux'
import store from './store/store'
import HomePage from './Pages/HomePage'
import CartsPage from './Pages/CartsPage'
import SingleProductPage from './Pages/SingleProductPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/singleProduct' element={<SingleProductPage />} />
            <Route path='/carts' element={<CartsPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
