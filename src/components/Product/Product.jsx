import { Grid } from "@mui/material"
import ProductCard from './ProductCard'
import Products from './product.json'
import { useEffect} from "react"
import { useProduct } from '../../context/ProductContext'

const Product = () => {

    const {products,dispatchProduct} = useProduct()

    const getProducts = ()=>{
        dispatchProduct({type:'SET_PRODUCT',payload:Products})
    }

    useEffect(()=>{
       getProducts()
       // eslint-disable-next-line
    },[])
    return (
        <Grid container spacing={2}>

            {
                products.product.map((prod) => {

                    return <Grid item  key={prod.id}>
                        <ProductCard price={prod.priceAfterDiscount}name={prod.name} brand={prod.brand} prodImg={prod.productImg} mrp={prod.mrp} discount={prod.discount}  />
                    </Grid>

                })
            }

        </Grid>
    )
}

export default Product