
const PRODUCTION_ROOT = 'https://microfrontends-demo';
const FUNCTIONS_PATH = '.netlify/functions/';
const API_ENDPOINT = `${FUNCTIONS_PATH}/api`;
const getProductionUrl = (site = '') => `${PRODUCTION_ROOT}${site}.netlify.app`;


const config = {
    production: {
        publicPath: `${process.env.URL}/`,
        remoteUrls: {
            SHELL: getProductionUrl(),
            HOME: getProductionUrl('-home'),
            SEARCH: getProductionUrl('-search'),
            VIEW_ITEM: getProductionUrl('-view-item'),
            API: `${getProductionUrl('-api')}/${API_ENDPOINT}`,
        }

    },
    development: {
        publicPath: 'auto',
        remoteUrls: {
            SHELL: 'http://localhost:3000',
            HOME: 'http://localhost:3001',
            SEARCH: 'http://localhost:3002',
            VIEW_ITEM: 'http://localhost:3003',
            API: `http://localhost:8888/${API_ENDPOINT}`
        }
    }
}

module.exports = config;
