const redux = require('redux');

// это типа то где происходят изменения
const counterReducer = (state = {counter: 0}, action) => {
  return {
    counter: state.counter + 1
  }
}

// сам state
const store = redux.createStore(counterReducer);

// эта функция срабатывает при dispatch
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('state => ', latestState);
}

// подписываем функцию которая будет срабатывать при dispatch
// subscribe - подписаться
store.subscribe(counterSubscriber);

// это как-бы действие
store.dispatch({type: 'increment'});