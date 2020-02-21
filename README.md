## Employee Directory Application
The envisioned directory application allows employees of a company to explore the company structure. A user of the application is able to see the names and team members of every supervisor.

## User Stories
| Story  | Acceptance Criteria  |
|---|---|
| As a user, I am able to search for employees  | - User is able to input the employee name in the input field - User is able to click search button  | 
| As a user, I want to know for a given employee who works directly for that given employee (direct reports) and who indirectly works for that given employee (all subordinates of structured tree)  | - The overview page should include information about direct and non-direct subordinates (all non-direct subordinates) - The overview shouldn’t include duplicate employee names| 
| As a user, I am able to share or bookmark a link to the overview page of a given employee | Overview of given employee should be accessible through a direct URL. (http://app.com/overview?name={employeeName} or http://app.com/overview/{employeeName} ) | 

## API used in this project is a 3rd party API (for technical test purpose)
1. To get all the employees names: https://api.additivasia.io/api/v1/assignment/employees
2. To get the position and the direct subordinates of an employee: https://api.additivasia.io/api/v1/assignment/employees/:name

## Expected Data Shape
When query for the details of a specified employee who has subordinates: 
```
[
  "CEO",
  {
    "direct-subordinates": [
      "Samad Pitt",
      "Leanna Hogg"
    ]
  }
]
```

When query for the details of a specified employee who has no any subordinate: 
```
[
  "employee"
]
```

## Update
- replaced the class component to functional component (useHook for state management)
- use recursive component to display the subordinates (inspired by my friend, Hong Xiang)
