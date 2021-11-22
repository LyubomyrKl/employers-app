import {useState} from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './App.css';


function App() {

    const [maxId, setMaxId] = useState(7)
    const [data, setData] = useState([
        {name: "Anna Kostiuk", salary: 800, increase: false, rise: false, id: 1},
        {name: "Inna Kostiuk", salary: 1232, increase: false, rise: false, id: 2},
        {name: "Alla Kostiuk", salary: 4400, increase: true, rise: true, id: 3},
        {name: "Anna Kostiuk", salary: 8400, increase: true, rise: true, id: 4},
        {name: "Inna Kostiuk", salary: 3232, increase: false, rise: true, id: 5},
        {name: "Alla Kostiuk", salary: 400, increase: true, rise: true, id: 6}
    ])

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all')

    const deleteItem = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const addItem = (name, salary) => {
        if(name.length > 3 && salary.length > 1){
            let item = {
                name,
                salary,
                increase: false,
                rise: false,
                id: maxId
            }
            setMaxId(maxId + 1)
            setData([...data, item])
        }
        return
    }

    const onToggleProp = (id, prop) => {
        setData(data.map(item=>{
            if(item.id === id){
                return{...item, [prop]: !item[prop]}
            }
            return item
        }))
    }

    const searchEmp = (items, term) => {
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term)
    }

    const filterItem = (items, filter) => {
        switch (filter) {
            case 'rise':
                return  items.filter(item => item.rise);
            case "above1000":
                return  items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }

    const visibleData = filterItem(searchEmp(data, term), filter);
    const allEpm = data.length;
    const toIncrease = data.filter(item => item.increase).length;

    return (
       <div className="app">
           <AppInfo allEmp = {allEpm}
                    toIncrease = {toIncrease}/>
           <div className="search-panel">
               <SearchPanel onUpdateSearch={onUpdateSearch}/>
               <AppFilter
                   filter={filter}
                   onFilterSelect={onFilterSelect}/>
           </div>
           <EmployeesList data={visibleData}
                          onDelete={deleteItem}
                          onToggleProp={onToggleProp}
                          />
           <EmployeesAddForm onAdd={addItem}/>
       </div>
    );
}

export default App;
