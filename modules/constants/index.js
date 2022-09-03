const urljoin = require('url-join');

const BASE_URL = "http://bbrrpbackend-env.eba-paud2p39.ap-northeast-2.elasticbeanstalk.com/";
const GRAPHQL_ENDPOINT = urljoin(BASE_URL, "/api/graphql");

module.exports = {
    GRAPHQL_ENDPOINT,
}
