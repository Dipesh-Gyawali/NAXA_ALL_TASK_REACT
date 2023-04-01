import './App.css';
import { Routes, Route} from "react-router-dom";
import { Home } from "./components/Home";
import { API } from './components/API';
import { Service } from './components/Service';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (

    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="api" element={<API />} />
          <Route path="service" element={<Service />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;