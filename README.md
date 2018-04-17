# ![CF](http://i.imgur.com/7v5ASc8.png) 26: Cowsay "React"

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to configure webpack to compile JS into a bundle
* Students will be able to configure webpack to compile sass into a bundle
* Students will be able to configure babel to transpile JSX and ES6 to ES5 javscript
* Students will be able to create and render react components to the DOM
* Students will be able to add event listeners to react components 
* Students will be able to update react component state

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.babelrc** -- with all dependencies and dev-dependencies 
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **app.js** -- containing the entire app
* **style.css** -- containing your styling
 
#### Feature Tasks  
Create the following component
###### App
* Creat a component called `App`
* Should contain the entire application's view and state
* Should have a property on the state called content 
* Should create a view with the following display
  * A heading with the title "Generate Cowsay Lorem"
  * A Button that displays "click me"
    * `onClick` the button should generate new content on the app state using
      the `cowsay` and `faker` npm modules
  * A `<pre>` tag that displays the App's state's content 

####  Documentation  
Write a description of the project in your README.md

#### Stretch Goals
* add a select menu that enables you to change the type of cowfile currently being used
