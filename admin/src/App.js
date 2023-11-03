import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, UserList, User, NewUser, ProductList, Product, NewProduct, Login } from './pages/index'
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";


function App() {

  const user = useContext(AuthContext)

  console.log(user)

  return (
    <BrowserRouter> 

        <Routes>
          <Route exact path="/login" element={user ? <Login /> :  <Home/>}/>
 
          <Route exact path="/" element={user ? <Home /> : <Login/>}/>

          <Route path="/users" element={user ? <UserList />: <Login/>}/>
                     
          <Route path="/user/:userId" element={user ? <User />: <Login/>}/>
                
          <Route path="/newUser" element={user ?<NewUser />: <Login/>}/>
                  
          <Route path="/movies" element={user ?<ProductList />: <Login/>}/>
                    
          <Route path="/product/:productId" element={user ?<Product />: <Login/>}/>
                    
          <Route path="/newproduct" element={user ?<NewProduct />: <Login/>}/>
                 

       </Routes>

    </BrowserRouter>
  );
}

export default App;
