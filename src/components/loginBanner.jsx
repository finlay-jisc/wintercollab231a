import React, { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import ProductsDropdown2 from './dropdown copy'
import UserInfo from './userInfo'
import Product from './Product'
// import { textAlign } from '@mui/system'

export default function LoginBanner() {
  const [pinned, setPinned] = useState([]);
  const pinProduct = (product) => {
    const existingPin = pinned.findIndex(p => p.name === product.name);
    if (existingPin >= 0) {
      setPinned(p => {
        const copy = [...p];
        copy.splice(existingPin, 1);
        return copy;
      })
    } else {
      setPinned(p => [...p, product]);
    }
  }

  return (
    <>
      <Disclosure as="nav" className="bg-stone-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-12 sm:h-10 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
            <div className="flex flex-1 sm:items-center sm:justify-normal items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <a href='https://jisc.ac.uk'>
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src="https://subscriptionsmanager.jisc.ac.uk/img/jisc-logo-new.svg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-10 w-auto lg:block"
                    src="https://subscriptionsmanager.jisc.ac.uk/img/jisc-logo-new.svg"
                    alt="Your Company"
                  />
                </a>
              </div>

            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* Profile dropdown */}

              <UserInfo />

              <ProductsDropdown2 setPinned={pinProduct} />

              {/* <Services /> */}
            </div>
          </div>
        </div>
      </Disclosure>
    </>

  )
}
