import { Box} from "@mui/material"
import Sort from './Sort'
import Filters from './Filters'
import { useState } from "react"
import { useProduct } from '../../context/ProductContext'


const Filter = () => {
    const { dispatchProduct } = useProduct()
    const [radioValue,setRadioValue]= useState("")
    const [filterObj, setFilterObj] = useState({
        sizes: [],
        brands: [],
        ideal: []
    })

    const clearAll = () => {
        setFilterObj({
            sizes: [],
            brands: [],
            ideal: []
        })
        setRadioValue("")
        dispatchProduct({ type: 'CLEAR_ALL' })
    }

    return (
        <Box

            sx={{
                border: '1px solid black'
            }}
        >

            <Box onClick={clearAll} sx={{cursor:'pointer'}} >Clear All</Box>
            <Sort radioValue={radioValue} setRadioValue={setRadioValue} />
            <hr></hr>
            <Filters filterObj={filterObj} setFilterObj={setFilterObj} />

        </Box>
    )
}

export default Filter