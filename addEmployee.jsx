import React, {useState} from 'react';

export default function AddEmployee({id, updateHooks}){
    const [name, setName] = useState("jais"),
            [age, setAge] = useState(18);

    const empList = JSON.parse(localStorage.getItem('empList'));

    return (
        <div>
            Name : <input
                type = 'text' 
                name = 'name'
                value = {name}
                onChange = {(e) => setName(e.target.value)}
            />
            Age : <input
                type = 'number' 
                name = 'age'
                value = {age}
                onChange = {(e) => setAge(e.target.value)}
            />
            <button
                onClick = {() => {
                    const employee = {id, name, age};
                    empList.push(employee);
                    localStorage.setItem('empList', JSON.stringify(empList));
                    localStorage.setItem('id', id+1);
                    updateHooks();
                }}
            >Add Employee</button>
        </div>
    );
}