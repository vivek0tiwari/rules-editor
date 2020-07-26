import React from "react";
import "../App.css";
import RuleWrapperEditor from "./RuleEditorWrapper";

function RuleConditionEditor(props) {
  const { rules } = props;
  return (
    <div>
      {Object.keys(rules).map((conditionKey) => {
        const rule = rules[conditionKey];
        return (
          <div key={conditionKey}>
            <RuleWrapperEditor {...props} rule={rule} ruleId={conditionKey} />
          </div>
        );
      })}
    </div>
  );
}

export default RuleConditionEditor;
