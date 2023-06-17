import { Input } from '../Input'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
    
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path = "/" element={ <Login /> }/> */}
        {/* <Route path = "/home" element={ <Home /> }/> */}
        {/* <Route element={ <NotFound/> } /> */}

        {/* Teste */}
        <Route path = "/" element={ <Input /> }/>
      </Routes>
    </BrowserRouter>
  );
}

