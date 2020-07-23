import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteExpense } from "../redux/actions";

class Expense extends Component {
  render() {
    const { expense } = this.props;

    return (
      <tr className="px-5 mx-2">
        <th scope="row">{this.props.counter}</th>
        <td> {expense.category}</td>
        <td>{expense.title}</td>
        <td>{expense.date}</td>
        <td>$ {expense.amount}</td>
        <td>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() =>
              this.props.deleteExpense(expense._id, this.props.fetchExpenses)
            }
          ></i>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.data.expenses,
});
const mapActionToProps = { deleteExpense };

Expense.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Expense);
