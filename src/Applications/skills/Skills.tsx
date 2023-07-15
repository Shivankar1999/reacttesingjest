import { useState, useEffect } from 'react';

export const Skills = () => {
  const [IsLogedIn, setLogedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogedIn(true);
    }, 1001);
  }, []);

  return (
    <div>
      {IsLogedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setLogedIn(true)}>LogIn</button>
      )}
    </div>
  );
};
