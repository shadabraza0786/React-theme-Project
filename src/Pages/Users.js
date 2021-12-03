import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/actions/actions';
import axios from 'axios';
import FetchUsers from './FetchUsers';


const Users = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch();

  const loadUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users")
      if (response.status === 200) {
        dispatch(fetchUser(response.data));
      }
    } catch (error) {
      console.log("error", error);
    };
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <FetchUsers/>
    </div>
  );

};

export default Users;
























// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Paper, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, TablePagination } from '@material-ui/core';
// import axios from 'axios';
// import { useState, useEffect } from "react";
// import EditIcon from '@material-ui/icons/Edit'
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUser } from '../redux/actions/actions';
// import { Link } from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: "100vw",
//     backgroundColor: theme.palette.grey[50],
//     paddingTop: theme.spacing(10),
//     paddingRight: theme.spacing(30),
//     marginLeft: '250px',
//   },
// }));

// const Users = () => {

//   const data = useSelector((state) => state.allUsersData.data);
//   const dispatch = useDispatch();

//   const btnstyle = { marginLeft: '15px', color: 'white' }
//   const classes = useStyles();
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(4);



//   const loadUser = async () => {
//     const response = await axios.get("http://localhost:5000/users")
//       .catch((error) => {
//         console.log(error);
//       });
//     dispatch(fetchUser(response.data));
//   };

//   const deleteUser = async id => {
//     const res = await axios.delete(`http://localhost:5000/users/${id}`);
//     loadUser();
//   }

//   useEffect(() => {
//     loadUser();
//   }, []);


//   console.log(data)
//   const onChangePage = (event, nextPge) => {
//     setPage(nextPge);
//   };

//   const onChangeRowsPerPage = (event) => {
//     // setRowsPerPage = (event.target.value);
//   };

//   // const renderList = data.map((user) =>{
//   //   const { name, email, company, phone, website } = user;
//   // })

//   return (
//     <div>
//       <TableContainer component={Paper} className={classes.root}>
//         <div className="buttonstyle">
//           <Link to="/AddUser" color="inherit" style={{ marginLeft: '15px' }}>Add User</Link>
//         </div>
//         {/* <Button type="submit" color="primary" variant="contained" style={btnstyle}>Add User</Button> */}
//         <Table >
//           <TableHead >
//             <TableRow >
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell ><strong>Email</strong></TableCell>
//               <TableCell ><strong>Phone</strong></TableCell>
//               <TableCell ><strong>Company Name</strong></TableCell>
//               <TableCell ><strong>Website</strong></TableCell>
//               <TableCell style={{ textAlign: 'center' }} ><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
//               <TableRow >
//                 <TableCell >{user.name}</TableCell>
//                 <TableCell >{user.email}</TableCell>
//                 <TableCell >{user.phone}</TableCell>
//                 <TableCell >{user.company}</TableCell>
//                 <TableCell >{user.website}</TableCell>

//                 <div className="buttonstyle2">
//                   <Link to={`EditUser/edit/${user.id}`} style={btnstyle} size="small">{(<EditIcon />)}</Link>
//                 </div>

//                 <div className="buttonstyle3">
//                   <Link onClick={() => { if (window.confirm('Are you sure want to Delete.')) { deleteUser(user.id) } }} color="inherit" style={btnstyle} size="small" >{(<DeleteOutlineOutlinedIcon />)}</Link>
//                 </div>
//               </TableRow>
//             ))}
//           </TableBody>
//           <TablePagination rowsPerPageOptions={[4, 8, 12, 16, 20]} count={data.length} rowsPerPage={rowsPerPage} page={page} onChangePage={onChangePage} onChangeRowsPerPage={onChangeRowsPerPage} />
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default Users;

