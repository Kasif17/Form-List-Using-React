import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tableDataReducer from './features/tableDataSlice';
import App from './App';
import '../src/index.css';

const store = configureStore({
  reducer: {
    tableData: tableDataReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);