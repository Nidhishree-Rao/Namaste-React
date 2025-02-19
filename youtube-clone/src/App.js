import { Provider } from 'react-redux';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './Utils/store';
import MainContainer from './Components/MainContainer';
import Watchpage from './Components/Watchpage';


const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body />,
  children : [
    {
      path : "/",
      element : <MainContainer />
    },
    {
      path : "watch",
      element : <Watchpage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter}>
      <Body />
      </RouterProvider>
     
      {
        /*Head
        Body
        Main container */
      }
    
    </div>
    </Provider>
  );
}

export default App;
