import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import ProductInfo from './views/ProductInfo';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}