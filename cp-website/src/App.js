import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProblemList from './components/ProblemList';
import ProblemDetail from './components/ProblemDetail';
import SubmissionList from './components/SubmissionList';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/problems">Problems</Link>
        <Link to="/submissions">Submissions</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<ProblemList />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
        <Route path="/submissions" element={<SubmissionList />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

const Home = () => <h1>Welcome to CP Platform!</h1>;

export default App;