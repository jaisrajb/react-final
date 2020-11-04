import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

export default function AddEmployee({updateHooks}){
    const [name, setName] = useState(""),
            [age, setAge] = useState("");
    debugger;

    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();
    const employee = empList.find((emp) => emp.id === +id);
    const index = empList.indexOf(employee);

    return (
        <div>
            Name : <input
                type = 'text' 
                name = 'name'
                placeholder = {employee.name}
                value = {name}
                onChange = {(e) => setName(e.target.value)}
            />
            Age : <input
                type = 'number' 
                name = 'age'
                placeholder = {employee.age}
                value = {age}
                onChange = {(e) => setAge(e.target.value)}
            />
            <button
                onClick = {() => {
                    const emp = {
                        id : +id, 
                        name : name ? name : employee.name, 
                        age : age ? age : employee.age,
                    };
                    empList[index] = emp;
                    localStorage.setItem('empList', JSON.stringify(empList));
                    updateHooks();
                }}
            >Add Employee</button>
        </div>
    );
}