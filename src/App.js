import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Contact from './pages/Contact';

const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path="/menu" exact component={Menu}/> 
          <Route path="/contact" exact component={Contact}/>
          <Route path="/about" exact component={About}/>
          <Route  component={NotFound}/>       
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;