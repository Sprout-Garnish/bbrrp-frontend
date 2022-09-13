declare global {
  interface Window {
    /**
     * @todo: add type definition for kakao map api
     *
     * @see: https://apis.map.kakao.com/web/documentation/
     */
    kakao: Record<string, any>;
  }
}
