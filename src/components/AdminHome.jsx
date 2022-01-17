import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import './style.css';
export function Adminhome() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [min_salary, setMinsalary] = useState("");
  const [max_salary, setMaxsalary] = useState("");
  const [location, setLocation] = useState("");
  const [job_type, setJobtype] = useState("");
  const [joblist, setJoblist] = useState([]);
  const {token} = useContext(AuthContext);
  const navigate = useNavigate();

  const show = () => {
    fetch("http://localhost:2500/jobs")
      .then((res) => res.json())
      .then((res) => {
        setJoblist(res);
        // console.log(res);
      })
      .catch((err) => console.log(err, "Error in fetching from db jobs"));
  };

  const handleClick = () => {
    let data = {
      title,
      company,
      min_salary,
      max_salary,
      location,
      job_type,
    };

    fetch("http://localhost:2500/jobs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // setJoblist(data);
        show();
        setTitle("");
        setCompany("");
        setMinsalary("");
        setMaxsalary("");
        setLocation("");
        setJobtype("");
        console.log("Response from Admin home page", res);
      })
      .catch((err) => console.log("Error from Admin home page", err));
  };

  useEffect(() => {
    show();
  }, []);

  //   console.log(joblist)
  if(!token){
        navigate("/");
  }
  return (
    <div id="admin-wrapper">
      <h1>Admin Home Page</h1>
      <div id="admin-input">
        <input
          type="text"
          placeholder="Enter job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Min-Salary"
          value={min_salary}
          onChange={(e) => setMinsalary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Max-Salary"
          value={max_salary}
          onChange={(e) => setMaxsalary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Job type (remote)"
          value={job_type}
          onChange={(e) => setJobtype(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </div>

      <div id="list-wrapper">
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Company</td>
              <td>Min-Salary</td>
              <td>Max-Salary</td>
              <td>Location</td>
              <td>Job-Type</td>
            </tr>
          </thead>
          <tbody>
            {joblist.map((item, i) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.company}</td>
                  <td>{item.min_salary}</td>
                  <td>{item.max_salary}</td>
                  <td>{item.location}</td>
                  <td>{item.job_type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
