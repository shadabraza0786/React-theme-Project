import { FETCH_USER, ADD_USER, UPDATE_USER, DELETE_USER } from "./type";

export const fetchUser = (payload) =>({
    type : FETCH_USER,
    payload,
});

export const addUser = (massage) =>({
    type : ADD_USER,
    massage,
});

export const updateUser = (massage , id) =>({
    type : UPDATE_USER,
    massage,
    id,
});

export const deleteUser = (id) =>({
    type: DELETE_USER,
    id,
});

