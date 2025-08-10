import React from 'react';
import { FaTshirt, FaLaptop, FaShoppingBag, FaShoePrints, FaCar, FaLeaf, FaCog } from 'react-icons/fa';
import { MdOutlineFastfood } from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { IoIosArrowDown } from 'react-icons/io';


export const NavList = [
    {
        Navitem: 'All Categories',
        icon: <IoIosArrowDown />, // Icon for the dropdown
        hasDropdown: true,
        dropdownItems: [
            { item: 'Technology & Gadgets', icon: <FaCog /> },
            { item: 'Electronics', icon: <FaLaptop /> },
            { item: 'Bags', icon: <FaShoppingBag /> },
            { item: 'Footwear', icon: <FaShoePrints /> },
            { item: 'Groceries', icon: <MdOutlineFastfood /> },
            { item: 'Beauty', icon: <GiLipstick /> },
            { item: 'Wellness', icon: <FaLeaf /> },
            { item: 'Automotive', icon: <FaCar /> }
        ],
    },
    {
        Navitem: 'Technology & Gadgets',
        icon: <FaCog />,
    },
    {
        Navitem: 'ELECTRONICS',
        icon: <FaLaptop />,
    },
    {
        Navitem: 'BAGS',
        icon: <FaShoppingBag />,
    },
    {
        Navitem: 'FOOTWEAR',
        icon: <FaShoePrints />,
    },
    {
        Navitem: 'GROCERIES',
        icon: <MdOutlineFastfood />,
    },
    {
        Navitem: 'BEAUTY',
        icon: <GiLipstick />,
    },
    {
        Navitem: 'WELLNESS',
        icon: <FaLeaf />,
    }
];

export const TopNavList = [
    {
        Navitem: 'Automotive',
        icon: <FaCar />,
    },
    {
        Navitem: 'Makeup',
        icon: <GiLipstick />,
    }
];