import React from 'react';
import Layout from '../components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../pages/Home";
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

import { AppContext } from "../context/AppContext";
import useInitialState from '../hooks/useInitialState';

const App: React.FC = () => {
  const initialState = useInitialState();
  return (
  <AppContext.Provider value={initialState}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Layout>
    </Router>
  </AppContext.Provider>
  );
};

export default App;
