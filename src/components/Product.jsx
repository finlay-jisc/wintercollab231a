import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line react/prop-types
const Product = ({ name, icon: Icon, href, lpad, setPinned, colour }) => {
    const [isPinned, setIsPinned] = useState(false);

    return (
        <>
            <a href={href} style={{color: colour || "inherit"}} className="font-semibold text-gray-500">
                <FontAwesomeIcon className="pr-4" icon={faThumbTack} />
                {name}
            </a>
    </>
    )
}
export default Product;