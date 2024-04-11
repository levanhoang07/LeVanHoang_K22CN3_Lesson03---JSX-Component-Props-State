import './App.css';
import LVH_ClassComp from './component/LVH_ClassComp';
import LVH_FuncDemo from './component/LVH_FuncDemo';

function App() {
  //khai báo  biến đối tượng
  const users={
    userName:"K22CN3",
    password:"123456@",
    fistName:"Lê Văn ",
    lastName:"Hoàng"
  }
  //khai báo đối tượng 
  function formatName(user){
    return<h2>Xin Chào, {user.fistName}{user.lastName}</h2>
  }
  return (
    <div className="App">
      {/* bieu thuc JSX */}
      <div>
        <p>FullName:{users.fistName}{users.lastName}</p>
        {formatName(users)};
      </div>
      {/*sử dụng funcion component  */}
      <div>
        <LVH_FuncDemo/>
       {/*Sử dụng Func_Comp có Prop*/}
       <LVH_FuncDemo userName="LVH" fullName="Lê Văn Hoàng" age="20"/>
      </div>
      {/*sử dụng calss component  */}
      <div>
        {/*Dùng không sử dụng Props */}
        <LVH_ClassComp/>
        {/* su dung props*/}
        <LVH_ClassComp company="Fit-NTU-K22CN3" coure="ReactJs"/>
        <LVH_ClassComp company="Fit-NTU-K22CN1" coure="ReactJs1"/>
        <LVH_ClassComp company="Fit-NTU-K22CN2" coure="ReactJs2"/>
        <LVH_ClassComp company="Fit-NTU-K22CN4" coure="ReactJs3"/>
      </div>
    </div>
  );
}

export default App;
