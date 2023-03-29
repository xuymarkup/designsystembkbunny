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
        const VALIDATE = () =>
            NODE_FIND.every(key => {
                const REQUEST = typeof objectTest[key] !== "undefined";
                objectTest = objectTest[key];
                return REQUEST;
            });
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
                const { height = 0, uri = "/", width = 0 } = this.existFields(
                    renditions,
                    `${aspect}.${size}`,
                    {},
                );
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
// class Utilities {
//     /**
//      * Removes the repeated elements of an arrangement.
//      *
//      * @param {Array} filterArray Filtering array.
//      * @param {Boolean} showRepeat Indicates if repeated items are displayed.
//      *
//      * @return  {any}
//      */
//     static arrayUnique(filterArray, showRepeat = false) {
//         let newArray = [];
//         const repeat = {};
//         if (filterArray.length > 0) {
//             newArray = filterArray.reduce((output, item) => {
//                 const TYPE = (typeof item === "object");
//                 let existItem = output.includes(item);
//                 if (TYPE) {
//                     const STRING_ARRAY = output.map(auxItem => JSON.stringify(auxItem));
//                     const STRING_ITEM = JSON.stringify(item);
//                     existItem = STRING_ARRAY.includes(STRING_ITEM);
//                 }
//                 if (!existItem) {
//                     output.push(item);
//                 } else {
//                     const NEW_REPEAT = repeat[item] || 0;
//                     repeat[item] = NEW_REPEAT + 1;
//                 }
//                 return output;
//             }, []);
//         }
//         const SHOW_REPEAT = (showRepeat) ? { repeat, newArray } : newArray;
//         return SHOW_REPEAT;
//     }

//     /**
//      * Allows you to copy a text to the clipboard.
//      *
//      * @param {string} textToCopy Text to be copied.
//      *
//      * @return {void}
//      */
//     static copyToClipboard(textToCopy = "") {
//         const $ELEMENT = document.createElement("pre");
//         $ELEMENT.innerHTML = textToCopy;
//         document.body.appendChild($ELEMENT);
//         const $SELECTION = document.createRange();
//         $SELECTION.selectNodeContents($ELEMENT);
//         window.getSelection().removeAllRanges();
//         window.getSelection().addRange($SELECTION);
//         try {
//             const $RESPONSE = document.execCommand("copy");
//             if ($RESPONSE) {
//                 window.getSelection().removeRange($SELECTION);
//                 document.body.removeChild($ELEMENT);
//             } else {
//                 console.log("Error in Copy"); // eslint-disable-line
//             }
//         } catch (Notify) {
//             console.log("Error tag no valid"); // eslint-disable-line
//         }
//     }

//     /**
//      * Verify the node exist in the object.
//      *
//      * @param {Object} data Object to be evaluated.
//      * @param {String} nodeFind List of items to search.
//      * @param {any} requestDefault (Optional)value to return in case you don't find what you want.
//      *
//      * @return  {any}
//      */
//     static existFields(data, nodeFind, requestDefault = "") {
//         const NODE_FIND = nodeFind.split(".");
//         let objectTest = data;
//         const VALIDATE = () => (
//             NODE_FIND.every((key) => {
//                 const REQUEST = (typeof objectTest[key] !== "undefined");
//                 objectTest = objectTest[key];
//                 return REQUEST;
//             })
//         );
//         return VALIDATE() ? objectTest : requestDefault;
//     }

//     /**
//      * Get formatted dates or return the object that allows us to format the date at will.
//      *
//      * @param {callback} module Dependency to be injected.
//      * @param {string} date Date to be formatted.
//      * @param {string} format Type Format type.
//      *
//      * @return  {any}
//      */
//     static formatIsoDate(module = null, date = "", format = "") {
//         let formatDate = "";
//         if (module) {
//             module.locale("es");
//             const TIME_ZONE = "America/Mexico_City";
//             let now = module().tz(TIME_ZONE).toISOString();
//             now = (date !== "") ? module(date).tz(TIME_ZONE).toISOString() : now;
//             now = module(now);
//             switch (format) {
//             case "spell":
//                 formatDate = now.format("MMM DD, YYYY").toUpperCase();
//                 break;
//             case "spellUp":
//                 formatDate = now.format("DD MMM YYYY").toUpperCase();
//                 break;
//             case "full":
//                 formatDate = `${now.format("dddd DD")} de ${now.format("MMMM")} del ${now.format("YYYY")}`;
//                 break;
//             default:
//                 formatDate = now;
//             }
//         }
//         return formatDate;
//     }

