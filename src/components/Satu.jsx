import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Satu() {
  //   console.log(props);
  const context = useContext(ThemeContext);
  console.log(context, "dari component satu");
  return (
    <div>
      <h5>nilai = {context.state.data}</h5>
      <div class="d-grid gap-2">
        <button
          type="button"
          name=""
          id=""
          class="btn btn-primary"
          onClick={() => {
            context.dispatch({
              type: "tambah",
              payload: context.state.data + 10,
            });
          }}
        >
          Tambah
        </button>
      </div>
    </div>
  );
}
