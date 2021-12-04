import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material"
import { useProduct } from '../../context/ProductContext'

const Filters = ({filterObj,setFilterObj}) => {

    const { dispatchProduct } = useProduct()

    


    const applyFilter = ({ key, value }) => {
        if (filterObj[key].includes(value)) {
            let newFilterObj = {
                sizes: key === 'sizes' ? filterObj[key].filter((ele => ele !== value)) : filterObj['sizes'],
                brands: key === 'brands' ? filterObj[key].filter((ele => ele !== value)) : filterObj['brands'],
                ideal: key === 'ideal' ? filterObj[key].filter((ele => ele !== value)) : filterObj['ideal']
            }
            setFilterObj(newFilterObj)
            dispatchProduct({ type: 'FILTER', payload: newFilterObj })
        } else {
            let newFilterObj = {
                sizes: key === 'sizes' ? [value, ...filterObj[key]] : filterObj['sizes'],
                brands: key === 'brands' ? [value, ...filterObj[key]] : filterObj['brands'],
                ideal: key === 'ideal' ? [value, ...filterObj[key]] : filterObj['ideal']
            }
            setFilterObj(newFilterObj)
            dispatchProduct({ type: 'FILTER', payload: newFilterObj })
        }

    }



    return (
        <Box>
            {console.log("filter", filterObj)}
            <Typography variant="h5" >Filter</Typography>
            <hr></hr>
            <Box>
                <Typography variant="h6" >Sizes</Typography>
                <FormGroup row={true}>
                    <FormControlLabel control={<Checkbox />} value="S" checked={filterObj['sizes'].includes('S')} onChange={() => { applyFilter({ key: 'sizes', value: 'S' }) }} label="S" />
                    <FormControlLabel control={<Checkbox />} value="M" checked={filterObj['sizes'].includes('M')} onChange={() => { applyFilter({ key: 'sizes', value: 'M' }) }} label="M" />
                    <FormControlLabel control={<Checkbox />} value="L" checked={filterObj['sizes'].includes('L')} onChange={() => { applyFilter({ key: 'sizes', value: 'L' }) }} label="L" />
                </FormGroup>



            </Box>
            <Box>
                <Typography variant="h6" >Brands</Typography>
                <FormGroup row={true}>
                    <FormControlLabel control={<Checkbox />} checked={filterObj['brands'].includes('AmorMente')} onChange={() => { applyFilter({ key: 'brands', value: 'AmorMente' }) }} label="AmorMente" />
                    <FormControlLabel control={<Checkbox />} checked={filterObj['brands'].includes('Eyebogler')} onChange={() => { applyFilter({ key: 'brands', value: 'Eyebogler' }) }} label="Eyebogler" />
                    <FormControlLabel control={<Checkbox />} checked={filterObj['brands'].includes('Trijal Fab')} onChange={() => { applyFilter({ key: 'brands', value: 'Trijal Fab' }) }} label="Trijal Fab" />
                    <FormControlLabel control={<Checkbox />} checked={filterObj['brands'].includes('TRIPR')} onChange={() => { applyFilter({ key: 'brands', value: 'TRIPR' }) }} label="Tripr" />
                </FormGroup>
            </Box>
            <Box>
                <Typography variant="h6" >Ideal For</Typography>
                <FormGroup row={true}>
                    <FormControlLabel control={<Checkbox />} checked={filterObj['ideal'].includes('Men')} onChange={() => { applyFilter({ key: 'ideal', value: 'Men' }) }} label="Men" />
                    <FormControlLabel control={<Checkbox />} checked={filterObj['ideal'].includes('Women')} onChange={() => { applyFilter({ key: 'ideal', value: 'Women' }) }} label="Women" />

                </FormGroup>
            </Box>

        </Box>

    )
}

export default Filters