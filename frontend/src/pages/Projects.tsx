import { useState, useEffect } from "react";
import API from "../services/api";
import { type Project } from "../types";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState<string>("");

  const userId = localStorage.getItem("userId");

  const fetchProjects = async () => {
    try {
      const res = await API.get<Project[]>(`/projects/${userId}`);
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const createProject = async () => {
    try {
      await API.post("/projects", {
        name,
        userId: Number(userId),
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>

      <input
        placeholder="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={createProject}>Create</button>

      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;