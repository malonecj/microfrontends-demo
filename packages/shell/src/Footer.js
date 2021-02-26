import React from "react";

const Footer = () => (<footer className="bg-bark pt-10 sm:mt-10 pt-10">
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                References
        </div>
            <a href="https://webpack.js.org/concepts/module-federation/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Webpack module federation plugin
        </a>
            <a href="https://github.com/module-federation/module-federation-examples" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Module federation examples
        </a>
            <a href="https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Zack Jackson Medium article
        </a>
        </div>
    </div>

    <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
        border-t border-gray-500 text-gray-400 text-sm 
        flex-col md:flex-row max-w-6xl">
            <div className="mt-2">
                Microfrontends classifieds demo
        </div>
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-facebook-f"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-twitter-alt"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-youtube"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-linkedin"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-instagram"></i>
                </a>
            </div>
        </div>
    </div>
</footer>
)
export default Footer;
