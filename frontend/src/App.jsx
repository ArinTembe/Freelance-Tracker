import { useState, useEffect } from "react";
import "./App.css";

function Navbar() {
  return (
    <nav>
      <h1>FREELANCER TRACKER</h1>

    </nav>
  );
}
function ProjectForm() {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");

  const addProject = () => {
    fetch("http://127.0.0.1:8000/api/projects/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        deadline: deadline,
        client: 2,
        freelancer: 1
      })
    })
      .then(response => response.json())
      .then(data => {
    console.log("Project created:", data);
    window.location.reload();

      })
      .catch(error => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="milestone-form-section">

      <h3>Add New Project</h3>

      <div className="milestone-form">

        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button onClick={addProject}>
          Add Project
        </button>

      </div>

    </div>
  );
}
function MilestoneForm() {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const addMilestone = () => {

  fetch("http://127.0.0.1:8000/api/milestones/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      project: 1,
      name: name,
      amount: amount,
      deadline: deadline,
      completed: false,
      paid: false
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log("Milestone created:", data);
    })
    .catch(error => {
      console.log("Error:", error);
    });

};
  return (
    <div className="milestone-form-section">

      <h3>Add New Milestone</h3>

      <div className="milestone-form">

        <input
          type="text"
          placeholder="Milestone Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button onClick={addMilestone}>
          Add Milestone
        </button>

      </div>

    </div>
  );
}
function Dashboard() {
  const [deadlines, setDeadlines] = useState([]);
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");
  const [milestones, setMilestones] = useState([]);
  const [editingMilestone, setEditingMilestone] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editDeadline, setEditDeadline] = useState("");
  const [editingProject, setEditingProject] = useState(null);
  const [editProjectName, setEditProjectName] = useState("");
  const [editProjectDeadline, setEditProjectDeadline] = useState("");

  useEffect(() => {
    setMessage("Trying to connect to Django...");

    fetch("http://127.0.0.1:8000/api/projects/")
      .then(response => {
        setMessage("Django responded!");
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setMessage("Data received from Django!");
      })
      .catch(error => {
        setMessage("Connection failed!");
      });
    fetch("http://127.0.0.1:8000/api/milestones/")
      .then(response => response.json())
      .then(data => {
      setMilestones(data);
      });
  }, []);
  const updateMilestone = () => {
  fetch(`http://127.0.0.1:8000/api/milestones/${editingMilestone}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: editName,
      amount: editAmount,
      deadline: editDeadline
    })
  })
    .then(response => response.json())
    .then(updatedMilestone => {
      setMilestones(
        milestones.map(milestone =>
          milestone.id === editingMilestone
            ? updatedMilestone
            : milestone
        )
      );

      setEditingMilestone(null);
    })
    .catch(error => {
      console.log("Error updating milestone:", error);
    });
};
const updateProject = () => {
  fetch(`http://127.0.0.1:8000/api/projects/${editingProject}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: editProjectName,
      deadline: editProjectDeadline
    })
  })
    .then(response => response.json())
    .then(updatedProject => {
      setProjects(
        projects.map(project =>
          project.id === editingProject
            ? updatedProject
            : project
        )
      );

      setEditingProject(null);
    })
    .catch(error => {
      console.log("Error updating project:", error);
    });
};

  useEffect(() => {
     const projectDeadlines = projects.map(project => ({
      type: 'project',
       id: `project-${project.id}`,
    name: project.name,
    deadline: project.deadline
  }));

  const milestoneDeadlines = milestones.map(milestone => ({
    id: `milestone-${milestone.id}`,
    type: 'milestone',
    name: milestone.name,
    deadline: milestone.deadline
  }));
    const allDeadlines = [...projectDeadlines, ...milestoneDeadlines];
    allDeadlines.sort((a, b) =>
  new Date(a.deadline) - new Date(b.deadline)
);
    setDeadlines(allDeadlines);

}, [projects, milestones]);




  return (
    <div className="dashboard">

    <h2>Dashboard</h2>
    <p>Welcome back! Here's what's happening</p>
    <p>{projects.length} projects received from Django</p>
    <p>{milestones.length} milestones received from Django</p>

    

      <div className="cards">
        <div className="Deadlines card">
          <h3>Deadlines</h3>
          <p>{deadlines.length}</p>
        </div>

        <div className="Active card">
          <h3>Active Projects</h3>
          <p>{projects.length}</p>
        </div>

        <div className="Completed card">
          <h3>Completed Milestones</h3>
          <p>{milestones.filter(milestone => milestone.completed).length}</p>
        </div>
      </div>
      
      <div className="dashboard-sections">
        <div className="freelancercard">
          <h3>Freelancer</h3>
          <p className="freelancer-name">
            {projects.length > 0 ? projects[0].freelancer_name : "No freelancer"}</p>
          <p>Full-Stack Developer</p>
          <p>Project: {projects.length > 0 ? projects[0].name : "No project"}</p>
          <p> Status: {projects.length > 0 ? projects[0].status : "No status"}</p>
          <p>Last activity: 2 hours ago</p>
        </div>

        <div className="projectprogress">
          <h3>Project Progress</h3>

         {projects.length > 0 && (
        <p className="project-name">
        {projects[0].name}
        </p>
        )}

          <p> Progress: {
          milestones.length > 0
          ? (milestones.filter(milestone => milestone.completed).length / milestones.length) * 100
          : 0
          }%</p>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p>  Milestone Completed:{" "}
          {milestones.filter(milestone => milestone.completed).length}
          /{milestones.length}</p>
          <p>Current Milestone:{" "}
        {milestones.filter(milestone => !milestone.completed)[0]?.name}</p>
        </div>
        <div className="payment-summary">
      <h3>Payment Summary</h3>

      <p>
        Total Project Value: ₹
        { projects.length > 0 ? projects[0].total_amount : 0}
      </p>
       <p>
        Paid: ₹
        {projects.length > 0 ? projects[0].paid_amount : 0}
      </p>
      
      
      <p>
      Remaining: ₹
      {projects.length > 0 ? projects[0].remaining_amount : 0}
    </p>
      

</div>
      </div>
      <div className="projects-section">
  <h3>Projects</h3>

  {projects.map(project => (
    <div key={project.id} className="project-item">

      {editingProject === project.id ? (

        <div className="edit-project-form">

          <input
            type="text"
            value={editProjectName}
            onChange={(e) => setEditProjectName(e.target.value)}
          />

          <input
            type="date"
            value={editProjectDeadline}
            onChange={(e) => setEditProjectDeadline(e.target.value)}
          />

          <button
            onClick={updateProject}
          >
            Save
          </button>

          <button
            onClick={() => setEditingProject(null)}
          >
            Cancel
          </button>

        </div>

      ) : (

        <>
          <div className="project-info">
            <h4>{project.name}</h4>
            <p>Deadline: {project.deadline}</p>
            <p>Status: {project.status}</p>
          </div>

          <div className="project-actions">

            <button
              onClick={() => {
                setEditingProject(project.id);
                setEditProjectName(project.name);
                setEditProjectDeadline(project.deadline);
              }}
            >
              Edit
            </button>

            <button
  className="delete-btn"
  onClick={() => {
    fetch(`http://127.0.0.1:8000/api/projects/${project.id}/`, {
      method: "DELETE"
    })
      .then(() => {
        setProjects(
          projects.filter(item => item.id !== project.id)
        );
      })
      .catch(error => {
        console.log("Error deleting project:", error);
      });
  }}
>
  Delete
</button>

          </div>
        </>

      )}

    </div>
  ))}
</div>
      <div className="milestones-section">
  <h3>Milestones</h3>

  {milestones.map(milestone => (
  <div key={milestone.id} className="milestone-item">

    {editingMilestone === milestone.id ? (

      <div className="edit-milestone-form">

        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />

        <input
          type="number"
          value={editAmount}
          onChange={(e) => setEditAmount(e.target.value)}
        />

        <input
          type="date"
          value={editDeadline}
          onChange={(e) => setEditDeadline(e.target.value)}
        />

        <button
          className="save-btn"
          onClick={updateMilestone}
        >
          Save
        </button>

        <button
          className="cancel-btn"
          onClick={() => setEditingMilestone(null)}
        >
          Cancel
        </button>

      </div>

    ) : (

      <>
        <div className="milestone-info">
          <h4>{milestone.name}</h4>
          <p>₹{milestone.amount}</p>
          <p>Deadline: {milestone.deadline}</p>
          <p>
            Status: {milestone.completed ? "Completed" : "Pending"}
          </p>
        </div>

        <div className="milestone-actions">

          <button
            className="edit-btn"
            onClick={() => {
              setEditingMilestone(milestone.id);
              setEditName(milestone.name);
              setEditAmount(milestone.amount);
              setEditDeadline(milestone.deadline);
            }}
          >
            Edit
          </button>

          <button
  className="delete-btn"
  onClick={() => {
    fetch(`http://127.0.0.1:8000/api/milestones/${milestone.id}/`, {
      method: "DELETE"
    })
      .then(() => {
        setMilestones(
          milestones.filter(item => item.id !== milestone.id)
        );
      })
      .catch(error => {
        console.log("Error deleting milestone:", error);
      });
  }}
>
  Delete
</button>

        </div>
      </>

    )}

  </div>
))}
</div>
      <div className="bottom-sections">
        <div className="deadlines-section">
          <h3>Upcoming Deadlines</h3>
          {deadlines.map(deadline => (

      <p  key={deadline.id}>
        {deadline.type} - {deadline.name} — {deadline.deadline}
      </p>
        ))
      }
          
        </div>
        <div className="recent-activity">
          <h3>Recent Activity</h3>

          <p>Payment API updated — 2 hours ago</p>
          <p>Checkout page completed — Yesterday</p>
          <p>Data optimized — 2 days</p>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Navbar />
      <ProjectForm />
      <MilestoneForm />
      <Dashboard />
    </>
  );
}

export default App;
