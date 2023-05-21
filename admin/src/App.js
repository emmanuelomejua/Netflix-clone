import {Topbar, Sidebar} from "./components/index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, UserList, User, NewUser, ProductList, Product, NewProduct, Login } from './pages/index'


function App() {
  return (
    <BrowserRouter> 
      <Topbar />
       <div className="container">
         <Sidebar />
         <Routes>

         <Route exact path="/login" element={ <Login />}/>
       
          <Route exact path="/" element={ <Home />}/>
           
          <Route path="/users" element={ <UserList />}/>
          
          <Route path="/user/:userId" element={ <User />}/>
     
          <Route path="/newUser" element={<NewUser />}/>
       
          <Route path="/products" element={<ProductList />}/>
         
          <Route path="/product/:productId" element={<Product />}/>
         
          <Route path="/newproduct" element={<NewProduct />}/>
      
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
