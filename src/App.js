import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Analytics from './pages/Analytics';


function App() {
  return (
      <ChakraProvider>
        <Router>
          <Routes>

              <Route path='/' exact 
              element={<Home />} 
              />

              <Route path='/analytics' 
              element={<Analytics />} 
              />

          </Routes>
        </Router>
      </ChakraProvider>
  );
}

export default App;
