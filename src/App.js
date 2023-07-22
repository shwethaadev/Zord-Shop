import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Impt from './components/example/Impt';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} exact element={<Main />} />
        <Route path={`/impt`} exact element={<Impt />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
