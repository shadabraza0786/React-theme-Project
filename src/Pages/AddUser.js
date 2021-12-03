import React from "react";
import { Grid, Paper, TextField, Button, Link as Nv } from '@material-ui/core';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/actions";


function AddUser() {
    const paperstyle = { padding: 25, height: '50vh', width: 600, margin: "50px auto" }
    const btnstyle = { marginTop: '20px', marginLeft: '10px' }
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [user, setUser] = useState([]);


    const submitForm = async (e) => {
        e.preventDefault();
        const result = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, company, website
            })
        });

        const data = await result.json();
        dispatch(addUser(data));

        if (data.status === 400 || !data) {
            window.alert("Invalid Details");
        } else {
            window.alert("User Added Sucessfully");
            history.push('/Users');
        }
    }

    return (
        <React.Fragment>
            <form action="" onSubmit={submitForm}>
                <Grid>
                    <Paper elevation={10} style={paperstyle}>
                        <TextField label='Name' name="name" value={user.name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" required />
                        <TextField label="Email" name="email" value={user.email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" style={{ marginLeft: '25px' }} required />
                        <TextField label='Phone' name="phone" value={user.phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Mobile No" style={{ marginTop: '10px' }} required />
                        <TextField label='Company Name' name="company" value={user.company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Your Company Name" style={{ marginLeft: '25px', marginTop: '10px' }} required />
                        <TextField label='Website' name="website" value={user.website} onChange={(e) => setWebsite(e.target.value)} placeholder="Enter Your Website" style={{ marginTop: '10px' }} fullWidth required />
                        <Button type="submit" color="primary" variant="contained" style={btnstyle} >Save</Button>
                        <Button type="submit" color="secondary" variant="contained" style={btnstyle} >Back</Button>
                    </Paper>
                </Grid>
            </form>
        </React.Fragment>
    );
}

export default AddUser;