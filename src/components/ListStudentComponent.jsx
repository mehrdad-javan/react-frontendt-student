import React, { Component } from 'react';
import StudentService from '../service/StudentService';
import TableHeader from './TableHeader';

class ListStudentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            students: []
        }
        this.viewStudent= this.viewStudent.bind(this);
        this.addStudent= this.addStudent.bind(this);
    }

    viewStudent(studentId){
        this.props.history.push(`/view-student/${studentId}`);
    }

    addStudent(){
        this.props.history.push('/add-student');
    }

    componentDidMount(){
        StudentService.getStudents().then((res)=> {
            this.setState({students: res.data});
        });
    }
    
    render() {
        return (
            <div>
                <div className="card mt-4 mb-3 border-primary shadow-sm">
                    <h4 className="bg-light text-primary card-header">Student List</h4>
                </div> 
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                </div>
                <br></br>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <TableHeader/>
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
                                        <td>
                                        <button onClick={() => this.viewStudent(student.studentId)} className="btn btn-info" >Details</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>                            
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;