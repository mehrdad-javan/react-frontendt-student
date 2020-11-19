import React, { Component } from 'react';
import StudentService from '../service/StudentService';

class CreateStudentComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            student: {
                name:"",
                age:0,
                email:"",
                telephone:""
            },
            errors: {
                name:'',
                email:'',
                age:'',
                telephone:''
            },
            apiError: ""
        }
         

        // this.changeNameHandler = this.changeNameHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        // this.changeAgeHandler = this.changeAgeHandler.bind(this);
        // this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);
        // this.saveStudent = this.saveStudent.bind(this);
    }
  

    handleValidation = () =>{
        let std = this.state.student;
        let errors = {};
        let formIsValid = true;
        //Name
        if(std.name.length === 0){
           formIsValid = false;
           //errors["name"] = "Cannot be empty";
           errors.name = "Name is required";
        }
        //Email
        if(std.email.length === 0 ){
            formIsValid = false;
            errors.email= "Mail is required";
            //this.setState({errors:{...this.state.errors, email: "Mail is required"}});

        }
         //Age
         if(std.age <= 0){
            formIsValid = false;
            errors.age= "Age is required";
           // this.setState({errors:{...this.state.errors, age: "Age is required"}});
        }
         //Telephone
         if(std.telephone.length === 0){
            formIsValid = false;
            errors.telephone = "Phone is required";
            //this.setState({errors:{...this.state.errors, telephone: "Phone is required"}});
        }

        // this.setState({errors: errors});
        this.setState({errors});
        return formIsValid;
   }
    
    /*
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
    */

   saveStudentSubmit = (e) => {
        e.preventDefault();
        const isValid=this.handleValidation();
        console.log('isValid', isValid); 
        if(isValid){
            alert('Demo Form is submited');

            let student = this.state.student;
            console.log('AAAAAAAAAA ',student);
            StudentService.creatStudent(student)
            .then(res => {
                console.log('res.status', res.status);
              if(res.status == "201"){
                console.log('res.data', res.data);
                this.props.history.push('/student');
              }else{
                console.log('@@@res.data', res.data);
                this.setState({apiError: res.data.message});
            }
                
            })
        }
    }

      
    handleChange = (e) => {

    
const variable = e.target.id;
        //std[field] = e.target.value;    
          
        this.setState({ 
            student:{...this.state.student, [variable]: e.target.value}})
    }

    render() {
        console.log("state", this.state)
        return (
            <div>
                <div className="card mt-4 mb-3 border-primary shadow-sm">
                    <h4 className="bg-light text-primary card-header">Register Form</h4>
                </div>
                <p>Please fill in this form to add a student</p>
                <hr></hr>
                {this.state.apiError && <p style={{color: "red"}}>{this.state.apiError}</p>}
                <form onSubmit= {this.saveStudentSubmit}>
                    <label className="col-sm-3 control-label"><b>Name:</b></label>
                    <input type="text" id="name" className="form-control" value={this.state.student["name"]} onChange={this.handleChange} placeholder="Enter Name"/>
                    <span style={{color: "red"}}>{ this.state.errors.name}</span>
                   
                    <label className="col-sm-3 control-label"><b>Email:</b></label>
                    <input type="text" id="email" className="form-control" value={this.state.student["email"]} onChange={this.handleChange} placeholder="Enter Email" />
                    <span style={{color: "red"}}>{ this.state.errors.email}</span>
                    
                    <label className="col-sm-3 control-label"><b>Age:</b></label>
                    <input type="text" id="age" className="form-control" value={this.state.student["age"]} onChange={this.handleChange} placeholder="Enter Age" />
                    <span style={{color: "red"}}>{this.state.errors.age}</span>

                    <label className="col-sm-3 control-label"><b>Telephon:</b></label>
                    <input type="text" id="telephone" className="form-control" value={this.state.student["telephone"]} onChange={this.handleChange} placeholder="Enter Telephon" />
                    <span style={{color: "red"}}>{this.state.errors.telephone}</span>


                    

                   
                    <hr/>
                    <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                </form>
                    
            </div>
        );
    }
}

export default CreateStudentComponent;