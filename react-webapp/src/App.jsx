import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
