import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import ShowReport from './pages/ShowReport';
const App = () => {
  return (
    <Router>
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/tireReports/details/:id" element={<ShowReport />} />
        </Routes>
    </Router>
  )
}

export default App;