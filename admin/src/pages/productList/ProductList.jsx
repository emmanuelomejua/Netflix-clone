import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Sidebar, Topbar } from "../../components";
import { MoviesContext } from '../../context/movieContext/MovieContext'
import { getMovieCalls } from '../../context/movieContext/apiCalls'

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const {movies, dispatch} = useContext(MoviesContext)

  useEffect(()=>{
    getMovieCalls(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  console.log(movies)

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "movies",
      headerName: "Movies",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "IsSeries", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <main className="i">
      <Topbar/>
      <section className="container">
      <Sidebar/>
        <div className="productList">
          <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(r) => r._id}
            />
        </div>
      </section>
   </main>
  );
}
