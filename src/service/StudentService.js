import axios from 'axios';

const STUDENT_API_BASE_URL='http://localhost:8080/api/student';

class StudentService {

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    getStudentById(studentId){
        const s =  axios.get(STUDENT_API_BASE_URL + '/' + studentId);
        return s;
    }

    creatStudent(student){
        return axios.post(STUDENT_API_BASE_URL,student);
    }
}

export default new StudentService();