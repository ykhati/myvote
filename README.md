This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Replace the value in index.html 'your-app-id' with the ID of your own Facebook App.
Also use localhost in Appdomains and site_url under Basic settings in your App dashboard.

This is still in development mode and the Logout button needs to be fixed which I will be shortly working on.

To make the http error go while logging into facebook, we need to convert the app to use https.
You can do that by running the start command as: HTTPS=true npm start
