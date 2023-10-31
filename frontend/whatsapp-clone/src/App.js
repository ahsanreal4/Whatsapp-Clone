import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Welcome from './components/welcome/Welcome.jsx';
function App() {
  return (
     <BrowserRouter>
     
     <Routes>

        <Route path='/' element={<Welcome/>}/>
     </Routes>
     
     
     </BrowserRouter>
  );
}

export default App;
