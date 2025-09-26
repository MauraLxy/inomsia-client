import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import WriteDiary from './pages/WriteDiary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path='/write-diary' element={<WriteDiary/>} />
      </Routes>
    </Router>
  );
}

export default App;
