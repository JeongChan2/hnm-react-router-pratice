import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import NavBar from './component/NavBar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 유저는 메뉴와 상품들을 볼 수 있다.
// 2. 유저는 로그인을 할 수 있다.
// 3. 유저는 상품디테일을 보기 위해 로그인을 해야한다.
// 4. 로그인한 유저는 상품디테일정보를 볼 수 있다.
// 5. 유저는 상품을 검색할 수 있다.
// 6. 유저는 로그아웃할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false) // 로그인 여부

  useEffect(() => {
    console.log(authenticate)
  },[authenticate])

  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
