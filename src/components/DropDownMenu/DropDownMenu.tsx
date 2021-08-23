import React, {Fragment, ReactNode} from 'react';
import './DropDownMenu.less';
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import clsx from "clsx";

type Props = {
    buttonComponent: ReactNode,
    items: (MenuItem | false)[],
    origin?: "origin-top-right" | 'origin-top-left' | 'origin-bottom-left' | 'origin-bottom-right',
    className?: string,
}

type MenuItem = {
    title: string,
    onClick: () => (void),

}
// type Origin {
//     TopRight: "origin-top-right",
//     TopLeft: "origin-top-left",
// }

const DropDownMenu = ({buttonComponent, items, origin = 'origin-bottom-right', className}: Props) => {
    return (
        <div className={clsx('drop-down-menu z-50', className)}>
            <Menu as="div" className="relative z-50">
                <div>
                    <Menu.Button
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        {buttonComponent}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={clsx(
                            origin,
                            origin === 'origin-top-left' && 'right-0',
                            'absolute mt-2 w-48 z-50 rounded-md shadow-lg py-1 cursor-pointer\t bg-white ring-1 ring-black ring-opacity-5 focus:outline-none')}>
                        {items
                            .filter(a => a)
                            .map(a => a as MenuItem)
                            .map((item, index) => {
                            return <Menu.Item  key={`menu-item=${index}`}>
                                {({active}) => (
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            item.onClick();
                                        }}
                                        className={clsx(active ? 'bg-gray-100' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        {item.title}
                                    </a>
                                )}
                            </Menu.Item>
                        })}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default DropDownMenu;
