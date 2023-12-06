import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line react/prop-types
const Product = ({ name, icon: Icon, href, lpad, pinnedProducts, setPinnedProducts, colour }) => {

    const handlePin = (event) => {
        if (pinnedProducts.includes(name)) {
            setPinnedProducts(pinnedProducts.filter((product) => product !== name));
        } else {
            setPinnedProducts([...pinnedProducts, name]);
        }
    }

    return (
        <>
            <a href={href} style={{color: colour || "inherit"}} className="font-semibold text-gray-500">
                <FontAwesomeIcon className="pr-4" icon={faThumbTack} onClick={handlePin}/>
                {name}
            </a>
    </>
    )
}
export default Product;