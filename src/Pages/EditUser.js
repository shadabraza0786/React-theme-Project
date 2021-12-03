import React from "react";
import { Grid, Paper, TextField, Button, Link as Nv } from '@material-ui/core';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/actions"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";


function EditUser() {
    const paperstyle = { padding: '25px', height: '50vh', width: '600px', margin: "50px auto" }
    const btnstyle = { marginTop: '20px', marginLeft: '10px' }
    let history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        compay: "",
        website: ""
    });

    const { name, email, phone, company, website } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, []);


    const onSubmit = async e => {
        e.preventDefault();
        const result = await axios.put(`http://localhost:5000/users/${id}`, user);
        history.push("/Users");

        
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(result.data);
        // console.log("=======>", result.data);
    }

    return (
        <React.Fragment>
            <form onSubmit={(e) => { if (window.confirm('Are you sure want to Update.')) { onSubmit(e) } }}>
                <Grid>
                    <Paper elevation={10} style={paperstyle}>
                        <TextField label='Name' name="name" value={name} onChange={e => onInputChange(e)} placeholder="Enter Your Name" required />
                        <TextField label="Email" name="email" value={email} onChange={e => onInputChange(e)} placeholder="Enter Your Email" style={{ marginLeft: '25px' }} required />
                        <TextField label='Phone' name="phone" value={phone} onChange={e => onInputChange(e)} placeholder="Enter Your Mobile No" style={{ marginTop: '10px' }} required />
                        <TextField  name="company" value={company} onChange={e => onInputChange(e)} placeholder="Enter Company Name" style={{ marginLeft: '25px', marginTop: '25px' }} required />
                        <TextField label='Website' name="website" value={website} onChange={e => onInputChange(e)} placeholder="Enter Your Website" style={{ marginTop: '10px' }} fullWidth required />
                        <Button type="submit" color="primary" variant="contained" style={btnstyle} >Update</Button>
                        <Button type="submit" color="secondary" variant="contained" style={btnstyle} >Back</Button>
                    </Paper>
                </Grid>
            </form>
        </React.Fragment>
    );
}

export default EditUser;









