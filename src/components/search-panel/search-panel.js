import './search-panel.css';
import {useState} from "react";


const SearchPanel = ({onUpdateSearch}) => {
    const [term, setTerm] = useState('')

    const updateSearch = (e) => {
        setTerm(e.target.value);
        onUpdateSearch(term);
    }

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={term}
                onChange={updateSearch} />
    )
}

export default SearchPanel;