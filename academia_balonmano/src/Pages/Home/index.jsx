/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import CalendarSide from '../../Components/CalendarSide'
import CategoryTag from '../../Components/CategoryTag'
import Layout from "../../Components/Layout"

function Home() {
  const context = useContext(CalendarioContext)

  const renderView = () => {
    const itemsToRender = context.searchByTitle.length > 0  || context.searchByCategories.length > 0? context.filteredItems : context.items
    if (itemsToRender.length > 0) {
      return (
        itemsToRender.map(item => (<Card key={item.id} data={item}/>))
      )
    } else {
      return (
        <p>Tu búsqueda &quot;{context.searchByTitle}&quot; no dio resultados. Por favor, inténtalo otra vez.</p>
      )
    }
  }

  return (
        <Layout>
          
          <p className="mb-8 font-bold text-4xl">Academia Balonmano</p>

          <input 
            type="text" 
            placeholder="Busca tu ejercicio" 
            className="rounded-lg border border-black w-9/12 p-4 mb-4 focus: outline-none"
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />

          <section className="flex gap-2 py-4 flex-wrap">
            {context.categories.map(category => (<CategoryTag key={category} category={category}/>))}
          </section>
          
          <section className="flex gap-5 flex-wrap w-full max-w-screen-lg">
            {renderView()}
          </section>
        <ProductDetail />
        <CalendarSide />
        
      </Layout>
  )
}
  
  export default Home