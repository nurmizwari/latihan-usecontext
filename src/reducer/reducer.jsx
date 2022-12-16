const initialValue = {
  data: 5,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
