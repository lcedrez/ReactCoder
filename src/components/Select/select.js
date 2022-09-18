

const Select = ({options = [], onSelect}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value)
        
    }

    return (
        <select className="talles" onChange={handleSelect} >
            {
                options.map((opt) => <option key={opt.value} value={opt.value}>{opt}</option>)
            }
        </select>
    )
}

export default Select




