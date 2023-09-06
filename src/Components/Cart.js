import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Cart = () => {
  const[cartProduct,setCartProduct] = useState([])
  const params = useParams()  
  const getData = () => {
    axios.get('https://dummyjson.com/carts/'+params.cartID)
        .then(function (response) {
          setCartProduct(response.data.products)
          console.log(response.data.products);
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  useEffect(() =>{
    getData();
  },[params])
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                {
                  cartProduct.map((el) =>{
                    return(
                      <>
                        <Link exact to={'/productDetail/' + el.id}>
                            <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col cstm-height">
                                    {/* <img src={el.thumbnail} alt='img' className='pe-3 pb-3'></img> */}
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{el.title}</h2>
                                    <span class="font-semibold title-font text-gray-500 mt-2"></span>
                                    <p class="leading-relaxed">{el.price}</p>
                                    <span>quantity : <b>{el.quantity}</b></span> <br></br>
                                    <span>Available Stock : <b>{el.total}</b></span>
                                </div>
                            </div>
                        </Link>
                      </>
                    )
                  })
                }
                </div>
            </div>
        </section> 
    </>
  )
}

export default Cart
