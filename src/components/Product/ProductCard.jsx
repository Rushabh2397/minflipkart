import { Box } from "@mui/material"






const ProductCard = ({price,name,brand,prodImg,mrp,discount}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: "300px",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <Box
                sx={{
                    width: "280px"
                }}
            >
                {/* <img src="https://rukminim1.flixcart.com/image/581/697/kp5sya80/fabric/l/j/x/no-unstitched-best-seller-new-shirt-fabric-36-wopno-original-imag3gkytyhtnqyd.jpeg?q=50" /> */}
                <img src={prodImg} alt="collection" style={{height:"350px"}} />
            </Box>
            <Box
                sx={{
                    width: "250px"

                }}
            >
                <Box
                    sx={{
                        color: "#878787",
                        fontSize: "1em"
                    }}
                >
                    {brand}
                </Box>
                <Box
                    sx={{
                        width: "220px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: 'hidden'
                    }}
                >
                    {name}
                </Box>
                <Box
                    sx={{
                        padding: '5px 0'
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-block'
                        }}
                    >
                        ₹ {price}
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-block',
                            marginLeft:'5px',
                            color:'#878787',
                            textDecoration:'line-through',
                            fontSize:'15px'
                        }}
                    >
                        ₹ {mrp}
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-block',
                            marginLeft:'5px',
                            color:'#388e3c',
                            fontSize:'14px',
                            fontWeight:'500'
                        }}
                    >
                        {discount} % off
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default ProductCard