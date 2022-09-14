const Select = ({label,optionsList,handleChange}) => {
    return ( <select value={label} onChange={handleChange}>
        {optionsList.map((option,i)=>
        <option value={i} key={i}>{option.toUpperCase()}</option>
        )}
    </select> );
}
 
export default Select;