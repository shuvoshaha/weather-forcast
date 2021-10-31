import { useState } from 'react'

const Filter = ({ onSearch }) => {
    const [val, setVal] = useState('');

   const onChangeHandle = (value) =>{
        setVal(value)
        onSearch(value)
    }
    return (
        <div className="filter">
            <input
                type="text"
                name="Seach"
                value={val}
                placeholder="Search..."
                onChange={(e) => onChangeHandle(e.target.value)}
            />
        </div>
    )
}

export default Filter
