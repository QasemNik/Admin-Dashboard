import { useState } from 'react'
import { products } from '../../../data.js'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './Products.css'

function Product() {
  const [productData, setProductData] = useState(products)
  const productsDelete = ProID => {
    setProductData(productData.filter(pro => pro.id !== ProID))
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
      field: 'title',
      headerName: 'Name',
      width: 200,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) =>
        <Link to="/product/:id" className="link">
          <div className='userListUser'>
            <img src={params.row.avatars} className="userListImg" />
            {params.row.title}
          </div>
        </Link>
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) =>
        <>
          <Link to={`/productDetail/${params.row.id}`} className="link">
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlineIcon
            className="userListDelete"
            onClick={() => productsDelete(params.row.id)}
          />
        </>

    }
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={productData}
        columns={columns}
        disableSelectionOnClick
        pageSize={3}
        checkboxSelection
      />
    </div>
  );
}



export default Product
