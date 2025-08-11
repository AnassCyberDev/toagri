import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
// import { LandingRoute } from './components/LandingRoute/LandingRoute';
import store from './store';
import { PublicRoutes } from './components/PublicRoutes/PublicRoutes';

function App() {
  const ip_address =`http://${process.env.REACT_APP_API_IP_ADDRESS}:8080`
  // const ip_address=''
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PublicRoutes ip_address={ip_address} />
      </Provider>

    </BrowserRouter>
  );
}

export default App;