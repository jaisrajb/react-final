import React, {useState, useEffect} from 'react';
import AddEmployee from './addEmployee';
import Table from './table';
import ViewEmployee from './viewEmployee';
import UpdateEmployee from './edit';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from 'react-router-dom';

export default function Employee() {

    const [empList, setEmpList] = useState([]),
            [id, setId] = useState(1);

    // Updates the Hooks from LocalStorage
    function updateHooks() {
        debugger;
        setEmpList(JSON.parse(localStorage.getItem('empList')));
        setId(+localStorage.getItem('id'));
    }

    useEffect(()=>{
        updateHooks();
    }, []);

    return(
        <Router>
            <Link to = '/addEmployee'>Add Employee</Link>
            <Switch>
                <Route exact path = '/addEmployee'>
                    <AddEmployee id = {id} updateHooks = {updateHooks} />
                </Route>
                <Route exact path = '/view/:id'>
                    <ViewEmployee updateHooks = {updateHooks} />
                </Route>
                <Route exact path = '/update/:id'>
                    <UpdateEmployee  updateHooks = {updateHooks}/>
                </Route>
                <Table empList = {empList} updateHooks={updateHooks} />
            </Switch>
        </Router>
    );
}

