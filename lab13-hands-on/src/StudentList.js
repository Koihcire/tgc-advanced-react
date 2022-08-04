import React, { useContext } from 'react';
import StudentContext from './StudentContext';

export default function StudentList() {
    const context = useContext(StudentContext)

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Student Number</th>
                        <th>Year of Study</th>
                        <th>Gender</th>
                        <th>Graduated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {context.getStudents().map(s => {
                        return <tr>
                            <td>{s.student_number}</td>
                            <td>{s.year_of_study}</td>
                            <td>{s.gender}</td>
                            <td>{s.graduated}</td>
                            <td><button onClick={()=>{context.deleteStudent(s.student_number)}}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}