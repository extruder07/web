import { useEffect, useState } from 'react';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const fetched = [];
      // In real scenario, maintain a list of available problem IDs
      for (let i = 1; i <= 5; i++) {
        const res = await fetch(`/data/problems/problem${i}.json`);
        const data = await res.json();
        fetched.push(data);
      }
      setProblems(fetched);
    };
    fetchProblems();
  }, []);

  return (
    <div className="problem-list">
      <h2>Problems</h2>
      {problems.map(problem => (
        <div key={problem.id} className="problem-card">
          <h3>{problem.title}</h3>
          <p>Difficulty: {problem.difficulty}</p>
        </div>
      ))}
    </div>
  );
};

export default ProblemList;