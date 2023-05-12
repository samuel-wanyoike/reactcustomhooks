
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Cat } from './components/cats';
import { useToggle } from './useToggle';
import { useCount } from './useCount';

function App() {

  //using two custom hooks
 const [isVisible, toggle] = useToggle();

 const {count, increase, decrease, reset} = useCount();

 //creating a new client for react query
 const client = new QueryClient();

  return (
    <div className="App">

      {/* for the useToggle hook */}
      <div>
        <h1>TOGGLE APP</h1>    
        <button onClick={toggle}>
          {isVisible? 'Hide' : 'Show'}
        </button>
        {isVisible && <h2>Hidden Text</h2>}
      </div>

      {/* for the useGetCat hook */}

      <QueryClientProvider client={client}>
        <div>
          <h1>CAT FACT APP</h1>
          <Cat />
        </div>
      </QueryClientProvider>

      {/* for the useCount hook */}

      <div>
        <h1>COUNTER APP</h1>
        {count}
        <button onClick={increase}>Incease</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
      
    </div>

  );
}

export default App;
