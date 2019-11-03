# Portfolio-DatabaseRetrival

## Implementation Guide
1. Create a new folder in your local computer. Name it anything you want (ex. Portfolio).
1. open terminal or cmd in this folder.
1. If you are new to firebase then create an account by going to [this website](https://firebase.google.com/). And then create an app. Add a realtime database. Follow this [tutorial](https://www.youtube.com/watch?v=noB98K6A0TY) for assistance.
1. My function retrives database from the folder - '/Projects/' in the firebase database.
1. The database has a list of projects inside the folder as '/Projects/<UniqueNo>/'
1. All the projects must have the following fields :
        * name - Name of the project
        * img - url of the image
        * start - start date
        * end - end date
        * comments - project description
        * href - link to view more about the project
1. In the command prompt type
```
npm install -g firebase-tools
```        
to install firebase tools globally
1. Login to your account 
```
firebase login
```
1. After being logged in, init the cloud functions
```
firebase init functions
```
1. Choose your project and follow the setup. For more info, visit [this site](https://medium.com/codingthesmartway-com-blog/introduction-to-firebase-cloud-functions-c220613f0ef)

1. Now copy the file,'./functions/index.js' from github to your local folder ('functions').
1. Modify the index.js file if you are having some different folder structure than mine in firebase database.
1 Atlast deploy the function by 
```
firebase deploy
```
