import  { useState } from 'react'
import { userRows } from '../../../data'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './UserList.css'

export default function UserLIst() {

    const [userData, setUserData] = useState(userRows)

    const userDelete = userID => {
        setUserData(userData.filter(user => user.id != userID))
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
            editable: true,
            align: 'center',
            headerAlign: 'center',

        },
        {
            field: 'user',
            headerName: 'First Name',
            width: 200,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <Link to="../" className="link">
                        <div className='userListUser'>
                            <img src={params.row.avatar} className="userListImg" />
                            {params.row.name}
                        </div>
                    </Link>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`../users/${params.row.id}`} className="link">
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            className="userListDelete"
                            onClick={() => userDelete(params.row.id)}
                        />
                    </>
                )
            }
        }
    ]

    return (
        <>
            <div className='userList'>
                <DataGrid
                    rows={userData}
                    columns={columns}
                    disableSelectionOnClick
                    pageSize={5}
                />
            </div>

        </>
    );
}
