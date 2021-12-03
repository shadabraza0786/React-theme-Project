import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, TablePagination } from '@material-ui/core';
import { useState, useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from '../redux/actions/actions';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100vw",
        backgroundColor: theme.palette.grey[50],
        paddingTop: theme.spacing(10),
        paddingRight: theme.spacing(30),
        marginLeft: '250px',
    },
}));

const FetchUsers = () => {
    const data = useSelector((state) => state.allUsersData.data);

    const btnstyle = { marginLeft: '15px', color: 'white' }
    const classes = useStyles();
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    // const deleteUser = async id => {
    //     if (window.confirm('Are you sure want to Delete.')){
    //          dispatch(deleteUser(id))
    //     }
    //     const res = await axios.delete(`http://localhost:5000/users/${id}`);
    //     loadUser();
    // }

    
  const loadUser = async () => {
    const response = await axios.get("http://localhost:5000/users")
      .catch((error) => {
        console.log(error);
      });
    dispatch(fetchUser(response.data));
  };

  const deleteUser = async id => {
    const res = await axios.delete(`http://localhost:5000/users/${id}`);
    loadUser();
  }

  useEffect(() => {
    loadUser();
  }, []);

    const onChangePage = (event, nextPge) => {
        setPage(nextPge);
    };

    const onChangeRowsPerPage = (event) => {
        setRowsPerPage = (event.target.value);
    };

    return (
        <React.Fragment>
            <TableContainer component={Paper} className={classes.root}>
                <div className="buttonstyle">
                    <Link to="/AddUser" color="inherit" style={{ marginLeft: '15px' }}>Add User</Link>
                </div>
                <Table >
                    <TableHead >
                        <TableRow >
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell ><strong>Email</strong></TableCell>
                            <TableCell ><strong>Phone</strong></TableCell>
                            <TableCell ><strong>Company Name</strong></TableCell>
                            <TableCell ><strong>Website</strong></TableCell>
                            <TableCell style={{ textAlign: 'center' }} ><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                            <TableRow key={user}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.company}</TableCell>
                                <TableCell>{user.website}</TableCell>

                                <div className="buttonstyle2">
                                    <Link to={`EditUser/edit/${user.id}`} style={btnstyle} size="small">{(<EditIcon />)}</Link>
                                </div>

                                <div className="buttonstyle3">
                                <Link onClick={() => { if (window.confirm('Are you sure want to Delete.')) { deleteUser(user.id) } }} color="inherit" style={btnstyle} size="small" >{(<DeleteOutlineOutlinedIcon />)}</Link>
                                </div>

                            </TableRow>
                        ))}
                    </TableBody>

                    <TablePagination rowsPerPageOptions={[4, 8, 12, 16, 20]} count={data.length} rowsPerPage={rowsPerPage} page={page} onChangePage={onChangePage} onChangeRowsPerPage={onChangeRowsPerPage} />
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}
export default FetchUsers;




