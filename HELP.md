## STUDENT Management Application 
#### CRUD features:
Create Student
Show Student List
Show Student By Id
###### API URL
```
http://localhost:8080/api/student
```
#### 1. Create React App
```Bash
npx create-react-app react-frontendt-student
```
#### 2. Adding Bootstrap in React Using NPM
```Bash
npm install bootstrap --save
```
>src/index.js
>import 'bootstrap/dist/css/bootstrap.min.css';
#### 3. Adding axios - REST API Call
```Bash
npm add axios --save
```

#### 4. Project Structure 
```
create component and service directory
```
#### 5. Remove HTML codes ind App.js 
```jsx
function App() {
  return (
    <div className="App">
      <h1>Student List Page</h1>
    </div>
  );
}
```
#### 6. Run Test 
#### 7. Create Student List Component 
- ListStudentComponent.jsx
```jsx
import React, { Component } from 'react';

class ListStudentComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ListStudentComponent;
```

- Add basic html table code inside the **div** element by using bootstrap
```jsx
<div className="card mt-4 mb-3 border-primary shadow-sm">
    <h4 className="bg-light text-primary card-header">Student List</h4>
</div> 

<br></br>
<div className="row">
    <table className = "table table-striped table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Telephone</th>
                <th>regDate</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            
        </tbody>
    </table>
</div>
```

#### 6 Change App.js. 
- import and add html code in App function 
```jsx
import ListStudentComponent from './components/ListStudentComponent';



<div className="container">
    <ListStudentComponent />    
</div>
```
#### 7. Run Test 

#### 8 for incoking web service we need to add axios library. 
```Bash
npm add axios --save
```

#### 9. Create Student Service file in service directory
- create class StudentService.js
- import axions
- add API URL
- implement method 
```jsx
import axios from 'axios';

const STUDENT_API_BASE_URL='http://localhost:8080/api/student';

class StudentService {

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

}

export default new StudentService();
```

#### 10. Add constructor to ListStudentCompnent 
```jsx
constructor(props){
    super(props)
    this.state={
        students: []
    }
}
```

#### 11. implment table body 
```jsx
<tbody>
    {
        this.state.students.map(
            student => 
            <tr key = {student.studentId}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.telephone}</td>
                <td>{student.regDate}</td>
                <td></td>
            </tr>
        )
    }
</tbody>
```

#### 12. Mount Result to Component 
- import StudentService inside ListStudentComponent
```jsx
import StudentService from '../service/StudentService';
```
```jsx
componentDidMount(){
    StudentService.getStudents().then((res)=> {
        this.setState({students: res.data});
    });
}
```
#### 13. Run Test 

#### 14. Create Header and Footer Component. 
HeaderComponent.js
FooterComponent.jsx
```jsx
import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <header>
                    Header
                </header>
            </div>
        )
    }
}

export default HeaderComponent;
```
```jsx
import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                 <footer>
                    Footer
                </footer>
            </div>
        )
    }
}

export default FooterComponent;
```

#### 15. Add Comonents inside the App.js file
```jsx
 <div>
    <HeaderComponent />
    <div className="container">
        <ListStudentComponent />    
    </div>
    <FooterComponent />
</div>
``` 

#### 16. Custome Header and Footer
add to header component
```html
            <div>
                <header>
                    <div className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <a href="/student" className="nav-item nav-link">Student List</a>
                        </div>
                    </div>
                </header>
            </div>

```

add css inside the App.css
```css
.footer {
  position: absolute;
  bottom: 0;
  width:100%;
  height: 50px;
  background-color:#343a40;
  text-align: center;
  color: white;
}
```
add to footer component
```html
            <div>
                 <footer className = "footer">
                    <span className="text-center">Lexicon Vaxjo 2020</span>
                </footer>
            </div>
```

#### 17. Run Test 

### Part 2
#### Configure React App Routing
```bash
npm install react-router-dom
```

#### 1. Add getStudentById method in StudentService.js
```JSX
getStudentById(studentId){
        const s =  axios.get(STUDENT_API_BASE_URL + '/' + studentId);
        return s;
    }
```
#### 2. Add method viewStudent(studentId) in ListStudentController.jsx
```jsx
    viewStudent(studentId){
        this.props.history.push(`/view-student/${studentId}`);
    }
```

#### 3. Add button inside the table element in ListStudentController.jsx
```jsx
<button onClick={() => this.viewStudent(student.studentId)} className="btn btn-info" >Details</button>
```

#### 4. Map method inside the constructor in ListStudentController.jsx
```jsx
this.viewStudent= this.viewStudent.bind(this);
```
#### 5. Add Routing in App.js

import router in App.js
```jsx
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
```
replace with current div element
```jsx
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListStudentComponent}></Route>
                      <Route path = "/student" component = {ListStudentComponent}></Route>
                      <Route path = "/view-student/:studentId" component = {ViewStudentComponent}></Route>

                </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
```

import in App.js
```jsx
import ViewStudentComponent from './components/ViewStudentComponent';
```

#### 6. Create ViewStudentComponent.jsx

```jsx
import React, { Component } from 'react';

class ViewStudentComponent extends Component {
       

    render() {
        return (
            <div>
               View Form
            </div>
        );
    }
}

export default ViewStudentComponent;
```

add constructor
```jsx
constructor(props) {
        super(props)

        this.state = {
            studentId: this.props.match.params.studentId,
            student: {}
        }
    }
```

