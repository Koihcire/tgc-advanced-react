import React, {useState, useContext} from 'react';
import StudentContext from './StudentContext';

export default function AddStudent(){
    const context = useContext(StudentContext)
    const [newStudent, setNewStudent] = useState([]);

    const updateFormField = (e)=>{
        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value
        })
    }

    const addStudent = () =>{
        context.addStudent(newStudent)
    }
    
    return(
        <React.Fragment>
            <h3>Add New Student</h3>
            <div>
                <label>Student Number</label>
                <input type="text" name="student_number" value={newStudent.student_number} onChange={updateFormField}/>
            </div>
            <div>
                <label>Year of Study</label>
                <input type="number" name="year_of_study" value={newStudent.year_of_study} onChange={updateFormField}/>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" id="male" name="gender" value="male" checked={newStudent.gender === "male"} onChange={updateFormField}/> <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" checked={newStudent.gender === "female"} onChange={updateFormField}/> <label for="female">Female</label>
            </div>
            <div>
                <label>Graduated</label>
                <input type="radio" id="true" name="graduated" value="true" checked={newStudent.graduated === "true"} onChange={updateFormField}/> <label for="true">True</label>
                <input type="radio" id="false" name="graduated" value="false" checked={newStudent.graduated === "false"} onChange={updateFormField}/> <label for="false">False</label>
            </div>
            <button onClick={addStudent}>Add</button>

        </React.Fragment>
    )
}