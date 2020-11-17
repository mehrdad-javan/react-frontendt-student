import React, { Component } from 'react';
import StudentService from '../service/StudentService';

class CreateStudentComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            age: '',
            telephone: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

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

    saveStudent(e){
        e.preventDefault();
        let student = {name: this.state.name, email: this.state.email, age: this.state.age, telephone: this.state.telephone};
        console.log(student);

        StudentService.creatStudent(student).then(res => {
            this.props.history.push('/student');
        });
    }

    render() {
        return (
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
        );
    }
}

export default CreateStudentComponent;