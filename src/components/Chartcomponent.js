import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExpenses } from "../redux/actions";

class Chartcomponent extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }
  render() {
    let chartData = [["Awesome", "4"]];
    this.props.expenses.forEach((element) => {
      const curr = [];
      curr.push(element.title);
      curr.push(element.amount);
      chartData.push(curr);
    });
    console.log(chartData);
    return (
      <div>
        {chartData.length > 1 ? (
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
              title: "My Daily Activities",
              // Just add this option
              is3D: true,
            }}
            rootProps={{ "data-testid": "2" }}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.data.expenses,
});
const mapActionToProps = { getExpenses };

Chartcomponent.propTypes = {
  expenses: PropTypes.array.isRequired,
  getExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Chartcomponent);
