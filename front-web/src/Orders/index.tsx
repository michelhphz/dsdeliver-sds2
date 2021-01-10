import { useEffect, useState } from 'react'
import { fetchProduct } from '../api'
import OrdersLocation from './OrderLocation'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { OrderLocationdata, Product } from './types'

function Orders() {
    const [products, setProducts] = useState<Product[]>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()

    useEffect(() => {
        fetchProduct()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [])

    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products} />
            <OrdersLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>        
    )
}

export default Orders