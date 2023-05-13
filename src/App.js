import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import  Home  from './Home';
import  User  from './User'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<User />} />
    </Routes>
  </Router>
  );
}

export default App;
