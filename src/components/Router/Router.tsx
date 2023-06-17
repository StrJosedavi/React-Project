import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
    
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path = "/" element={ <Login /> }/> */}
        {/* <Route path = "/home" element={ <Home /> }/> */}
        {/* <Route element={ <NotFound/> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

