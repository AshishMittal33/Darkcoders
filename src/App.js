import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Cards from './components/cards';
import { Routes, Route } from 'react-router-dom';
import ReadMe from './routes/blog';
import Book from './routes/book';
import Blogs from './routes/Blogna';

function App() {
  return (
    <div className="App1">
      <Navbar /><br /><br />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/readme" element={<ReadMe />}/>
        <Route path="/Book" element={<Book />} />
        <Route path="/Blog" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
