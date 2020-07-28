### `Rule Editor UI with react and redux`

This project contain simple UI for Rule editor with minimal features listed below.

## Feature

- Add/Edit Conditions
- Add/Edit Rules
- Support for AND/OR operators
- Currently supporting for below operators
1. EQ: "=",
2. LT: "<",
3. GT: ">",
4. LTE: "<=",
5. GTE: ">=",
6. IN: "Contains",

Data structure of state :

```javascript
{
"1": {
        operator: "all",
        conditions: {
              a: {
                  fact: "monthly_rental",
                  operator: "EQ",
                  value: "2000",
                  id: "a",
              },
        },
    },
}
```

Todos:
Validations

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```

```

```

```
