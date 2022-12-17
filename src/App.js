import logo from "./logo.svg";
import "./App.css";
import { useState, useContext, useReducer, createContext } from "react";
import Satu from "./components/Satu";
import { reducer } from "./reducer/reducer";
import Dua from "./components/Dua";
import { useCallback } from "react";

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

//! USE CALLBAK AND USE MEMO
/*
  USE CALLBACK => UNTUK MENCEGAH RENDER DI CHILD COMPONENT YANG TIDAK KITA BUTUHKAN
  USE MEMO => KOMPONEN DI RENDER JIKA ADA PERUBAHAN STATE
*/

export const ThemeContext = createContext();

function App() {
  const [nilai, setNilai] = useState(0);
  const [nilai2, setNilai2] = useState(0);

  /*
      kita panggil useCallback
      rencana akan callback function 
      jika ada perubahan variable nilai saja

      jadi nilai2 ketika ada perubahan data maka di child tidak aakan ter render hanya nilai saja ketika di klik maka akan ter render child nya
  */
  const mulaiHitung = useCallback(() => {
    console.log("di render", nilai);
  }, [nilai]);

  const [state, dispatch] = useReducer(reducer, initialValue);
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
        <Dua mulaiHitung={mulaiHitung} />

        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              setNilai(nilai + 5);
            }}
          >
            nilai usememo callback
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              setNilai2(nilai2 + 5);
            }}
          >
            nilai2 usememo callback
          </button>
        </div>
        <h2>nilai : {nilai} </h2>
        <h2>nilai2 : {nilai2}</h2>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