add html form elements
```jsx
<div>
    <div className="card mt-4 mb-3 border-primary shadow-sm">
        <h4 className="bg-light text-primary card-header">Student Information</h4>
    </div>
    
    <div className="card-body">
        <div className="d-md-flex flex-row mb-3">
            <div className="col-sm-2 bg-light shadow-sm">
                <span>Id:</span>
            </div>
            <div className="col-sm-10 bg-light shadow-sm">
                <span>{ this.state.student.studentId}</span>
            </div>
        </div>
        <div className="d-md-flex flex-row mb-3">
            <div className="col-sm-2 bg-light shadow-sm">
                <span>Name:</span>
            </div>
            <div className="col-sm-10 bg-light shadow-sm">
                <span>{ this.state.student.name}</span>
            </div>
        </div>
        <div className="d-md-flex flex-row mb-3">
            <div className="col-sm-2 bg-light shadow-sm">
                <span>Email:</span>
            </div>
            <div className="col-sm-10 bg-light shadow-sm">
                <span>{ this.state.student.email}</span>
            </div>
        </div>
        <div className="d-md-flex flex-row mb-3">
            <div className="col-sm-2 bg-light shadow-sm">
                <span>Age:</span>
            </div>
            <div className="col-sm-10 bg-light shadow-sm">
                <span>{ this.state.student.age}</span>
            </div>
        </div>
        <div className="d-md-flex flex-row mb-3">
            <div className="col-sm-2 bg-light shadow-sm">
                <span>Phone:</span>
            </div>
            <div className="col-sm-10 bg-light shadow-sm">
                <span>{ this.state.student.telephone}</span>
            </div>
        </div>
        <div className="d-md-flex flex-row mb-3">
            <div className="col-sm-2 bg-light shadow-sm">
                <span>Register Date:</span>
            </div>
            <div className="col-sm-10 bg-light shadow-sm">
                <span>{ this.state.student.regDate}</span>
            </div>
        </div>
        <hr/>
        <a href="/student" className="btn btn-info">Back</a>

    </div>
    
</div>
```
import StudentService
```jsx
import StudentService from '../service/StudentService';
```
then mount method
```jsx
componentDidMount(){
        StudentService.getStudentById(this.state.studentId).then( res => {
            this.setState({student: res.data});
        })
    }
```

### Part 3

#### 1. Add method creatStudent in StudentService.js

```jsx
    creatStudent(student){
        return axios.post(STUDENT_API_BASE_URL,student);
    }
```

#### 2. map addStudent method inside the constructore in ListStudentComponent

```jsx
    addStudent(){
        this.props.history.push('/add-student');
    }
```

#### 3. Add method addStudent in ListStudentComponent

```jsx
    this.addStudent= this.addStudent.bind(this);
```

#### 4. Add button insie the ListStudentComponent.jsx

add ut at the top of table
```jsx
<div className = "row">
    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
</div>
```

#### 5. create CreateStudentComponent.jsx

```jsx
import React, { Component } from 'react';
import StudentService from '../service/StudentService';

class CreateStudentComponent extends Component {

    render() {
        return (
            <div>
                Register Form
            </div>
        );
    }
}

export default CreateStudentComponent;
``` 
add constructor in side CreateStudentComponent
```jsx
constructor(props){
    super(props);
    this.state = {
        name: '',
        email: '',
        age: '',
        telephone: ''
    }
}
```

implement change handler
```jsx
    changeNameHandler=(event) =>{
        this.setState({name: event.target.value});    
    }

    
    changeEmailHandler=(event) =>{
        this.setState({email: event.target.value});    
    }
    
    
    changeAgeHandler=(event) =>{
        this.setState({age: event.target.value});    
    }
    
    
    changeTelephoneHandler=(event) =>{
        this.setState({telephone: event.target.value});    
    }
```

map in constructor
```jsx
this.changeNameHandler = this.changeNameHandler.bind(this);
this.changeEmailHandler = this.changeEmailHandler.bind(this);
this.changeAgeHandler = this.changeAgeHandler.bind(this);
this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);
this.saveStudent = this.saveStudent.bind(this);
```

add html register form
```jsx
<div>
    <div className="card mt-4 mb-3 border-primary shadow-sm">
        <h4 className="bg-light text-primary card-header">Register Form</h4>
    </div>
    <p>Please fill in this form to add a student</p>
    <hr></hr>

    <form>
        <label className="col-sm-3 control-label"><b>Name:</b></label>
        <input type="text" className="form-control" value={this.props.name} onChange={this.changeNameHandler} placeholder="Enter Name"/>

        <label className="col-sm-3 control-label"><b>Email:</b></label>
        <input type="text" className="form-control" value={this.props.email} onChange={this.changeEmailHandler} placeholder="Enter Email" required />
        
        <label className="col-sm-3 control-label"><b>Age:</b></label>
        <input type="text" className="form-control" value={this.props.age} onChange={this.changeAgeHandler} placeholder="Enter Age" required />

        <label className="col-sm-3 control-label"><b>Telephon:</b></label>
        <input type="text" className="form-control" value={this.props.telephone} onChange={this.changeTelephoneHandler} placeholder="Enter Telephon" required />
        
        <hr/>
        <button type="submit" className="btn btn-primary btn-block mb-3" onClick={this.saveStudent}>Register</button>
    </form>
        
</div>
```

add service method
```jsx
    saveStudent(e){
        e.preventDefault();
        let student = {name: this.state.name, email: this.state.email, age: this.state.age, telephone: this.state.telephone};
        console.log(student);

        StudentService.creatStudent(student).then(res => {
            this.props.history.push('/student');
        });
    }

```

add router in app.js
```jsx
    <Route path = "/add-student" component = {CreateStudentComponent}></Route>
```

import in App.js
```jsx
import CreateStudentComponent from './components/CreateStudentComponent';
```

npm install react-hook-form
import { useForm } from 'react-hook-form';