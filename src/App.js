import logo from "./logo.svg";
import "./App.css";
import { useState, useContext, useReducer, createContext } from "react";
import Satu from "./components/Satu";
import { reducer } from "./reducer/reducer";

const initialValue = {
  data: 5,
};

// INI REDUCERNYA KITA PISAHKAN SAJA GAK PAPA
// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "tambah":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const ThemeContext = createContext();

function App() {
  const [nilai, setNilai] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialValue);
  // const context = useContext(ThemeContext);
  console.log(state, "state global nih");
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <button
          class="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "tambah",
              payload: state.data + 20,
            });
          }}
        >
          Tambah
        </button>
        <Satu />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
