import { CartCounter } from "@/shopping-cart"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Shopping Cart",
  description: "Counter page",
}

const CounterPage = () => {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carrito</span>
      <CartCounter value={20}/>
    </div>
  )
}

export default CounterPage