//     /**
//      * get the site's cookies
//      *
//      * @param {string} name (Optional)Name of cookie.
//      *
//      * @return  {string}
//      */
//     static getCookie(name = "") {
//         const REG_EXP = new RegExp(`^${name}=.+`, "m");
//         let decode = decodeURIComponent(document.cookie).replace(/;\s?/g, "\n");
//         decode = decode.match(REG_EXP) || [];
//         decode = decode.toString();
//         return decode.replace(`${name}=`, "");
//     }

//     /**
//      * removes special characters from a string.
//      *
//      * @param {string} string (Optional)String to be cleaned.
//      * @param {string} union (Optional)Character with which you will replace the spaces.
//      *
//      * @return  {string}.
//      */
//     static getCleanedString(string = "", union = "") {
//         let ascii = 0;
//         let char = "";
//         let newString = "";
//         const STRING = string.toLowerCase();
//         const SPECIAL = {
//             á: "a",
//             é: "e",
//             í: "i",
//             ó: "o",
//             ú: "u",
//             ñ: "n",
//         };

//         for (let i = 0; i < STRING.length; i += 1) {
//             char = STRING[i];
//             char = (typeof SPECIAL[char] !== "undefined") ? SPECIAL[char] : char;
//             if (typeof char !== "function") {
//                 ascii = char.charCodeAt();
//                 newString += (ascii === 32 || (ascii >= 48 && ascii <= 57) || (ascii >= 97 && ascii <= 122)) ? char : "";
//             }
//         }
//         newString = newString.split(" ").filter(Boolean);
//         return newString.join(union);
//     }

//     /**
//      * Allows to format the duration of a video in hours, minutes and seconds.
//      *
//      * @param {number} duration Duration of the video without formatting
//      *
//      * @return {String}
//      */
//     static getDurationVideo(duration) {
//         let output = duration.toString();
//         const IS_VALID = /:/g.test(output);
//         if (!IS_VALID) {
//             const DURATION = parseInt(output, 10);
//             let hours = Math.floor(DURATION / 3600);
//             let minutes = Math.floor((DURATION % 3600) / 60);
//             let seconds = DURATION - ((minutes * 60) + (hours * 3600));
//             minutes = (hours !== 0 && minutes <= 9) ? `0${minutes}:` : `${minutes}:`;
//             hours = (hours > 0 && hours <= 9) ? `${hours}:` : "";
//             seconds = (seconds <= 9) ? `0${seconds}` : seconds;
//             output = `${hours}${minutes}${seconds}`;
//         }
//         return output;
//     }

//     /**
//      * Gets all external items within each widget.
//      *
//      * @param {Object} widget List of widgets.
//      * @param {Object} uiData (Optional)List of the UI validate.
//      *
//      * @return {Object}
//      */
//     static getExternalItems(widget, uiData = {}) {
//         if (Object.keys(uiData).length > 0) {
//             const TABS = this.existFields(widget, "items.0.tabs", []);
//             const LISTS = this.existFields(widget, "items.0.items", []);
//             if (TABS.length > 0) {
//                 const ITEMS = TABS.map((tabs) => tabs.content[0].items);
//                 ITEMS.forEach((item) => this.getUIFromURI(item, uiData));
//             } else if (LISTS.length > 0) {
//                 const ITEMS = widget.items.map((item) => item.items);
//                 ITEMS.forEach((item) => this.getUIFromURI(item, uiData));
//             } else {
//                 this.getUIFromURI(widget.items, uiData);
//             }
//         }
//         return widget;
//     }

//     /**
//      * Get your content sharing settings.
//      *
//      * @param {Object} dataShare List of configuration parameters.
//      *
//      * @return {Object}
//      */
//     static getListShare(dataShare) {
//         const {
//             domain = "",
//             message = "Un amigo te ha recomendado este contenido que puede ser de tu interés.",
//             title = "",
//             uri = "/",
//         } = dataShare;
//         const URL = `${domain}${uri}`;
//         const SHARE = {
//             facebook: {
//                 href: `https://www.facebook.com/sharer/sharer.php?u=${uri}`,
//                 target: "_blank",
//                 title,
//             },
//             twitter: {
//                 href: `https://twitter.com/intent/tweet?url=${uri}&text=${title}`,
//                 target: "_blank",
//                 title,
//             },
//             email: {
//                 href: `
//                     mailto:?subject=${title}
//                     &body=${message} ${title} encuéntralo en este enlace: ${URL} visitanos en ${domain}
//                 `,
//                 title,
//             },
//             whatsapp: {
//                 href: `whatsapp://send?text=${title.replace(/#/g, "")} ${URL}`,
//                 title,
//             },
//         };
//         return SHARE;
//     }

