import React from 'react';
import CategoryNav from './CategoryNav';

const Content = () => {
    return (<section className="text-gray-600 body-font">
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
            <div className="flex flex-col md:w-1/2 md:pl-12">
                <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
                <CategoryNav />
            </div>
        </div>
    </section>)
}

export default Content;


