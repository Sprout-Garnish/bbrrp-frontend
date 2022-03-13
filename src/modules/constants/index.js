const urljoin = require('url-join');

const BASE_URL = "https://bbrrp-backend-production.up.railway.app/";
export const GRAPHQL_ENDPOINT = urljoin(BASE_URL, "/api/graphql");
