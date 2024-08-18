import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  afterOpenActive: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true, afterOpenActive: false };
    default:
      throw new Error("Action unkonwn");
  }
}

export default function App() {
  const [{ balance, isActive, afterOpenActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: X</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={afterOpenActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={afterOpenActive}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={afterOpenActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={afterOpenActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={afterOpenActive}>
          Close account
        </button>
      </p>
    </div>
  );
}
