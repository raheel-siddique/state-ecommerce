import Link from "next/link"
import { useState } from "react"
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Navbar({cart, clearCart, decrementQty, incrementQty, deleteCartItem}) {
    const [showDrawer, setShowDrawer]=useState(false)

    const toggleDrawer=()=>{
       setShowDrawer(!showDrawer)
    }

  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
     <Link className="mr-5 hover:text-gray-900" href='/tshirts'> T-Shirts</Link>
     <Link className="mr-5 hover:text-gray-900" href='/hoodies'>Hoodies</Link>
     <Link className="mr-5 hover:text-gray-900" href='/stickers'>Stickers</Link>

     <Link className="mr-5 hover:text-gray-900" href='/mugs'> Mugs</Link>
    </nav>
    <div
    onClick={toggleDrawer}
    className="inline-flex items-center  border-0 py-1 px-3 cursor-pointer focus:outline-none text-4xl  mt-4 md:mt-0">
    <AiOutlineShoppingCart />
    </div>
    
  </div>

{/* side cart  */}
{showDrawer &&
    <div className="sidebar absolute top-16 right-0 h-[100vh] bg-pink-100 p-10 ">
  <h2 className="font-bold text-2xl">Shopping Cart</h2>
  <span onClick={toggleDrawer}  className="absolute top-2 right-2 text-2xl">x</span>


  <ol className="mt-4">

    {cart.length<1 && (
      <>
      <p>No Item In The Cart!! Please add some item for Viewing This..</p>
      </>
    )}
  {cart.length>0 && cart?.map((items)=>{
    const {id, itemName,itemQty, itemPrice}=items
    return(
      <>
      <li className="flex justify-between gap-3 my-3 text-2xl" key={id}>
        
        <span>{itemName && itemName}</span>
        <span className="flex gap-3"> <button onClick={()=>decrementQty(id)}>-</button> {itemQty}<button onClick={()=>incrementQty(id)}>+</button></span>
        <span>{itemPrice && itemPrice}</span>
        <button onClick={()=>deleteCartItem(id)} className="text-red-800 bg-slate-200 font-bold">x</button>



    
    </li>
      </>
    )
  })}
    
    
   
  

  </ol>
  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Checkout</button>
  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3 ml-3" onClick={clearCart}>Clear Cart</button>
 
 </div>
}



</header>

    </div>
    
  )
}

export default Navbar