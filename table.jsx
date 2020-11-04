import React from 'react';
import {useHistory} from 'react-router-dom'

export default function Table({empList,updateHooks}){
    const header = ['Id', 'Name', 'Age','Action']; 
    return(
        <table>
            <thead>
                <tr>
                    {header.map((head)=><th>{head}</th>)}
                </tr>  
            </thead>  
            <tbody>
                {empList.map((row)=>(
                    <tr >
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td><BtnBlock id = {row.id} updateHooks={updateHooks} /></td>    
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function BtnBlock({id,updateHooks}){
    let history = useHistory();
    return(
        <>
            <button onClick={()=>{
                debugger;
                history.push(`/view/${id}`);
            }}> View</button>

            <button onClick={()=>{
                debugger;
                history.push(`/update/${id}`);
            }}> Edit</button>

            <button onClick={()=>{
                let empList=JSON.parse(localStorage.getItem('empList'));
                empList=empList.filter(emp=>emp.id !== id);
                window.confirm("click ok to del" ) &&
                localStorage.setItem('empList',JSON.stringify(empList));
                updateHooks();
                history.push('/');
            }}> Delete</button>
        </>
    );
}