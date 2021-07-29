const initialState = "Trending";

//Reducer
const changeData = (state = initialState, action) => {
  state = action.type;

  return state;
};
export default changeData;
