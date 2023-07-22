import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './Pages/HomePage';
import CartsPage from './Pages/CartsPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient , QueryClientProvider } from 'react-query';
import SearchResultsPage from './Pages/SearchResultsPage';
import { memo } from 'react';
function App() {
const queryClient=new QueryClient()
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/productDetail/:id' element={<ProductDetailPage />} />
            <Route path='/carts' element={<CartsPage />} />
            <Route path='/searchProducts/' element={<SearchResultsPage/>} />
          </Routes>
      </QueryClientProvider>
      </Provider>
      </BrowserRouter>

  )
}

export default memo(App);
