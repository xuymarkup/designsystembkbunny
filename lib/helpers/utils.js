class Utilities {
    /**
     * Verify the node exist in the object.
     *
     * @param {Object} data Object to be evaluated.
     * @param {String} nodeFind List of items to search.
     * @param {any} requestDefault (Optional)value to return in case you don't find what you want.
     *
     * @return  {any}
     */
    static existFields(data, nodeFind, requestDefault = "") {
        const NODE_FIND = nodeFind.split(".");
        let objectTest = data;
        const VALIDATE = () => (
            NODE_FIND.every((key) => {
                const REQUEST = (typeof objectTest[key] !== "undefined");
                objectTest = objectTest[key];
                return REQUEST;
            })
        );
        return VALIDATE() ? objectTest : requestDefault;
    }
    /**
         *  returns an array with the properties of the picture label.
         *
         * @param {Object} renditions List of available images.
         * @param {Array} sources configuration of the values to be taken.
         * @param {String} uid Item identifier.
         *
         * @return {Array}
         */
    static getSources(renditions = [], sources = [], uid = "0001") {
        let newRenditions = [];
        const RENDITIONS = sources.map((source, index) => {
            const { aspect = "", size = "", query = "" } = source;
            let response = "";
            if (aspect) {
                const { height = 0, uri = "/", width = 0 } = this.existFields(renditions, `${aspect}.${size}`, {});
                response = {
                    height,
                    key: `img-${index}-${uid}`,
                    media: query,
                    srcSet: uri,
                    width,
                };
            }
            return response;
        });
        newRenditions = RENDITIONS.filter(Boolean);
        return newRenditions;
    }
}