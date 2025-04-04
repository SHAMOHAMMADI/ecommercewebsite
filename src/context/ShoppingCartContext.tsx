import { createContext, SetStateAction, useContext, useEffect, useState } from "react";
// import { SiEtihadairways } from "react-icons/si";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IShoppingCartProvider {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}
interface IShoppingCartContext {
  cartItems: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handleLogOut: () => void;
  handleLogin: (usernmae:string , password: string)=>void;
  
}
// export const ShoppingCartContext = createContext<IShoppingCartContext>({
//     cartItems : []
// })

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  // const [cartItems, setCartItems] = useState<CartItem[]>([])
  //for store in the localstorage
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );

  // localStorage.setItem("name" , "mustafa")
  // const n = localStorage.getItem("name")
  // console.log(n)

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id != id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id && item.qty >= 1) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id != id)
    );
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate()

  const handleLogin = (username:string , password:string)=>{
    login(username , password).finally(()=>{
        const token = "ashuighasgiskhvfsdvashzdhfkzsd"
        localStorage.setItem("token",token)
        setIsLogin(true);
        navigate("/")
         
    })
  };
  const handleLogOut = () => {
    setIsLogin(false);
    navigate("/login")
    localStorage.removeItem("token")
  };
  
  useEffect(()=>{
   const token = localStorage.getItem("token")
   if(token){
    setIsLogin(true)
   }
  },[])


 



  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        handleLogin,
        handleLogOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
