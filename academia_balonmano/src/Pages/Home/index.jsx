/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Data from '../../assets/data'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import CalendarSide from '../../Components/CalendarSide'
import Layout from "../../Components/Layout"

function Home() {
  const [Items, setItems] = useState(Data)

  return (
        <Layout>
          
          <p className="mb-8 font-bold">Bienvenido/a a Academia Balonmano</p>
          <section className="flex gap-5 flex-wrap w-full max-w-screen-lg">
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
        <CalendarSide />
        
      </Layout>
  )
}
  
  export default Home