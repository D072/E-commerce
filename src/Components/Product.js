import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(function (response) {
      setData(response.data.products)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);
  return (
    <>
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="text-gray-600 body-font">
        <div class="container py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
          {
            data.map((el,index)=>{
              return(
                <>
                  <div class="lg:w-1/3 p-1 md:w-1/2 w-full">
                    <Link exact to={'/productDetail/' + el.id} className="block relative h-80 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={el.thumbnail} />
                    </Link>
                    <div class="mt-4 p-4">
                      <h3 class="text-gray-500 text-xl tracking-widest title-font mb-1">{el.category}</h3>
                      <h2 class="text-gray-900 title-font text-xl font-medium">{el.title}</h2>
                      <p class="mt-1 text-xl">${el.price}<span className='ps-3 text-red-600 text-base'>-{el.discountPercentage}%</span></p>
                    </div>
                      <div className='d-flex justify-center btn-group mt-4 p-4'>
                        <Stack spacing={2} direction="row">
                          <Link exact to={'/cart/' + el.id}>
                            <Button variant="contained">Add to Cart</Button>
                          </Link>
                          <Button variant="outlined">Buy now</Button>
                        </Stack>
                    </div>
                  </div>
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

export default Product
