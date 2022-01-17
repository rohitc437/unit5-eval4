import { useState, useEffect } from "react";

export function Home() {
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);

  const getTodo = () => {
    fetch(`http://localhost:2500/jobs?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        // console.log(res);
        setTodo(res);
      });
  };
  useEffect(() => {
    getTodo();
  }, [page]);
  return (
    <div id="home-wrapper" >
      <h1 >My    Job-Portal</h1>

      {todo.map((e) => (
        <div key={e.id} id = 'mydesign'>
          <h2>{e.title}</h2>
          <h4>{e.company}</h4>
          <h4>{e.min_salary}</h4>
          <h4>{e.max_salary}</h4>
          <h4>{e.location}</h4>
          <h4>{e.job_type}</h4>
        </div>
      ))}
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
