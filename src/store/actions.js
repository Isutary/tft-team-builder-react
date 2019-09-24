export const add = (payload) => {
  return {
    type: "ADD",
    payload: payload
  }
}

export const remove = (payload) => {
  return {
    type: "REMOVE",
    payload: payload
  }
}

export const reset = () => {
  return {
    type: "RESET"
  }
}