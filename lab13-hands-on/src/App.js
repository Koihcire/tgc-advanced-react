import React , {useState} from 'react';
import StudentContext from './StudentContext';
import './App.css';
import StudentList from './StudentList';
import AddStudent from './AddStudent';

function App() {
  const [students, setStudents] = useState([
   
  ])

  const context = {
    getStudents: ()=>{
      return students;
    },

    addStudent: (studentNumber, yearOfStudy, gender, graduated)=>{
      const cloned = [...students, {
        student_number: studentNumber,
        year_of_study: yearOfStudy,
        gender: gender,
        graduated: graduated
      }]
      setStudents(cloned);
    },

    deleteStudent: (studentNumber)=>{
      //find the index of the record with this student number
      const newStudents = students.filter(function(student){return student.student_number !== studentNumber});
      setStudents(newStudents)
      //pull the object with that index from array
    }
  }

  return (
    <React.Fragment>
      <StudentContext.Provider value={context}>
        <h1>Students List</h1>
        <StudentList/>
        <br></br>
        <AddStudent/>
      </StudentContext.Provider>


    </React.Fragment>
  );
}

export default App;
