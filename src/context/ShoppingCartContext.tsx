import {createContext, useContext, useState} from "react"


interface IShoppingCartProvider{
    children : React.ReactNode
}

interface CartItem {
    id: number , 
    qty: number
}
interface IShoppingCartContext{
    cartItems : CartItem[],
    handleIncreaseProductQty:(id:number)=>void
}
// export const ShoppingCartContext = createContext<IShoppingCartContext>({
//     cartItems : []
// })

export const ShoppingCartContext = createContext({} as IShoppingCartContext)

export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
} 

export function ShoppingCartProvider({children}:IShoppingCartProvider){

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItems)=>{
            let selectedItem = currentItems.find((item)=>item.id == id)
            if(selectedItem == null){
                return [...currentItems , {id: id ,qty: 1}]
            }else {
                return currentItems.map((item)=>{
                    if(item.id == id){
                        return {...item , qty: item.qty + 1}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    return (
        <ShoppingCartContext.Provider value={{cartItems , handleIncreaseProductQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}