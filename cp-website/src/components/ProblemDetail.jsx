import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProblemDetail = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      const res = await fetch(`/data/problems/problem${id}.json`);
      const data = await res.json();
      setProblem(data);
    };
    fetchProblem();
  }, [id]);

  if (!problem) return <div>Loading...</div>;

  return (
    <div className="problem-detail">
      <h1>{problem.title}</h1>
      <p>Difficulty: {problem.difficulty}</p>
      <div className="description">
        {problem.description}
      </div>
      {/* Add code editor component here */}
    </div>
  );
};

export default ProblemDetail;