//     /**
//      * Get the hanging section of the breadcrumbs or Uri
//      *
//      * @param {String} type (Optional)
//      * @param {String} uri (Optional)
//      * @param {Array} breadcrumbs (Optional)
//      *
//      * @return {String}
//      */
//     static getSectionComplete(type = "", uri = "/", breadcrumbs = []) {
//         let section = "";
//         const TYPE = this.getCleanedString(type);
//         const IS_VIDEO = ["episodepage", "clippage"].includes(TYPE);
//         const LENGTH = breadcrumbs.length;
//         if (IS_VIDEO && LENGTH >= 1) {
//             const [typeShow = { uri: "/" }] = breadcrumbs.filter((breadcrumb) => breadcrumb.type === "show");
//             const URI_ARRAY = typeShow.uri.split("/");
//             section = URI_ARRAY[1] || section;
//         } else if (!IS_VIDEO && LENGTH === 0) {
//             const URI = uri.split("/");
//             section = URI[1] || section;
//         } else {
//             const [bread = { text: section }] = breadcrumbs;
//             section = bread.text;
//         }
//         return section;
//     }

//     /**
//      *  returns an array with the properties of the picture label.
//      *
//      * @param {Object} renditions List of available images.
//      * @param {Array} sources configuration of the values to be taken.
//      * @param {String} uid Item identifier.
//      *
//      * @return {Array}
//      */
//     static getSources(renditions = [], sources = [], uid = "0001") {
//         let newRenditions = [];
//         const RENDITIONS = sources.map((source, index) => {
//             const { aspect = "", size = "", query = "" } = source;
//             let response = "";
//             if (aspect) {
//                 const { height = 0, uri = "/", width = 0 } = this.existFields(renditions, `${aspect}.${size}`, {});
//                 response = {
//                     height,
//                     key: `img-${index}-${uid}`,
//                     media: query,
//                     srcSet: uri,
//                     width,
//                 };
//             }
//             return response;
//         });
//         newRenditions = RENDITIONS.filter(Boolean);
//         return newRenditions;
//     }

//     /**
//      * Obtener la sección del tipo de contenido
//      *
//      * @param {Array} breadcrumbs (Optional)Secondary navigation list.
//      * @param {string} type (Optional)Indicates of type  the section to get.
//      *
//      * @return {Object}
//      */
//     static getTypeSection(breadcrumbs = [], type = "") {
//         let section = {};
//         if (breadcrumbs) {
//             const LONG = breadcrumbs.length;
//             switch (type) {
//             case "main":
//                 section = breadcrumbs[0] || {};
//                 break;
//             case "sub":
//                 section = LONG >= 2 ? breadcrumbs[1] : {};
//                 break;
//             default:
//                 section = LONG > 0 ? breadcrumbs.pop() : {};
//             }
//         }
//         return section;
//     }

//     /**
//      * Gets the UI from the item's URL and assigns the value to an object within the item.
//      *
//      * @param {Array} items (Optional)Listing of widget properties.
//      * @param {Object} uiData (Optional)List of the UI validate.
//      *
//      * @return  {Object}
//      */
//     static getUIFromURI(items = [], uiData = {}) {
//         if (items.length > 0) {
//             const ITEMS_URI = items.map((item) => item.externalUrl || item.uri);
//             const { uris } = uiData;
//             const URIS_JOIN = uris.join("|");
//             const URIS_EXPRESSION = new RegExp(URIS_JOIN);

//             const UIS = Object.keys(uiData.uis);
//             const UIS_JOIN = UIS.join("|");
//             const UIS_EXPRESSION = new RegExp(UIS_JOIN);

//             const URI_MATCHES = ITEMS_URI.map((item) => {
//                 if (URIS_EXPRESSION.test(item)) {
//                     let match = item.match(URIS_JOIN)[0];
//                     match = match.split(/[-./]/);
//                     match = match.sort();
//                     return match.join();
//                 }
//                 return "";
//             });

