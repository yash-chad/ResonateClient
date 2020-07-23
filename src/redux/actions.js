import axios from "axios";
import { GET_PROFILE, GET_EXPENSE, ADD_EXPENSE, DELETE_EXPENSE } from "./types";

export const getProfile = () => (dispatch) => {
  axios
    .get("/api/users/getProfile")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const getExpenses = () => (dispatch) => {
  axios
    .get("/api/expense")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_EXPENSE,
        payload: res.data,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const addExpense = (title, amount, category, callback) => (dispatch) => {
  axios
    .post("/api/expense/add", {
      title: title,
      amount: amount,
      category: category,
    })
    .then((res) => {
      dispatch({
        type: ADD_EXPENSE,
        payload: res.data,
      });
      callback();
    })
    .then((err) => {
      console.log(err);
    });
  console.log(callback);
};

export const deleteExpense = (id, callback) => (dispatch) => {
  const url = "/api/expense/" + id;
  axios.get(url).then((res) => {
    dispatch({
      type: DELETE_EXPENSE,
      payload: res.data,
    });
    callback();
  });
};
