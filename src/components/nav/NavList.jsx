import React from 'react';
import { FaTshirt, FaLaptop, FaShoppingBag, FaShoePrints, FaCar, FaLeaf, FaCog, FaSeedling, FaPalette, FaTools } from 'react-icons/fa';
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
            { item: 'Agro Tech', icon: <FaSeedling /> },
            { item: 'Handmade Crafts', icon: <FaPalette /> },
            { item: 'Industrial Products', icon: <FaTools /> },
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
        Navitem: 'Agro Tech',
        icon: <FaSeedling />,
    },
    {
        Navitem: 'Handmade Crafts',
        icon: <FaPalette />,
    },
    {
        Navitem: 'Industrial Products',
        icon: <FaTools />,
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