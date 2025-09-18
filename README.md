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
- Feature - Accept/Reject Connection Request
- Send/ignore the user card from feed

Remaining:

- Signup new user
- Testing E2E

Body
NavBar
Router=/ => Feed
Route=/login => Login
Route=/connections => connections
Route=/profile => Profile

# Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-56-228-31-41.eu-north-1.compute.amazonaws.com
- Install Node version 22.19.0
- Git clone

## Frontend

    - npm install -> install the dependencies
    - npm run build
    - sudo apt update -> to update our server system
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - copy code from dist(build files) to var/www/html/
    - sudo scp -r dist/* /var/www/html/
    - Enable port :80 of your instance (because by default nginx is present on port :80)

## Backend

    - Allowed ec2 instance public IP on mongodb server
    - Installed npm install pm2 -g
    - pm2 start npm -- start
    - pm2 logs
    - pm2 flush npm (clearing your logs)
    - pm2 list -> shows the list of processes running by pm2
    - pm2 delete npm (deleting npm process from pm2)
    - pm2 start npm --name "devTinder-backend" -- start (give custom name to your process)
    - config nginx - /etc/nginx/sites-available/default
    - restart nginx  sudo systemctl restart nginx
    - Modify the frontend BASE_URL to /api

## Adding a custom Domain Name

- Purchased Domain Name from GoDaddy
- Signup on CloudFlare & add a new domain name
- Change the NameServers on GoDaddy and point it to cloudflare
- Wait for sometime till your nameservers are updated
- DNS Record: create a A record
- Enable SSL for Website

## Sending Emails via SES

- Create a IAM user
- Give access to AmazonSESSullAccess
- Amazon SES: Create an Identity
- Verify your domain name
- Verify an email address
- Install AWS SDK - v3
- SEtup SesClient
- Access Credentials should be created in IAM under SecurityCredentials Tab
- Add the Credentials to the env file
- Write code for SESClient
- Write code for Sending email address
- Making the email dynamic by passing more params to the run function
