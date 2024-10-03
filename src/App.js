import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className='min-h-12'>
        <Header />
        <Main />
      </div>
    </Provider>

  );

}

export default App;
