
import './index.css' 
import HomeView from './components/home/HomeView'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './components/signIn/SignIn'
import GetStarted from './components/getStarted/GetStarted';



function App() {
  
  

  return (


    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<GetStarted/>} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
