/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Data from '../../assets/data'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [Items, setItems] = useState(Data)

  return (
        <>
          
          <p className="mb-8 font-bold">Bienvenido/a a Academia Balonmano</p>
          <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          Items?.map(item => 
          (
            <Card
              key={item.id}
              data={item}
            />
          ))
        }

        
        </section>
        <ProductDetail />
        
      </>
  )
}
  
  export default Home