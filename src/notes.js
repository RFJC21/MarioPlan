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
//28) in createProject, lets disptach this action creator. import the function, import connect (we need to connect this component to the store)
//28.1) create mapDispatchToProps
//28.2) now we can call the createProject in the handleSubmit with this.props
//28.3) to update the state, we need to go to the projectReducer, and we need to checc which action  we are receiving. We can use switch or if statement

//Firebase
//29) create a database in firebase ( go to firebase and create a new project)
//29.1) install firebase (npm install firebase), and create another folder in src called config, and the js file
//29.2) configure cloud firestore
//29.3) connect redux to firebase (npm install react-redux-firebase redux-firestore)
//29.4) now we have to pass the extra argument to the action creator
//29.5) noww we need to tell that we need to conenct to a specific firebase, and with thunk, we can have multiple store enhancers, and we can do that with the "compose method". we need 3 store enhancers.

//Add data to firebase
//30)in projectActions, create a file, add .then because it takes some time, and .catch to spot errors
//31) handle the .then and .catch in the reducer, adding a case to the switch
//32) now sync redux data with firestore.
//32.1) first import  firestoreReducer and set it in the rootReducer
//32.2) connect the component (dashboard) to the firestore collection, with firestoreConnect (a HOC) and compose. Deu erro, fazer:  npm i --save react-redux-firebase@latest e npm i --save react-redux@^5.0.0
//33.3) now we can grab the data from firestore
//33.4) add the property in the mapStateToProps
//33.5) click on the project and show the data. in project list, import Link, and link it to project + project.id
//33.6) add the data from project details. we need connect and firestoreconnect, and compose because we need to compose these 2 together
//33.7) now lets output the data in the same component, using agina destructuring

//Firebase Auth
//34) enable firebase auth in firebase
//35) we need to access the state to see which components do we need to render, depending if the user is signed in or out. So lets add a firebaseReducer to do the authentication syncing for us, in the rootreducer
