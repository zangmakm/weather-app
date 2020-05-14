export const CHANGE_INPUT = "CHANGE_INPUT";
export const HANDLE_UNIT = "HANDLE_UNIT";

export const change_input_value = (input) => ({
  type: CHANGE_INPUT,
  payload: { input },
});

export const handle_unit = () => ({
  type: HANDLE_UNIT,
});
