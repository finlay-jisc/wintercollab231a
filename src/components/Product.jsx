import React, { useState } from "react"
// eslint-disable-next-line react/prop-types
const Product = ({ name, icon: Icon, href, lpad, setPinned, colour }) => {
    const [isPinned, setIsPinned] = useState(false);

    return (
        <>
            <a href={href} style={{color: colour || "inherit"}} className="font-semibold text-gray-500">
                {name}
            </a>
    </>
    )
}
export default Product;