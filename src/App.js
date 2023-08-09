import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';
import Navigation from './routes/navigation/navigation.component.jsx';
import Shop from './routes/shop/shop';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<CheckOut/>} />
      </Route>
    </Routes>
  );
};

export default App;
