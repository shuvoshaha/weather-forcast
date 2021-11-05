import { useMemo, useState } from 'react';
import Pagination from './Pagination'
import { useSelector } from 'react-redux';
import { headers } from './headers';
import Filter from './Filter';
import Header from './Header'
import './style.scss';
import TableData from './TableData';

const Table = () => {
    const state = useSelector(state => state.userinfo);
    const { userInfo } = state;
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(200)
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: '', order: '' })

    // Index
    const indexOfFirst = (currentPage - 1) * postPerPage;
    const indexOfLast = (currentPage - 1) * postPerPage + postPerPage;


    // Sorting, Paginate, Filtering
    const customState = useMemo(() => {
        let computeData = userInfo;

        // Filtering
        if (search) {
            computeData = computeData.filter(
                data =>
                    data.user_id.toString().includes(search.toString()) ||
                    data.first_name.toLowerCase().includes(search.toLowerCase()) ||
                    data.last_name.toString().includes(search.toString()) ||
                    data.mobile.toString().includes(search.toString()) ||
                    data.email.toLowerCase().includes(search.toLowerCase()) ||
                    data.ip_address.toString().includes(search.toString()) ||
                    data.age.toString().includes(search.toString()) ||
                    data.email_address.toLowerCase().includes(search.toLowerCase()) 
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

        
        setTotalItems(computeData?.length)

        // Data Slice
        return computeData?.slice(indexOfFirst, indexOfLast);

    }, [userInfo, search, sorting, indexOfFirst, indexOfLast])


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
                                    <TableData key={index} item={item} />
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