//             const UI_MATCHES = URI_MATCHES.map((item) => {
//                 if (UIS_EXPRESSION.test(item)) {
//                     let match = item.match(UIS_JOIN)[0];
//                     match = match.split(".");
//                     return match.join();
//                 }
//                 return "";
//             });

//             const ITEMS = items.map((item, index) => {
//                 const UI = uiData.uis[UI_MATCHES[index]] || {};
//                 return Object.assign(item, {
//                     external: {
//                         text: UI.text || "",
//                         modifier: UI.modifier || "",
//                     },
//                 });
//             });
//             return ITEMS;
//         }
//         return items;
//     }

//     /**
//      *  returns an array with the properties of the vertical picture label.
//      *
//      * @param {Object} renditions List of available images.
//      * @param {Array} sources configuration of the values to be taken.
//      * @param {String} uid Item identifier.
//      *
//      * @return {Array}
//      */
//     static getVerticalSources(media = {}, sources = [], uid = "0001") {
//         let result = [];
//         if (media) {
//             const {
//                 original = { height: 0, with: 0 },
//                 renditions = [],
//             } = media;
//             const { height, width } = original;
//             const IS_VERTICAL = (height > width) ? "vertical" : undefined;
//             const SOURCES = sources.filter(source => source.orientation === IS_VERTICAL);
//             result = this.getSources(renditions, SOURCES, uid);
//         }
//         return result;
//     }

//     /**
//      * Allows you to generate a cookie.
//      *
//      * @param {String} name (Optional)Name of cookie.
//      * @param {String} value (Optional)Value of cookie.
//      * @param {Number} days (Optional)Expiration of cookie.
//      *
//      * @return  {void}.
//      */
//     static setCookie(name = "", value = "", days = 1) {
//         if (name && value) {
//             const DATE = new Date();
//             DATE.setTime(DATE.getTime() + days);
//             const EXPIRES = `expires=${DATE.toUTCString()}`;
//             document.cookie = `${name}=${value};${EXPIRES};path=/`;
//         }
//     }

//     /**
//      * Allows you to show and hide elements.
//      *
//      * @param {String} selector Css selector.
//      * @param {String} display Type of display.
//      *
//      * @return {void}
//      */
//     static showToggle(selector, display = "block") {
//         const $ELEMENT = document.querySelector(selector) || null;
//         if ($ELEMENT) {
//             const STYLE = $ELEMENT.style.display || "block";
//             $ELEMENT.style.display = (STYLE === "block" || STYLE === display) ? "none" : display;
//         }
//         return $ELEMENT;
//     }

//     /**
//      * Allows the use of browser history
//      *
//      * @param {Object} data (Optional)List of data
//      * @param {String} reference (Optional)Identifier of the item loaded in the history
//      * @param {String} uri P(Optional)ath of item.
//      * @param {boolean} cache (Optional)identifier of the item loaded in the history.
//      *
//      * @return  {void}
//      */
//     static setHistory(data = {}, reference = "", uri = "", cache = true) {
//         if (cache) {
//             const REFERENCE = reference || `tvsa_history_${Math.random().toString(36).substr(2)}`;
//             window.history.pushState(data, REFERENCE, uri);
//         }
//     }

//     /**
//      * the last object of the "breadcrumbs" is obtained
//      *
//      * @param {Array} breadcrumbs
//      *
//      * @return  {Object}
//      */

//     static getSection(breadcrumbs) {
//         let section = {};
//         if (breadcrumbs.length > 0) {
//             section = breadcrumbs[breadcrumbs.length - 1];
//         }
//         return section;
//     }

//     /**
//      * function to obtain the structured data of the navigation
//      *
//      * @param {Object} navigation json data
//      *
//      * @return  {Object}
//      */
//     static getSiteNavigationSchema(navigation) {
//       const SCHEMA = {
//         "@context": "https://schema.org",
//         "@graph": this.getSiteNavigationGraphSchema(navigation),
//       };
//       return SCHEMA;
//     }

//     static getSiteNavigationGraphSchema(navigation) {
//       const GRAPH_ARRAY = navigation.reduce((accumulator, currentValue) => {
//         const RETURN_ARRAY = accumulator;
//         const ELEMENT = {
//           "@type": "SiteNavigationElement",
//           "@id": currentValue.idGroup || "",
//           name: currentValue.text || "",
//           url: currentValue.link || "",
//         };
//         RETURN_ARRAY.push(ELEMENT);
//         return RETURN_ARRAY;
//       }, []);
//       return GRAPH_ARRAY;
//     }
// }

export default Utilities;
