import "./App.scss";

// components
import Sidebar from "./components/Sidebar";

// authentication pages
import ProtectedRoutes from "./components/ProtectedRoutes";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; 

// content pages
import Home from './pages/Home';
import Products from './pages/Products';
import Team from './pages/Team';
import Clients from './pages/Clients';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import menuicon from './images/menu-icon-black.png';


function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [sidebar, setSideBar] = useState(false);
  const [isAdminPage, setIsAdminPage] = useState(true);
  const [canLogin, setCanLogin] = useState(false);

  return (
    <div className="app_main">
      <Router>
        <div className="app_header_mobile">
          { !isAdminPage && <img onClick={() => setSideBar(true)} className="app_header_menu" src={menuicon} alt={'menu-icon'} />}    
        </div>
        
        { !isAdminPage && <Sidebar pageNumber={pageNumber} sidebar={sidebar} setSideBar={setSideBar}  setIsAdminPage={setIsAdminPage} />}

        <main className="app_content" onClick={() => {if(sidebar){setSideBar(false)}}}>
          <Routes>
            <Route path="/signup" 
            element={<Signup setCanLogin={setCanLogin} setIsAdminPage={setIsAdminPage} />}>
            </Route>

            <Route path="/login" 
            element={<Login setCanLogin={setCanLogin} setIsAdminPage={setIsAdminPage} />}>
            </Route>

            <Route element={<ProtectedRoutes canLogin={canLogin} outletRoute={'/'} />}>
              <Route path="/" element={<Home setPageNumber={setPageNumber} />}></Route>
            </Route>
            
            <Route element={<ProtectedRoutes canLogin={canLogin} outletRoute={'/products'} />}>
              <Route path="/products" element={<Products setPageNumber={setPageNumber} />}></Route>
            </Route>

            <Route element={<ProtectedRoutes canLogin={canLogin} outletRoute={'/teams'} />}>
              <Route path="/teams" element={<Team setPageNumber={setPageNumber} />}></Route>
            </Route>

            <Route element={<ProtectedRoutes canLogin={canLogin} outletRoute={'/clients'} />}>
              <Route path="/clients" element={<Clients setPageNumber={setPageNumber} />}></Route>
            </Route>
          </Routes>  
        </main>
      </Router>
    </div>
  );
}

export default App;
