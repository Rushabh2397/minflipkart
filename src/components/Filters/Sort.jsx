import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { useProduct } from '../../context/ProductContext'



const Sort = ({radioValue,setRadioValue}) => {
    const {  dispatchProduct } = useProduct()
    

    const sortProducts = (key) => {
        setRadioValue(key)
        key === 'high' ? dispatchProduct({ type: 'HIGH-TO-LOW' }) : dispatchProduct({ type: 'LOW-TO-HIGH' })
    }



    return (
        <Box>
            <Typography variant="h5" >Sort</Typography>
            <hr></hr>
            <Box>
                <RadioGroup
                    aria-label="gender"
                    name="radio-buttons-group"
                    onChange={(e, value) => { sortProducts(value) }}
                >
                    <FormControlLabel  value="high" checked={'high'===radioValue} control={<Radio />} label="High-to-Low" />
                    <FormControlLabel value="low" checked={'low'===radioValue} control={<Radio />} label="Low-to-High" />
                </RadioGroup>
            </Box>
        </Box>
    )
}

export default Sort