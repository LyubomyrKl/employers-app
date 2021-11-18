import './employees-add-form.css';
import {useState} from "react";

const EmployeesAddForm = ({onAdd}) => {
    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')

    const onValueChange = (e) =>{
        switch (e.target.name){
            case 'name':
                setName(e.target.value)
                break;
            case 'salary':
                setSalary(e.target.value)
                break;
            default:
                console.log(`Sorry, we are out of ${e.target}.`);
        }
    }

    const onAddItem = (e) =>{
        e.preventDefault();
        onAdd(name, salary);
        setName('');
        setSalary('')
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    value={name}
                    onChange={onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={onAddItem}>Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;