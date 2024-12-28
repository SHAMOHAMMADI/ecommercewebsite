import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
  const { isLogin, handleLogin, handleLogOut } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <Container>
      <div className=" h-screen">
        <div className="border w-full h-full p-4 flex bg-slate-50  flexusername items-center pt-16 flex-col [&>*]:my-4 [&>*]:py-2 [&>*]:rounded [&>*]:shodow-inner [&>*]:border [&>*]:px-2 [&>*]:w-6/12">
          <input
            type="username"
            placeholder="username"
            name="username"
            value={user.username}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
          />
          <Button
            variant="primary"
            onClick={()=>handleLogin(user.username, user.password)}
          >
            {" "}
            ورود به حساب کاربری
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
