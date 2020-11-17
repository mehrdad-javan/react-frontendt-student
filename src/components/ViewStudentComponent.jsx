import React, { Component } from 'react';
import StudentService from '../service/StudentService';

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentId: this.props.match.params.studentId,
            student: {}
        }
    }       

    componentDidMount(){
        StudentService.getStudentById(this.state.studentId).then( res => {
            this.setState({student: res.data});
        })
    }
    
    render() {
        return (
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
        );
    }
}

export default ViewStudentComponent;