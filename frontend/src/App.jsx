

import 'rsuite/dist/rsuite.min.css';

import DarkMode from './components/DarkMode'; 
import Model from './components/Model';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DataFetchingComponent from './components/DataFetching';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/data' element={<DataFetchingComponent/>} />
      </Routes>
    </BrowserRouter>
      <Model/>
      <DarkMode />
    </>
  );
};

export default App;