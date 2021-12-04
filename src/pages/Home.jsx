import { Grid } from "@mui/material"
import Header  from '../components/Header/Header'
import Product from '../components/Product/Product'
import Filter from '../components/Filters/Filter'

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
               <Header/>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={2}>
                  <Filter/>
                </Grid>
                <Grid item xs={10} >
                    <Product/>
                </Grid>

            </Grid>

        </Grid>
    )


}

export default Home