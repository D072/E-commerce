import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const CategoryProduct = () => {
    const[categoryProduct,setCategoryProduct] = useState([])
    const params = useParams()  
    const getData = () => {
      axios.get('https://dummyjson.com/products/category/'+params.category)
          .then(function (response) {
            setCategoryProduct(response.data.products);
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
                    categoryProduct.map((el,index) =>{
                        return(
                            <>
                            <Link exact to={'/productDetail/' + el.id}>
                                <div class="py-8 flex flex-wrap md:flex-nowrap">
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col cstm-height">
                                        <img src={el.thumbnail} alt='img' className='pe-3 pb-3'></img>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{el.title}</h2>
                                        <span class="font-semibold title-font text-gray-500 mt-2">{el.brand}</span>
                                        <p class="leading-relaxed">{el.description}</p>
                                        <span>Rating : <b>{el.rating}</b></span> <br></br>
                                        <span>Available Stock : <b>{el.stock}</b></span>
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

export default CategoryProduct
