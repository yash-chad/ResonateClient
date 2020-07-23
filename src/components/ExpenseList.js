import React, { Component } from "react";
import Expense from "./Expense";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExpenses, addExpense } from "../redux/actions";
import { Table } from "react-bootstrap";
import Chart from "./Chartcomponent";
// import { Link } from "react-router-dom";

class ExpenseList extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addExpense(
      e.target.title.value,
      e.target.amount.value,
      e.target.category.value,
      this.props.getExpenses
    );
    e.target.title.value = "";
    e.target.amount.value = "";
    e.target.category.value = "";
  };

  render() {
    let counter = 0;
    let total = 0;
    return (
      <div>
        <div className="d-flex justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div className=" ml-5 form-group row">
              <div className="form-group row">
                <div className="col-xs-2 mx-2">
                  <h4>
                    <label>Category</label>
                  </h4>
                  <input className="form-control" id="category" type="text" />
                </div>
                <div className="col-xs-3 mx-2">
                  <h4>
                    <label>Title</label>
                  </h4>
                  <input className="form-control" id="title" type="text" />
                </div>
                <div className="col-xs-4 mx-2">
                  <h4>
                    <label>Amount</label>
                  </h4>
                  <input className="form-control" id="amount" type="text" />
                </div>
              </div>

              <br />
              <button type="submit" className="btn btn-primary mx-2">
                Add Expense!!
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <Chart />
        </div>

        {this.props.expenses.length === 0 ? (
          <div>Wohoo you do not have any expenses!!</div>
        ) : (
          <div className="d-flex justify-content-center">
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col" className="px-5 mx-2">
                      #
                    </th>
                    <th scope="col">Category</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>

                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.expenses.map((item) => {
                    counter++;
                    total += item.amount;
                    return (
                      <Expense
                        expense={item}
                        fetchExpenses={this.props.getExpenses}
                        key={item._id}
                        counter={counter}
                      />
                    );
                  })}
                </tbody>
                <thead>
                  <tr>
                    {/* <th scope="col" className="px-5 mx-2">
                      #
                    </th> */}
                    <th colSpan="3" scope="col">
                      Total
                    </th>

                    <th colSpan="3" scope="col">
                      {total}
                    </th>
                  </tr>
                </thead>
              </Table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.data.expenses,
});
const mapActionToProps = { getExpenses, addExpense };

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  getExpenses: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(ExpenseList);
