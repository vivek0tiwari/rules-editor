import React from "react";
import "../App.css";
import Select from "react-select";
import TextInput from "./TextInput";
import {
  OPERATORS_FOR_DOWN,
  QUERY_FILEDS,
  OPERATOR_MAP,
  QUERY_MAP,
} from "../constants";
// const valueFieldRendere = (operator, props) => {
//   return ;
// };

const ConditionEditor = (props) => {
  const {
    handleChangeValue,
    handleDeleteCondition,
    value,
    fact,
    operator,
    conditionId,
    ruleId,
  } = props;
  const onFieldChange = (value) => {
    handleChangeValue &&
      handleChangeValue(ruleId, conditionId, "fact", value.value);
  };
  const onOperatorChange = (value) => {
    handleChangeValue &&
      handleChangeValue(ruleId, conditionId, "operator", value.value);
  };
  const onValueChange = (e) => {
    handleChangeValue &&
      handleChangeValue(ruleId, conditionId, "value", e.target.value);
  };
  const onDeleteCondition = () => {
    handleDeleteCondition && handleDeleteCondition(ruleId, conditionId);
  };
  return (
    <div className="ruleContainer">
      <div className="ruleItems">
        <Select
          value={QUERY_MAP[fact]}
          onChange={onFieldChange}
          options={QUERY_FILEDS}
        />
      </div>
      <div className="ruleItems">
        <Select
          value={OPERATOR_MAP[operator]}
          onChange={onOperatorChange}
          options={OPERATORS_FOR_DOWN}
        />
      </div>
      <div className="ruleItems">
        <TextInput value={value} onChange={onValueChange} />
      </div>
      <div className="ruleItems">
        <button
          onClick={onDeleteCondition}
          style={{ width: "80px", height: "36px" }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default ConditionEditor;
