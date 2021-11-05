import { useState } from 'react'

const Header = (props) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("ase")

    // onclick in table header
    const onClickHandle = (field) => {
        const order = field === sortingField && sortingOrder === "ase" ? "desc" : "ase";
        setSortingField(field);
        setSortingOrder(order)
        props.onSort(field, order)
    }


    return (
        <tr>
            {
                props.headers.map(({ name, field, sortable }) => {
                    return (
                        <th
                            key={name}
                            onClick={() => sortable ? onClickHandle(field) : null}>
                            {name}
                        </th>
                    )
                })
            }
        </tr>
    )
}

export default Header
