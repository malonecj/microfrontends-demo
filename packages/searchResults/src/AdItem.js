import React from 'react';
import { Link } from "react-router-dom";

const AdItem = ({ id, category, title, price, location, imageUrl }) => {
    return (<div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer transform duration-500 ease-in-out hover:scale-110">
        <Link to={`/item?adId=${id}`} className="text-gray-600 hover:text-gray-800">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={imageUrl} />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                <p className="mt-1">{price}</p>
                <p>{location}</p>
            </div>
        </Link>
    </div>)
}

export default AdItem;
