const truncated = (address: any) => `${address?.substr(0, 6)}...${address?.substr(-4)}`

export default truncated