
// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
