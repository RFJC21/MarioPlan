//*Mario App* - Redux + Thunk + Firebase(Firestore, Authentication, cloud funtions, hosting) + Materialize css
//https://www.youtube.com/watch?v=h9enkZBFCyA&index=2&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3

//First create all compenents (without any logic), and then add redux

//Dicas:
//- try to do as much modular as pssible

//1) add materialize css in getting started cdn
//2) create all the components (no data yet)
//3) instal react router npm install --save react-router react-router-dom)
//4) wrap the app with BrowserRouter
//5) do the navbar component (Link)
//6) do the signin and signedout and nest them into the navbar (for now display them all, they dont have any login behind them whatsoever)
//7) dashboard, a class component, first div the project list, the second div the notifications
//8) use switch and route to render dashboard in app.js
//9) create the project summary, to nest it inside project list (to be more modular)
//10) we want to user to click the project title, and go to the project details. lets do the projectd details.js
//Note: "rafce tab" creates a functional component (extendsion ES7)
1; //0.1) set um a route in app.js, adding /project/:id
//10.2) extract the project id from projectdetails.js, and output it in the same component
//11) ☝Login (class based)
//Note:"rce tab". react based component
//Note2: because the input is overwrite the label, add the link from materialize css for javascript (CDN) the second one. Color em cima do body in index.html
//12) update the state with the event handlers. because we have two input, we have to check the id
//12.1) handle the form submission
//13) ☝signup (copy the signin). we have to have first and last name
//Add a route in App.js
//14) create a project form. copy the singin
//create a route
//15) set up the links in navbar, signin and singout links
//16) add some css to index.css, and style the forms also in index.css

//Redux👌
//17) install
//18) create the store in index.js. Import Provider, createStore and the rootReducer.
//19) create the folder store, sub-folder reducers, and create the reducers
//	19.1) auth reducer
//	19.2) project reducer
//	19.3) roorReducer
//20) dashboard is going to pass props to the project list and project summary. So lets create dummy project in projectReducer, to see if it is working
//21) now in dashboard, we need to acess our store, connect to the store. Add connect (hoc). We have to connect our component to the store
//22) now we need to map our store (state) to the props. mapStateToProps. Which properties are attached to this component. ex: state.project.projects. project from the reducer; projects from the object from the state
//Note: console.log after the render method, before the return
//23) pass the data to the project list as props, in the dashboard. Destructure projects
//24) and receive those props (projects) in the project list component, also destructuring the projects. Lets .map through the projects(inside the return), using projects && (this means that if we have projects, so do the rest, otherwise dont bother), receiving the projects prop
//25) in the project summary, receive a project, and output it dynamically

//26) get external data. Redux-Thunk (npm install redux-thunk)
//Concept: middleware is just code that runs between the action and the reducer
//So well use thunk, that allow us to perforn asynchronous tasks inside of our action creators. we can return a function inside of our action creators, which can interact with the database
//26.1) apply thunk to our store in index.js, importing applyMiddleware and thunk
//27) create an action creator (with thunk we return a function, instead of an object)
