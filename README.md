# DevTinder

- Created a Vite + React project
- Remove unecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body component
- Create a footer

- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware to app.js with configurations: origin, credentials: true
- Whenever you are making API call pass axios=>{ withCredentioals: true}
- Install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start
- Create configureStore => Provider => createSlice => add reducer to store
- Add reduc devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logsin
- Refactor our code to add constants file + create a components folder

- You should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout
- Get the feed and add the feed in the store
- Build the user card on feed
- Create edit profile page
- Display userCard besides edit profile form
- Implement a tost to show the successful save of profile
- See all my connections
- New page to See all my connection requests

Body
NavBar
Router=/ => Feed
Route=/login => Login
Route=/connections => connections
Route=/profile => Profile
