import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import Dashboard from './layouts/Dashboard';
import Header from '../src/layouts/Header';
import Footer from '../src/layouts/Footer';

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
