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

    //if doing mongo or sql, you must use the restful API to add student to db, then the response of the API must include the new ID
    addStudent: (newStudent)=>{
      const cloned = [...students, newStudent]
      setStudents(cloned);
    },

    //setStudents are async, if need to complete in sequence need to add await

    deleteStudent: (studentNumber)=>{
      //find the index of the record with this student number
      const newStudents = students.filter(function(student){return student.student_number !== studentNumber});
      //alternatively
      // const indexToDelete = students.findIndex(s=> s.student_number === studentNumber);
      // const clone = [...students.slice(0, indexToDelete), students.slice(indexToDelete + 1)]
      // setStudents(clone);

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
