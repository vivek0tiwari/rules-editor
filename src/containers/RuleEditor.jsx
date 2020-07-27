import React, { Component } from "react";
import "../App.css";
import RuleEditorWrapper from "../components/RuleConditionEditor";
import { connect } from "react-redux";
import {
  addCondition,
  deleteCondition,
  changeValue,
  changeOperator,
  addRule,
  deleteRule,
} from "../redux/actions";
//Actions
// Add New Rule with and/or condition
// Delete a rule
//     Delete a condition
class RuleEditor extends Component {
  constructor(props) {
    super(props);
  }
  handleCreateNewCondition = (ruleId) => {
    this.props.dispatch(addCondition(ruleId));
  };
  handleDeleteCondition = (ruleId, conditionId) => {
    this.props.dispatch(deleteCondition(ruleId, conditionId));
  };
  handleChangeValue = (ruleId, conditionId, key, value) => {
    this.props.dispatch(
      changeValue({ ruleId, conditionId, fieldKey: key, value })
    );
  };
  handleOperatorChange = (ruleId, value) => {
    this.props.dispatch(changeOperator(ruleId, value));
  };
  handleNewRule = () => {
    this.props.dispatch(addRule());
  };
  handleDeleteRule = (ruleId) => {
    this.props.dispatch(deleteRule(ruleId));
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleNewRule}
          style={{ width: "80px", height: "36px" }}
        >
          Add New Rule
        </button>
        <RuleEditorWrapper
          rules={this.props.rules}
          handleCreateNewCondition={this.handleCreateNewCondition}
          handleDeleteCondition={this.handleDeleteCondition}
          handleChangeValue={this.handleChangeValue}
          handleOperatorChange={this.handleOperatorChange}
          handleDeleteRule={this.handleDeleteRule}
        />
      </div>
    );
  }
}
const mapStateToprops = (state) => ({ rules: state });
export default connect(mapStateToprops)(RuleEditor);
