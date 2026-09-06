import { useState } from "react";
import "./App.css";

function Navbar() {
  return (
    <nav>
      <h1>FREELANCER TRACKER</h1>

    </nav>
  );
}
function Dashboard() {
  const [deadlines, setDeadlines] = useState(3);
    
  return (
    <div className = "dashboard">
      <h2>Dashboard</h2>
      <p>Welcome back! Here's what's happening</p>
      
    
    <div className = "cards">
      <div className = "Deadlines card">
        <h3>Deadlines</h3>
        <p>{deadlines}</p>
      </div>

      <div className = "Active card">
        <h3>Active Projects</h3>
        <p>5</p>
      </div>
      
      <div className = "Completed card">
        <h3>Completed Milestones</h3>
        <p>12</p>
      </div>
    </div>
    <div className="dashboard-sections">
    <div className = "freelancercard">
      <h3>Freelancer</h3>
    <p className = "freelancer-name">Riteish Sharma</p>
    <p>Full-Stack Developer</p>
    <p>Project: E-commerce Website</p>
    <p>Status: Working</p>
    <p>Last activity: 2 hours ago</p>
    </div>

     <div className ="projectprogress">
      <h3>Project Progress</h3>

      <p className = "project-name">  E-commerce Website</p>

      <p>Progress: 72%</p>
      <div className="progress-bar">
        <div className = "progress-fill"></div>
      </div>
      <p>Milestone Completed: 8/10 </p>
      <p>Current Milestone: Payment Integration</p>
     </div>
    </div>
    <div className="bottom-sections">
    <div className="deadlines-section">
    <h3>Upcoming Deadlines</h3>

    <p>Payment Integration — 2 days</p>
    <p>Testing — 5 days</p>
    <p>Deployment — 9 days</p>
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
      <Dashboard />
    </>
  );
}

export default App;
