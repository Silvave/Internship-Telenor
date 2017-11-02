# Internship-Telenor

This is a small SPA done for Telenor's internship program.

Link to app's github pages demo - [**Here**](https://softuni.github.io/Internship-Telenor/app/)

Link to Telenor's implemented version - [**Here**](http://www.telenor.bg/careers/youth-vacancies?=list)

#### App's libraries:
- This application is using [**Require.js**](http://requirejs.org/) as main library and it's AMD functionality to build this app
- [**YouTube Player API**](https://developers.google.com/youtube/iframe_api_reference) to build a custom player functionality
- **Jquery**
- **Bootstrap**

#### Walkthrough the app's architecture:
(application's functionality is inside the **app** folder)
1. **MVC** architecture 
 -  The application is structured around MVC architecture with the models being absent because the data is held in a single *data.js* document (in **database** folder)
2. **Browser's history**
 - The app is using **browser's history object** and changing it's **state** to meet the requirements of the application (and client - *Telenor*)
3. **YouTube Player API**
 - As mentioned above the app is using YouTube Player API to load youtube videos. Also it is using **JS TimeIntervals** to track video's progress so that it know's when to change video's questions

#### Start the application
1. The application functionality is in the **app** folder. Go into it and click on (*index.html*). Through it loads the rest of the libraries and functionalities
    - with *require.js* being in **lib** folder one directory above *index.html* document
   
##### Bonus
There is a **html-page-skeletons** folder containing the raw html pages of the application
