import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Partials/Header';
import { Main } from './Components/Partials/Main';
import { Footer } from './Components/Partials/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className='siteContainer'>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
