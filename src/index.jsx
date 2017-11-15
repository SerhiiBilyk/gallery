import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './components/header/header.jsx';
import Main from './routes.jsx';

import {createStore} from 'redux';
import { combineReducers } from 'redux';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
console.log('createStore', createStore)

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}
const ADD_TO_CART = 'ADD_TO_CART';
const cartReducer = function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    default:
      return state;
  }
}

function addToCart(product,quantity,unitCost){
  return{
    type:ADD_TO_CART,
    payload:{product,quantity,unitCost}
  }
}
const allReducers={
  cart:cartReducer
  //product:productReducer
}
const rootReducer=combineReducers(allReducers)
const store = createStore(rootReducer);
console.log('before',store.getState())
store.dispatch(addToCart('Ukrainian salo 5kg',5,1000))

console.log('after',store.getState())
const productReducer = (state = 0, action) => {


}
/**
 * GOOD TUTORIAL TO BEGIN
 * https://www.sitepoint.com/getting-started-redux/
 */


store.subscribe(()=>{
  console.log(store.getState())
})
document.addEventListener('click',e=>{
  store.dispatch({type:'increment'})
})
console.log('state after',store.getState())


function root(nodeID) {
  const element = document.createElement('div');
  element.id = nodeID;
  document.body.appendChild(element);
  //  element.style.overflowX='hidden';
  return element;

};

var element = root('root');

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Main/>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <App/>
  </Router>
), element);

function images() {
  console.log('images')
  var img = [].slice.call(document.querySelectorAll('[data-lazy]'));
  img.forEach((elem, index) => {
    elem.onload = function() {}
  })
}

var result = images();
