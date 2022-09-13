

const Select = ({options = [], onSelect}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value)
        
    }

    return (
        <select className="talles" onChange={handleSelect} >
            {
                options.map((opt) => <option key={opt.value} value={opt.value}>{opt.text}</option>)
            }
        </select>
    )
}

export default Select





/*

const Select=({options,onSelect})=>{

    const handleSelect=(e.target)=>{

    }

    return(
        <select onChange={handleSelect}>
            {
              options.map((opt) => <option key={opt.value} value={opt.value}>{opt.text}</option>)
            }
        </select>
    )
}

export default Select

*/