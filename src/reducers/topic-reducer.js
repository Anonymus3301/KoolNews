const initialState = "World";

//Reducer
const changeData = (state = initialState, action) => {
  if (action.type !== "@@INIT") state = action.type;

  return state;
};
export default changeData;
