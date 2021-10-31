import { useMemo, useState } from 'react';
import Pagination from './Pagination'
import { useSelector } from 'react-redux';
import Filter from './Filter';
import Header from './Header'
import './style.scss';

const Table = () => {
    const state = useSelector(state => state.temp);
    const { daily } = state;
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3)
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: '', order: '' })

    // Index
    const indexOfFirst = (currentPage - 1) * postPerPage;
    const indexOfLast = (currentPage - 1) * postPerPage + postPerPage;

    // Table header
    const headers = [
        { name: "Min Temp", field: "min", sortable: true },
        { name: "Max Temp", field: "max", sortable: true },
        { name: "Status", field: "status", sortable: true }
    ]

    // Sorting, Paginate, Filtering
    const customState = useMemo(() => {
        let computeData = daily;

        // Filtering
        if (search) {
            computeData = computeData.filter(
                data =>
                    data.weather[0].main.toLowerCase().includes(search.toLowerCase()) ||
                    data.temp.min.toString().includes(search.toString()) ||
                    data.temp.max.toString().includes(search.toString())
            )
        }

        // Sorting
        const reversed = sorting.order === "ase" ? 1 : -1;
        if(sorting.field === "min"){

            computeData = computeData.sort(
                (a, b) => { return reversed * (a.temp.min - b.temp.min)}
            )

        } else if(sorting.field === "max"){
            computeData = computeData.sort(
                (a, b) => { return reversed * (a.temp.max - b.temp.max)}
            )
        }

        else if(sorting.field === "status"){
            computeData = computeData.sort(
                (a, b) =>{ 
                    const nameA = a.weather[0].main.toLowerCase();
                    const nameB = b.weather[0].main.toLowerCase()

                    if(nameA < nameB){
                        return -1
                    } 
                    else if(nameA > nameB){
                        return 1
                    } else{
                        return 0
                    }
                }
            )
        }

        
        setTotalItems(computeData?.length)

        // Data Slice
        return computeData?.slice(indexOfFirst, indexOfLast);

    }, [daily, search, sorting, indexOfFirst, indexOfLast])


    return (
        <div className="table">
            <div className="container">
                <h4>Monthly Data forcast</h4>

                {/* Table Header */}
                <div className="table_header">

                    <Pagination
                        total={totalItems}
                        currentPage={currentPage}
                        postPerPage={postPerPage}
                        onChangePage={value => setCurrentPage(value)}
                    />
                    <Filter
                        onSearch={(val => setSearch(val))}
                    />

                </div>

                {/*  Table */}
                <table border="1">
                    <thead>
                        <Header 
                            onSort={(field, order) => setSorting({ field, order })}
                            headers={headers} 
                        />
                    </thead>

                    <tbody>
                        {
                           customState?.map((item, index) => {

                                return (
                                    <tr key={index}>
                                        {/* <td>{ new Date(item.dt*1000 + (item.timezone_offset*1000)).getUTCDate() } </td> */}
                                        <td>{item.temp.min} &deg; deg</td>
                                        <td>{item.temp.max} &deg; deg</td>
                                        <td> {item.weather[0].main} </td>
                                    </tr>
                                )
                            }) 
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
