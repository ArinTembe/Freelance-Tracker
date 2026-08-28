# 💼 FreelanceTracker

A Python-based freelance project tracking application designed to help manage projects, milestones, deadlines, completion status, and progress.

FreelanceTracker is currently a **command-line application built using Python and Object-Oriented Programming (OOP)**. The project is being developed incrementally, with the goal of gradually turning it into a more practical freelance project-management system.

---

## 🌟 Highlights

* 📋 Create freelance projects
* 👤 Store client and freelancer information
* 🎯 Add project milestones
* 💰 Assign an amount to each milestone
* ✅ Mark milestones as completed
* 📊 Automatically calculate project progress
* ⏳ Track project deadlines
* 🔄 Automatically update project status
* 💾 Save project information using JSON
* 🧱 Built using Python Object-Oriented Programming
* 🚀 Designed to be expanded into a larger application

---

## ℹ️ Overview

Freelance projects often involve multiple milestones, deadlines, and payments. Keeping track of these details manually can become difficult as a project grows.

**FreelanceTracker** provides a simple way to organize the core information of a freelance project.

The current version allows users to:

1. Create a project
2. Add milestones
3. Assign amounts to milestones
4. Mark milestones as completed
5. View project progress and status
6. Store project information in a JSON file

The project started as a Python OOP exercise and is gradually being developed into a more practical project-management application.

### 🎯 Project Goal

The long-term goal is to build a simple system that could be used as a foundation for managing freelance projects between clients and freelancers.

The development approach is incremental:

```text
Python OOP
    ↓
JSON Persistence
    ↓
SQLite Database
    ↓
FastAPI Backend
    ↓
Web Dashboard
```

---

## 🧠 How It Works

The application currently uses two main classes.

### 👤 `User`

The `User` class represents a person involved in the project.

It stores:

* Name
* Email
* Role

Example roles:

```text
Freelancer
Client
```

### 📁 `Project`

The `Project` class represents a freelance project.

It stores:

* Project name
* Client name
* Freelancer name
* Deadline
* Project status
* Milestones

A newly created project starts with:

```text
Status: Not Started
```

When a milestone is completed:

```text
Status: In Progress
```

When all milestones are completed:

```text
Status: Completed
```

---

## 🎯 Milestone Tracking

Each milestone contains:

```text
Name
Amount
Completion Status
```

For example:

```text
Milestone: Website Design
Amount: 5000
Completed: False
```

After completing the milestone:

```text
Milestone: Website Design
Amount: 5000
Completed: True
```

The application uses completed milestones to calculate the overall project progress.

```text
Progress = (Completed Milestones / Total Milestones) × 100
```

For example:

```text
Total milestones:     4
Completed milestones: 2

Progress: 50%
```

---

## 📊 Project Status

Project status is automatically updated according to milestone completion.

```text
No completed milestones
        ↓
   Not Started
        ↓
Some milestones completed
        ↓
    In Progress
        ↓
All milestones completed
        ↓
     Completed
```

If a project has no milestones, the application displays:

```text
Progress: 0%
```

---

## 💾 Data Persistence

The current version uses Python's built-in `json` module for basic data persistence.

Project information can be converted into a dictionary and stored in:

```text
project_data.json
```

Example:

```json
{
    "project_name": "Website Development",
    "client_name": "Rahul",
    "freelancer_name": "John",
    "Deadline": "30-09-2026",
    "Status": "In Progress",
    "milestones": [
        {
            "name": "UI Design",
            "amount": 5000,
            "completed": true
        }
    ]
}
```

This provides a simple way to store project information outside the running Python program.

---

## 🚀 Usage

Run the application using:

```bash
python main.py
```

The application provides a menu:

```text
Welcome to FreelanceTracker

1. Create Project
2. Add Milestone
3. Complete Milestone
4. Show Status
5. Exit
```

### Example Workflow

```text
1 → Create a project
2 → Add milestones
3 → Complete milestones
4 → View project status and progress
5 → Exit
```

---

## ⬇️ Installation

### Requirements

* Python 3.8+
* No external Python libraries are currently required

The project uses Python's built-in `json` module.

### Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/FreelanceTracker.git
```

### Navigate to the project

```bash
cd FreelanceTracker
```

### Run the application

```bash
python main.py
```

---

## 🛠️ Technologies Used

* **Python**
* **Object-Oriented Programming (OOP)**
* **JSON**
* Classes and Objects
* Constructors
* Methods
* Lists
* Dictionaries
* Loops
* Conditional Statements
* File Handling
* Command-Line Interface

---

## 📁 Project Structure

```text
FreelanceTracker/
│
├── main.py
├── project_data.json
└── README.md
```

The project currently uses a simple structure. As functionality grows, the code will be separated into appropriate modules.

---

## 🔮 Future Improvements

The project will be developed in a few practical stages rather than adding a large number of features at once.

### 🚧 Next Step — Database

The next version will focus on replacing basic JSON storage with **SQLite**.

Planned improvements:

* 🗄️ Store projects in a database
* 📁 Support multiple projects
* 🔄 Automatically load saved projects
* 🔍 Search existing projects
* ⚠️ Improve input validation

### 🚀 Next Step — Backend

After introducing database storage, the project will be developed into a backend application using **FastAPI**.

Planned improvements:

* 🌐 Create REST APIs
* 📋 Manage projects through API endpoints
* 🎯 Manage milestones through APIs
* 👤 Improve client and freelancer management

### 🎯 Long-Term Goal

Build a simple web dashboard that allows clients and freelancers to manage their projects, milestones, deadlines, and progress through a user interface.

---

## 📌 Current Limitations

The current version is an early-stage command-line application.

* One project is actively handled during a session
* JSON is used for persistence
* Saved data is not automatically loaded at startup
* There is no database
* There is no authentication
* There is no web interface
* Payment processing is not implemented

These limitations provide the basis for the next stages of development.

---

## 🎓 What I Learned

Building FreelanceTracker has helped me practice and understand:

* Object-Oriented Programming
* Classes and objects
* Constructors
* Methods
* Lists and dictionaries
* Loops and conditional logic
* File handling
* JSON data storage
* Managing application state
* Designing a project for future expansion

The next stages will allow me to apply these concepts to databases, backend development, and APIs.

---

## 📈 Development Progress

### Version 1 — Basic Project Tracker

* Created `User` and `Project` classes
* Added project creation
* Added milestone management
* Added milestone completion
* Added project status tracking
* Added progress calculation

### Version 2 — JSON Persistence

* Added JSON support
* Added project serialization
* Added project saving
* Added handling for projects without milestones

### 🚧 Version 3 — Planned

* SQLite database
* Multiple projects
* Automatic data loading
* Improved validation and project management

### 🚀 Version 4 — Planned

* FastAPI backend
* REST API
* Structured project and milestone endpoints

---

## 🤝 Feedback

FreelanceTracker is an ongoing project and will continue to evolve as I learn and implement new technologies.

Suggestions and constructive feedback are welcome.

---

## 👨‍💻 Author

**Arin Tembe**

FreelanceTracker is a personal project created to strengthen my Python, Object-Oriented Programming, and software development skills.

I am developing the project incrementally, starting with Python fundamentals and gradually moving toward database management, backend development, and API design.

---

⭐ **If you find the project interesting, consider starring the repository and following its development.**
