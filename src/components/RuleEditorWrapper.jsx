import React from "react";
import "../App.css";
import Select from "react-select";
import ConditionEditor from "./ConditionEditor";
import {
  BOOLEAN_OPERATOR_OPTIONS,
  BOOLEAN_OPERATOR_OPTIONS_MAP,
} from "../constants";

function RuleWrapperEditor(props) {
  const {
    rule,
    ruleId,
    handleCreateNewCondition,
    handleDeleteCondition,
    handleChangeValue,
    handleOperatorChange,
    handleDeleteRule,
  } = props;

  const onBoolenOperatorChange = (value) => {
    const { ruleId } = props;
    handleOperatorChange && handleOperatorChange(ruleId, value.value);
  };
  const onCreateNewCondition = () => {
    const { ruleId } = props;
    handleCreateNewCondition && handleCreateNewCondition(ruleId);
  };
  const onChangeValue = (ruleId, conditionId, key, value) => {
    handleChangeValue && handleChangeValue(ruleId, conditionId, key, value);
  };
  const onDeleteRuleCLick = () => {
    const { ruleId } = props;
    handleDeleteRule && handleDeleteRule(ruleId);
  };
  return (
    <div className="container">
      <div className="operatorContainer">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="ruleItems">
            <Select
              value={BOOLEAN_OPERATOR_OPTIONS_MAP[rule.operator]}
              onChange={onBoolenOperatorChange}
              options={BOOLEAN_OPERATOR_OPTIONS}
            />
          </div>
          <button
            onClick={onDeleteRuleCLick}
            style={{ width: "100px", height: "26px" }}
          >
            Delete Rule
          </button>
        </div>
        {Object.keys(rule.conditions).map((ruleKey, i) => (
          <ConditionEditor
            key={`${ruleId}-${i}`}
            conditionId={ruleKey}
            ruleId={ruleId}
            {...rule.conditions[ruleKey]}
            handleDeleteCondition={handleDeleteCondition}
            handleChangeValue={onChangeValue}
          />
        ))}
        <button
          onClick={onCreateNewCondition}
          style={{ width: "80px", height: "36px" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default RuleWrapperEditor;
