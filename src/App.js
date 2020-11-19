import logo from './logo.svg';
import './App.css';

import ListStudentComponent from './components/ListStudentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateStudentComponent from './components/CreateStudentComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListStudentComponent}></Route>
                      <Route path = "/student" component = {ListStudentComponent}></Route>
                      <Route path = "/view-student/:studentId" component = {ViewStudentComponent}></Route>
                      <Route path = "/add-student" component = {CreateStudentComponent}></Route>
                </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

/*
function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListStudentComponent />    
      </div>
      <FooterComponent />
    </div>
  );
}
*/
export default App;
