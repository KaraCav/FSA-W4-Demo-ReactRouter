import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import MenuComponent from './components/MenuComponent';
import HomeComponent from './components/HomeComponent';

import './styles/App.css';

import { Routes, Route, Link } from 'react-router-dom';
import DisplayItem from './components/DisplayItem';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/contact' element={<ContactComponent />} />
          <Route path='/menu' element={<MenuComponent />} />
          <Route path='/menu/:id' element={<DisplayItem />} />
          <Route exact path='/' element={<HomeComponent />} />
        </Routes>
      </main>

      <footer>
        <p>The Coolest Site in the Universe</p>
      </footer>
    </div>
  );
}

export default App;
