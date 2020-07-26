import { v4 as uuidv4 } from "uuid";
export const addCondition = (ruleId) => {
  const conditionId = uuidv4();
  return {
    type: "ADD_CONDITITON",
    data: {
      conditionId: conditionId,
      ruleId: ruleId,
      fact: null,
      operator: null,
      value: null,
    },
  };
};
export const deleteCondition = (ruleId, conditionId) => ({
  type: "DELETE_CONDITION",
  data: { ruleId, conditionId },
});
export const changeValue = ({ ruleId, conditionId, fieldKey, value }) => ({
  type: "CHANGE_VALUE",
  data: { ruleId, conditionId, fieldKey, value },
});
export const changeOperator = (ruleId, value) => ({
  type: "CHANGE_OPERATOR",
  data: { ruleId, value },
});
export const deleteRule = (ruleId) => ({
  type: "DELETE_RULE",
  data: { ruleId },
});
export const addRule = () => {
  const ruleId = uuidv4();
  const conditionId = uuidv4();
  return {
    type: "ADD_RULE",
    data: {
      conditionId: conditionId,
      ruleId: ruleId,
      fact: null,
      operator: null,
      value: null,
    },
  };
};
export const ConditionActions = {
  ADD_CONDITITON: "ADD_CONDITITON",
  DELETE_CONDITION: "DELETE_CONDITION",
  CHANGE_VALUE: "CHANGE_VALUE",
  CHANGE_OPERATOR: "CHANGE_OPERATOR",
  DELETE_RULE: "DELETE_RULE",
  ADD_RULE: "ADD_RULE",
};
