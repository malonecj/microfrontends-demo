import React from 'react';
import { Link } from "react-router-dom";

const Content = () => {
    return (<section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                    <Link to={`/ads?category=cars`} className="block relative h-48 rounded">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1532967360328-42df975cbb4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">Cars</h2>
                        </div>
                    </Link>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                    <Link to={`/ads?category=for-sale`} className="block relative h-48 rounded">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1606922699403-9a40186fcb9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGZvciUyMHNhbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">For Sale</h2>
                        </div>
                    </Link>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                    <Link to={`/ads?category=jobs`} className="block relative h-48 rounded">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGpvYnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">Jobs</h2>
                        </div>
                    </Link>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                    <Link to={`/ads?category=pets`} className="block relative h-48 rounded">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1517352551702-336dda93455e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">Pets</h2>

                        </div>
                    </Link>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                    <Link to={`/ads?category=properties`} className="block relative h-48 rounded">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb3BlcnRpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">Properties</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Microfrontends Demo</h1>
                    <p className="leading-relaxed text-base">This is a sample application which demonstrates how a microfrontend based architecture might work at gumtree.com. This app consists of 4 pages. Each page is a standalone application that can be built, tested and deployed in iosolation. It uses <a href="https://webpack.js.org/concepts/module-federation/">module federation</a> to dynamically import code from each application at runtime.</p>
                    <a className="text-green-500 inline-flex items-center mt-4">View Blog Post
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>)
}

export default Content;


