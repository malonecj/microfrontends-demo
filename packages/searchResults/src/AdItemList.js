import React from 'react';
import AdItem from './AdItem';
import useAds from './hooks/useAds';

const Title = ({ text }) => {
    return (<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{text}</h1>
    </div>)
}

const ResultsList = ({ category }) => {
    const { data, isFetching } = useAds(category);
    if (isFetching) {
        return "Loading"
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <Title text={`${data.length} ads found for ${category} in UK`} />
                <div className="flex flex-wrap -m-4">
                    {data.map((ad, index) => <AdItem key={`ad-item-${index}`} {...ad} />)}
                </div>
            </div>
        </section>)
};

export default ResultsList;
