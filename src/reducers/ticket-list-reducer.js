export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      const { names, location, description, timeOpened, id } = action;
      return [
        ...state,
        {
          names : names,
          location : location,
          description : description,
          timeOpened : timeOpened,
          id : id
        }
      ]
    default:
      return state;
  }
}
