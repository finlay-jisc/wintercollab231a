import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Tooltip } from '@mui/material';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import Product from './Product'

const yourProducts = [
  { name: 'Product 1', href: '#', icon: ChartPieIcon },
  { name: 'Product 2', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Product 3', href: '#', icon: FingerPrintIcon },
  { name: 'Product 4', href: '#', icon: SquaresPlusIcon },
  { name: 'Product 5', href: '#', icon: ArrowPathIcon },
  { name: 'Product 6', href: '#', icon: ChartPieIcon },
  { name: 'Product 7', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Product 8', href: '#', icon: FingerPrintIcon },
  { name: 'Product 9', href: '#', icon: SquaresPlusIcon },
  { name: 'Product 10', href: '#', icon: ArrowPathIcon },
]

// eslint-disable-next-line react/prop-types
export default function ProductsDropdown2({ setPinned }) {
  const enablePinning = true;

  return (
    <Popover className="relative">
      <Tooltip title="Jisc products">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
        <Bars3Icon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      </Tooltip>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-5 flex px-4 top-10 -right-full sm:max-w-sm">
          <div className="w-64 flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <h3 className="font-semibold text-gray-1200 py-4">Your Products</h3>
            <hr></hr>
            <div
              className="p-4 flex flex-col items-center"
            >
              {yourProducts.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                  <Product name={item.name} href={item.href} icon={item.icon} setPinned={enablePinning && setPinned} />
                </div>
              ))}

            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
