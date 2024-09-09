const redux = require('redux');

// это типа то где происходят изменения
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }
  return state;
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
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });