import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={< AppLayout />} >
          <Route index element={<p>Список городов</p>} />
          <Route path="cities" element={<p>Список городов</p>} />
          <Route path="countries" element={<p>Список стран</p>} />
          <Route path="form" element={<p>Форма</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

//213