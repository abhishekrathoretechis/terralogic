Overview

The terralogic Project is a React Native application that allows users to search for GitHub profiles. The application leverages Redux Toolkit for state management and integrates with the GitHub API to fetch and display user data. This project demonstrates core principles of React Native development, including unit testing, state management, and API integration.

Features

Search for GitHub users by their login.

Display a list of users fetched from the GitHub API.

Error handling for API failures.

Loading indicators for a seamless user experience.

Technologies Used

React Native: Framework for building cross-platform mobile applications.

Redux Toolkit: For efficient state management.

React-Redux: Integration of Redux with React.

Redux Thunk: Middleware for handling asynchronous actions.

Jest and React Testing Library: For unit testing components.

File Structure

src/
├── components/
│ ├── SearchComponent.js // Main component for the search feature
│ ├── SearchComponent.test.js // Unit tests for SearchComponent
├── redux/
│ ├── slices/
│ │ ├── searchSlice.js // Redux slice for managing search state
│ ├── store.js // Store configuration
└── App.js // Root component

Installation

To run the project locally, follow these steps:

Clone the repository: git clone https://github.com/abhishekrathoretechis/terralogic

git clone https://github.com/abhishekrathoretechis/terralogic

Navigate to the project directory:

cd terralogic

Install dependencies:

npm install

Run the app on an emulator or device:

npm run android # For Android
npm run ios # For iOS

Running Tests

To execute the unit tests for this project, run:

npm test

This will run all tests and display the results in the console.

Usage

Enter a GitHub username in the input field.

Click the "Submit" button to fetch user data.

View the results on the screen.

Key Components

SearchComponent.js

Handles user input and dispatches actions to the Redux store.

Displays loading states and error messages.

Redux Slice (searchSlice.js)

Defines the initial state, reducers, and asynchronous actions for searching GitHub users.

Tests (SearchComponent.test.js)

Ensures the component dispatches actions correctly.

Verifies the integration between Redux state and the component.

Troubleshooting

Error: Cannot read properties of undefined (reading 'login'): Ensure the search slice in Redux has a properly defined initial state.

Test Failing Due to Logger: Remove or mock the logger middleware in the store configuration.

Contributing

Fork the repository.

Create a new branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Add feature-name"

Push to the branch:

git push origin feature-name

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

The GitHub API documentation: GitHub REST API

Redux Toolkit documentation: Redux Toolkit
