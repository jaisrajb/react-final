import React from "react";
import {useParams} from 'react-router-dom';

export default function ViewEmployee(){
    debugger;
    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();
    const employee = empList.find((emp) => emp.id === +id);
    return(
        <>
            <h3>Id : {employee.id}</h3>
            <h3>Name : {employee.name}</h3>
            <h3>Age : {employee.age}</h3>
        </>
    );

}