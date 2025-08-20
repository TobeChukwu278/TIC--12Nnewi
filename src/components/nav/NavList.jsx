import React from 'react';
import { FaCar, FaLeaf, FaCog, FaSeedling, FaPalette, FaTools } from 'react-icons/fa';
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
            { item: 'Agro Allied', icon: <FaSeedling /> },
            { item: 'Leather works/Crafts', icon: <FaPalette /> },
            { item: 'Industrial Products', icon: <FaTools /> },
            { item: 'Food Processing', icon: <MdOutlineFastfood /> },
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
        Navitem: 'Agro Allied',
        icon: <FaSeedling />,
    },
    {
        Navitem: 'Leather works/Crafts',
        icon: <FaPalette />,
    },
    {
        Navitem: 'Industrial Products',
        icon: <FaTools />,
    },
    {
        Navitem: 'Food Processing',
        icon: <MdOutlineFastfood />,
    },
    {
        Navitem: 'Chemical Allied/Cosmeticss',
        icon: <GiLipstick />,
    },
    {
        Navitem: 'Fabrication',
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