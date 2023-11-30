# Frontend Assessment
- Our React application is a comprehensive system designed to manage applications through a user-friendly interface. The application
  encompasses various functionalities, including a login page for user authentication, a main page housing an application form, a view page
  displaying all applications in a data table, and an editing page for modifying existing applications. Redux Toolkit has been integrated into
  the application for efficient state management across these different features.

## Features
- Login Page: Enables user authentication to access the application's functionalities securely.
- Main Page: Contains an application form allowing users to input and submit application details.
- View Applications Page: Displays all applications in a tabular format for easy reference and overview.
- Edit Application Page: Provides functionality to edit existing applications with updated information.
- Redux Toolkit Integration: Utilizes Redux Toolkit for state management across various components and functionalities, ensuring a consistent
  and predictable state.

## How to Use the Application:
- To access and utilize the application, follow these steps:

1. Login Credentials:
    Username: tupac
    Password: admin

2. Functionality Overview:
  - Upon successful login using the provided credentials, you will land on the main page.
  - Use the application form on the main page to submit new applications.
  - Navigate to the view applications page to see a table displaying all submitted applications.
  - Click on a specific application within the table to access the edit page and modify its details.

3. Redux Toolkit Integration:
  - The application utilizes Redux Toolkit to manage and maintain state across different pages and components.
  - Actions and reducers are structured using Redux Toolkit slices for efficient state management.


### Folder Structure

```
/src
│
├── /pages
│   ├── AllApplicatinsPage.js
│   ├── EditPage.js
|   ├── LoginPage.js
│   └── MainPage.js
│
├── /components
│   ├── Header.js
│   ├── Footer.js
│   ├── AddApplicationForm.js
│   ├── EditApplicationForm.js
│   ├── ListAllApplications.js
│   └── LoginForm.js
│
│
├── /route
│   └── PrivateRoute.js
│
├── /redux
│   ├── /actions
│   │   ├── applicationActions.js
│   │   ├── authActions.js
│   │   └── sectorsActions.js
│   │
│   ├── /slices
│   │   ├── applicationSlice.js
│   │   ├── authSlice.js
│   │   └── sectorsSlice.js
│   │
│   └── store.js
│
├── /api
|   └── api.js
│
└──App.js
```