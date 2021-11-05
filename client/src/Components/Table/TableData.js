import { FcCheckmark } from 'react-icons/fc'

const TableData = ({ item }) => {
    return (
        <tr>
            <td> {item.user_id} </td>
            <td> {item.date_creation} </td>
            <td> {item.ip_address} </td>
            <td> {item.first_name} </td>
            <td> {item.last_name} </td>
            <td> {item.age} </td>
            <td> {item.mobile} </td>
            <td> {item.email} </td>
            <td> {item.time_slot} </td>
            <td> {item.ssc_hsc && <FcCheckmark />} </td>
            <td> {item.diploma && <FcCheckmark />} </td>
            <td> {item.bachelor && <FcCheckmark />} </td>
            <td> {item.masters && <FcCheckmark />} </td>
            <td> {item.phd && <FcCheckmark />} </td>
            <td> {item.profession} </td>
            <td> {item.less_than_1year_ex && <FcCheckmark />} </td>
            <td> {item.ex_1_3year && <FcCheckmark />} </td>
            <td> {item.years_3_ex && <FcCheckmark />} </td>
            <td> {item.settlement_fund} </td>
            <td> {item.invite_others} </td>
            <td> {item.email_address} </td>
        </tr>
    )
}

export default TableData
