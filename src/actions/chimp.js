import axios from 'axios';

export function add_subscribed(subscribed) {
  return {
    type: 'ADD_SUBSCRIBED',
    subscribed
  };
}

export function subscribe(email) {
  return (dispatch) => {
    console.log(email);
  }
}
