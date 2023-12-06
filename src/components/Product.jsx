import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack as solidThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faThumbTack as regularThumbtack } from '@fortawesome/pro-regular-svg-icons'

// eslint-disable-next-line react/prop-types
const Product = ({ name, icon: Icon, href, lpad, pinnedProducts, setPinnedProducts, colour }) => {
    const isPinned = pinnedProducts.includes(name);

    const handlePin = (event) => {
        if (isPinned) {
            setPinnedProducts(pinnedProducts.filter((product) => product !== name));
        } else {
            setPinnedProducts([...pinnedProducts, name]);
        }
    }

    return (
        <>
            <a href={href} style={{color: colour || "inherit"}} className="font-semibold text-gray-500">
                <FontAwesomeIcon className="pr-4" icon={isPinned ? solidThumbtack : regularThumbtack} onClick={handlePin}/>
                {name}
            </a>
    </>
    )
}
export default Product;