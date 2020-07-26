import { ConditionActions } from "./actions";

const defalutState = {
  "1": {
    operator: "all",
    conditions: {
      a: {
        fact: "monthly_rental",
        operator: "EQ",
        value: "2000",
        id: "a",
      },
      b: {
        fact: "zip_code",
        operator: "IN",
        value: ["active", "paid-leave"],
        id: "b",
      },
      c: {
        fact: "age",
        operator: "IN",
        value: [22, 20],
        id: "c",
      },
    },
  },
  "2": {
    operator: "all",
    conditions: {
      a: {
        fact: "monthly_rental",
        operator: "EQ",
        value: "2000",
        id: "a",
      },
      b: {
        fact: "zip_code",
        operator: "IN",
        value: ["active", "paid-leave"],
        id: "b",
      },
      c: {
        fact: "age",
        operator: "IN",
        value: [22, 20],
        id: "c",
      },
    },
  },
};

const addCondition = (state, action) => {
  const { data } = action;
  const { conditionId, ruleId, ...rest } = data;

  const rule = state[ruleId];
  const conditions = rule.conditions;
  return {
    ...state,
    [ruleId]: {
      ...rule,
      conditions: {
        ...conditions,
        [conditionId]: {
          ...rest,
        },
      },
    },
  };
};
const removeCondition = (state, action) => {
  const { data } = action;
  const { conditionId, ruleId } = data;

  const rule = state[ruleId];
  const conditions = rule.conditions;
  const { [conditionId]: deleted, ...restCondition } = conditions;
  return {
    ...state,
    [ruleId]: {
      ...rule,
      conditions: {
        ...restCondition,
      },
    },
  };
};

const changeValue = (state, action) => {
  const { data } = action;
  const { ruleId, conditionId, fieldKey, value } = data;

  const rule = state[ruleId];
  const { conditions } = rule;
  const newCondition = {
    ...conditions[conditionId],
    [fieldKey]: value,
  };
  return {
    ...state,
    [ruleId]: {
      ...rule,
      conditions: {
        ...conditions,
        [conditionId]: {
          ...newCondition,
        },
      },
    },
  };
};

const changeOperator = (state, action) => {
  const { data } = action;
  const { ruleId, value } = data;

  const rule = state[ruleId];
  return {
    ...state,
    [ruleId]: {
      ...rule,
      operator: value,
    },
  };
};
const rules = (state = defalutState, action) => {
  const { type } = action;
  switch (type) {
    case ConditionActions.ADD_CONDITITON:
      return addCondition(state, action);
    case ConditionActions.DELETE_CONDITION:
      return removeCondition(state, action);
    case ConditionActions.CHANGE_VALUE:
      return changeValue(state, action);
    case ConditionActions.CHANGE_OPERATOR:
      return changeOperator(state, action);
    default:
      return state;
  }
};
export default rules;
