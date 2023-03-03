

// Step 1 - Install React 
// First, we need to install React.js on your Android device. To do this, download the official React.js library from the React.js website. 

// Step 2 - Create the App Structure 
// Next, we need to create the basic structure of our app. Create a new directory that will act as the root of your project. Inside this new directory, create the following files: 

//index.html
<!DOCTYPE html>
<html>
<head>
    <title>To-Do List App</title>
    <script src="https://npmcdn.com/react@16/umd/react.development.js"></script>
    <script src="https://npmcdn.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>

    <script src="index.js"></script>
</body>
</html>

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
 
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

// Step 3 - Add To-Do List Components 
// Our To-Do List app will use three components. The first will be a parent component, called ListContainer. This component will handle all the other components. Next, we will have the ToDoList component, which will generate a list of the tasks the user needs to do. Finally, we will create an AddItem component, which will allow the user to add new items to the list. 

//ListContainer.js
import React, { Component } from 'react';
 
import ToDoList from './ToDoList';
import AddItem from './AddItem';
 
class ListContainer extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: []
    }
    this.addItem = this.addItem.bind(this);
  }
 
  addItem(item) {
    let toDoItems = this.state.toDoItems;
    toDoItems.push(item);
    this.setState({toDoItems: toDoItems});
  }
 
  render() {
    return (
      <div className="component-list-container">
        <AddItem add={this.addItem} />
        <ToDoList items={this.state.toDoItems} />
      </div>
    );
  }
}
 
export default ListContainer;

//TodoList.js
import React from 'react';
 
class ToDoList extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    });
 
    return (
      <ul>{items}</ul>
    )
  }
}
 
export default ToDoList;

//AddItem.js
import React from 'react';
 
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    e.preventDefault();
 
    if (this.refs.item.value !== '') {
      this.props.add(this.refs.item.value);
      this.refs.form.reset();
    }
  }
 
  render() {
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="item" /> <input type="submit" value="add" /> </form> <ul> { this.props.items.map(item => <li key={item}>{item}</li> ) } </ul> ) }

//install all the dependencies
npm install –save react react-dom redux react-redux
npm install –save-dev webpack

//define webpack configuration
const path = require('path'); const HtmlWebpackPlugin = require('html-webpack-plugin'); const webpack = require('webpack'); module.exports = { entry: './client/index.js', output: { filename: 'bundle.js', path: path.resolve(__dirname, 'public'), publicPath: './' }, plugins: [ new HtmlWebpackPlugin({ template: './client/index.html' }), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin() ], devServer: { port: 4321, Open:true }, devtool: 'eval-source-map', module: { rules: [ { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } } ] } }

//client/index.js
import React, { Component } from 'react'; import { render } from 'react-dom'; import { Provider } from 'react-redux'; import { createStore } from 'redux'; import rootReducer from './reducers'; import App from './App'; const store = createStore(rootReducer); render( <Provider store={store}><App /></Provider>, document.getElementById('root') )

//client/App.js
import React, { Component } from 'react'; import { connect } from 'react-redux'; import { add } from './actions'; class App extends Component { constructor() { super(); this.handleSubmit = this.handleSubmit.bind(this); } handleSubmit(e) { e.preventDefault(); 

//configure firebase

//Initialize Firebase
  var config = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-sender-id>"
};
firebase.initializeApp(config);

//references 
todoRef = firebase.database().ref('todo');

//invoke handleChange
handleChange(e) {
this.setState({[e.target.name]: e.target.value});
}

//invoke handleSubmit
handleSubmit(e) {
e.preventDefault();
const task = {
name: this.state.name
}
todoRef.push(todo);
this.setState({name: ' '});
}

render() {
return (
<form onSubmit={this.handleSubmit}>
<input type="text" name="name" placeholder="Enter a new to do task" onChange={this.handleChange} value={this.state.name} />
<input type="submit" value="Submit" />
</form>
);
}
}

export default App;