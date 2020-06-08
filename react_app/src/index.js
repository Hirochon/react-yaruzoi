import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';


// ステートの値
let state_values = {
	counter: 0,
	message: "COUNTER"
}

// レデューサー
function counter(state = state_values, action) {
	switch (action.type){
		case 'INCREMENT':
			return {
				counter: state.counter + 1,
				message: "INCREMENT"
			};
		case 'DECREMENT':
			return {
				counter: state.counter - 1,
				message: "DECREMENT"
			};
		default:
			return state;
	}
}

// ストアの作成
let store = createStore(counter);

// 表示をレンダリング
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
