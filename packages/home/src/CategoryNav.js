
import React from 'react';
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const CateroryLink = ({ category }) => <li className="lg:w-1/3 mb-1 w-1/2">
    <Link to={`/ads?category=${category}`} className="text-gray-600 hover:text-gray-800">{capitalizeFirstLetter(category)}</Link>
</li>;

const CategoryNav = () => {
    const categories = ['cars', 'for-sale', 'jobs', 'properties', 'pets'];
    return (<nav className="flex flex-wrap list-none -mb-1">
        {categories.map(c => <CateroryLink category={c} />)}
    </nav>)
}

export default CategoryNav;