export const displayData = (props) => {
  return {
    type: props,
  };
};

export const searchQ = (props) => {
  return {
    type: "search",
    payload: props,
  };
};
