import json 

class User:
    def __init__(self, name, email, role):
        self.name = name
        self.email = email
        self.role = role

user1 = User("John", "johndoe@gmail.com", "Freelancer")
user2 = User("Rahul", "rahul@gmail.com", "Client")

class Project:
    def __init__(self, project_name, client_name, freelancer_name, Deadline):
        self.project_name = project_name
        self.client_name = client_name
        self.freelancer_name = freelancer_name
        self.Deadline = Deadline
        self.Status = "Not Started"
        self.milestones = []

    def add_milestones(self, name, amount):
        self.milestones.append({"name": name, "amount": amount, "completed": False})

    def complete_milestone(self, name):
        for m in self.milestones:
            if m["name"] == name:
                m["completed"] = True
                self.Status = "In Progress"
                break
        count = 0
        for m in self.milestones:
            if m["completed"] == True:
                count += 1
    
        if count == len(self.milestones):
            self.Status = "Completed"

    def show_status(self):
        count = 0
        for m in self.milestones:
            if m["completed"] == True:
                count += 1

        percentage = (count / len(self.milestones)) * 100
        print("Project:", self.project_name)
        print("Freelancer:", self.freelancer_name)
        print("Deadline:", self.Deadline)
        print("Status:", self.Status)
        print("Progress:", str(round(percentage, 2)) + "%")

def save_project(project):
    data = {
        "project_name": project.project_name,
        "client_name": project.client_name,
        "freelancer_name": project.freelancer_name,
        "Deadline": project.Deadline,
        "Status": project.Status,
        "milestones": project.milestones
    }
    with open("project_data.json", "w") as f:
        json.dump(data, f)
    print("Project saved successfully!")
            

while True:
    print("\nWelcome to FreelanceTracker")
    print("1. Create Project")
    print("2. Add Milestone")
    print("3. Complete Milestone")
    print("4. Show Status")
    print("5. Exit")
    
    choice = input("Choose an option: ")
    
    if choice == "1":
        name = input("Enter project name: ")
        client = input("Enter client name: ")
        freelancer = input("Enter freelancer name: ")
        deadline = input("Enter deadline: ")
        project = Project(name, client, freelancer, deadline)
        print("Project created successfully!")

    elif choice == "2":
        milestone_name = input("Enter milestone name: ")
        amount = int(input("Enter amount: "))
        project.add_milestones(milestone_name, amount)
        print("Milestone added!")

    elif choice == "3":
        milestone_name = input("Enter milestone name: ")
        project.complete_milestone(milestone_name)
        print("Milestone completed!")

    elif choice == "4":
        project.show_status()

    elif choice == "5":
        print("Goodbye!")
        break
    else:
        print("Invalid option. Please try again.")
    