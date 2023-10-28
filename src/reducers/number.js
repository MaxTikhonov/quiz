const users = (state = [], action) => {
 switch (action.type) {
  case "SWITCH_DISCIPLINE":
   console.log('we added new user');
   console.log(state);
   return [
    ...state,
    {
     number: action.number
    }
   ]
  default:
   return state;
 }
}

export default users;