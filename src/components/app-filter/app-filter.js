import "./app-filter.css";

const AppFilter = ({filter, onFilterSelect}) => {

    const buttonsData = [
        {name: "all", label: "Все сотрудники"},
        {name: "rise", label: "На повышение"},
        {name: "above1000", label: "З/П больше 1000$"}
    ]

    const elements = buttonsData.map(({name, label}) =>{
        const active = filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light"

        return <button type="button"
                       name={name}
                       className={`btn ${clazz}`}
                       key={name}
                       onClick={ () => {onFilterSelect(name)} }>
                    {label}
                </button>
    })

    return (
        <div className="btn-group">
            {elements}
        </div>
    )
}

export default AppFilter;