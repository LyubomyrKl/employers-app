import {useState} from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './App.css';


function App() {
    let maxId = 4

    const [data, setData] = useState([
        {name: "Anna Kostiuk", salary: 800, increase: false, rise: false, id: 1},
        {name: "Inna Kostiuk", salary: 1232, increase: false, rise: false, id: 2},
        {name: "Alla Kostiuk", salary: 4400, increase: true, rise: true, id: 3}
    ])


    const deleteItem = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const addItem = (name,salary ) => {

        let item = {
            name,
            salary,
            increase: false,
            rise: false,
            id: maxId
        }

        setData([...data, item])
    }

    const onToggleProp = (id, prop) => {
        setData(data.map(item=>{
            if(item.id === id){
                return{...item, [prop]: !item[prop]}
            }
            return item
        }))
    }


    return (
       <div className="app">
           <AppInfo/>
           <div className="search-panel">
               <SearchPanel/>
               <AppFilter/>
           </div>
           <EmployeesList data={data}
                          onDelete={deleteItem}
                          onToggleProp={onToggleProp}

                          />
           <EmployeesAddForm onAdd={addItem}/>
       </div>
    );
}

export default App;
