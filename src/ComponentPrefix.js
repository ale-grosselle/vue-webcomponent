let componentPrefix = "wv";

/**
 * @description
 * By default the prefix for webcomponent is vw-
 * @param {String} pr
 */
export const setPrefix = function (pr) {
	if (pr) {
		componentPrefix = pr;
	}
};

/**
 * @description
 * Returns prefix
 * @return {string}
 */
export const getPrefix = function () {
	return componentPrefix;
};
