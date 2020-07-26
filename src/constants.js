export const OPERATORS = {
  EQ: "=",
  LT: "<",
  GT: ">",
  LTE: "<=",
  GTE: ">=",
  IN: "Contains",
};
export const QUERY_FILEDS = [
  { label: "Monthly Rental", value: "monthly_rental" },
  { label: "Age", value: "age" },
  { label: "ZIP Code", value: "zip_code" },
];
export const BOOLEAN_OPERATOR_OPTIONS = [
  { value: "any", label: "OR" },
  { value: "all", label: "AND" },
];
const optionMapper = (map, obj) => {
  map[obj.value] = obj;
  return map;
};

export const BOOLEAN_OPERATOR_OPTIONS_MAP = BOOLEAN_OPERATOR_OPTIONS.reduce(
  optionMapper,
  {}
);

export const QUERY_MAP = QUERY_FILEDS.reduce(optionMapper, {});

export const OPERATORS_FOR_DOWN = Object.keys(OPERATORS).map((string) => ({
  label: OPERATORS[string],
  value: string,
}));
export const OPERATOR_MAP = OPERATORS_FOR_DOWN.reduce(optionMapper, {});

const condition = {
  "1": {
    operator: "all",
    conditions: [
      {
        fact: "account-information",
        operator: "equal",
        value: "microsoft",
        path: ".company", // access the 'company' property of "account-information"
      },
      {
        fact: "account-information",
        operator: "in",
        value: ["active", "paid-leave"], // 'status' can be active or paid-leave
        path: ".status", // access the 'status' property of "account-information"
      },
      {
        fact: "account-information",
        operator: "contains", // the 'ptoDaysTaken' property (an array) must contain '2016-12-25'
        value: "2016-12-25",
        path: ".ptoDaysTaken", // access the 'ptoDaysTaken' property of "account-information"
      },
    ],
  },
  "2": {
    operator: "all",
    conditions: [
      {
        fact: "account-information",
        operator: "equal",
        value: "microsoft",
        path: ".company", // access the 'company' property of "account-information"
      },
      {
        fact: "account-information",
        operator: "in",
        value: ["active", "paid-leave"], // 'status' can be active or paid-leave
        path: ".status", // access the 'status' property of "account-information"
      },
      {
        fact: "account-information",
        operator: "contains", // the 'ptoDaysTaken' property (an array) must contain '2016-12-25'
        value: "2016-12-25",
        path: ".ptoDaysTaken", // access the 'ptoDaysTaken' property of "account-information"
      },
    ],
  },
};
