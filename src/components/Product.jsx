import React, { useState } from "react"
// eslint-disable-next-line react/prop-types
const Product = ({ name, icon: Icon, href, lpad, setPinned, colour }) => {
    const [isPinned, setIsPinned] = useState(false);

    return (
        <>
            <div
                style={{ marginLeft: lpad || "0px"}}
                className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
            >
                <Icon className="h-5 w-5 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
            </div>
            <a href={href} style={{color: colour || "inherit"}} className="font-semibold text-gray-500">
                {name}
            </a>
            {setPinned && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isPinned ? "#E85E13" : "none"}
                    // color="black"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={() => {
                        setPinned({ name, href, icon: Icon })
                        setIsPinned(!isPinned)
                    }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

            )
        }
    </>
    )
}
export default Product;