import React from 'react';
import Nav from './pages/navigation/Nav';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/homepage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/footer/Footer'
import Package from './pages/package/Package';
import Tariff from './pages/tariff/Tariff';
import Joinus from './pages/join-us/Joinus';
import Payment from './pages/payment/Payment';
import Contact from './pages/contact/Contact';
import Admin from './pages/admin/Admin';
import AdminTable from './pages/admin/AdminTable';
import MaintaincePage from './pages/maintaince/maintaince';

function App() {
  const maintaince = true;
  return (
    <>
     <Router>
     { !maintaince ? <Nav/> : '' }
     <Routes>
      <Route path='/' element={ maintaince ? <MaintaincePage/> : <Home/>}/>
      { !maintaince ? <>
            <Route path='/package' element={<Package/>}/>
            <Route path='/tariff' element={<Tariff/>}/>
            <Route path='/joinus' element={<Joinus/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/adminTable' element={<AdminTable/>}/> </>: ''
      }
     </Routes>
     { !maintaince ? <Footer/> : '' }
     </Router>
    </>
  )
}

export default App;
