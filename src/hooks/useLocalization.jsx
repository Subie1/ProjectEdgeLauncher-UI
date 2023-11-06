import bindEnglishLocalization from "../localization/English"

export default function useLocalization(DEV_ENVIRONMENT = false) {

    window.localization = {
        init: () => {
            // Bind localization
            bindEnglishLocalization(DEV_ENVIRONMENT);

            var locales = window.locales;
            var currentLocaleDbg = "en-US";
            
            window.locales = undefined;

            // Debug handling, this is done by sentinel in java
            // but for non-sentinel we will want this to be in JS
            function localeParams(str, params) {
                // Go over parameters
                var i = 0;
                
                while (i < params.length) {
                    var param = params[i];
                    if (typeof param === "function")
                        param = param();

                    str = str.replace("$" + i.toString(), param);
                    i++;
                }

                return str;
            }

            function debugLocale(locale) {
                locale.getString = function (key) {
                    // Find entry
                    if (locale.localization[key] != undefined) {
                        // Found it
                        var val = locale.localization[key];
                        if (typeof val === "function")
                            val = val();

                        return localeParams(val, params);
                    }

                    // Not found
                    return key;
                }
            }

            // Functions       
            window.localization.getDefaultLocales = function () {
                return locales
            }

            window.localization.getLocales = function () {
                if (DEV_ENVIRONMENT) return [ debugLocale(locales["en-US"]) ];
                return sentinel.getLocales();
            }

            window.localization.getLocale = function (id) {
                if (DEV_ENVIRONMENT) return debugLocale(locales[id]);
                return sentinel.getLocale(id);
            }

            window.localization.getCurrentLocale = function () {
                if (DEV_ENVIRONMENT) return debugLocale(locales[currentLocaleDbg]);
                return sentinel.getCurrentLocale();
            }

            window.localization.setCurrentLocale = function (id) {
                if (DEV_ENVIRONMENT) return currentLocaleDbg = id;
                return sentinel.switchLocale(id);
            }

            window.localization.getString = function (key, ...params) {
                if (DEV_ENVIRONMENT) {
                    // Find locale
                    let locale = window.localization.getCurrentLocale();
                    if (locale.localization[key] != undefined) {
                        // Found it
                        let val = locale.localization[key];
                        if (typeof val === "function")
                            val = val();

                        return localeParams(val, params);
                    }

                    locale = window.localization.getLocale("en-US");
                    if (locale.localization[key] != undefined) {
                        // Found it
                        let val = locale.localization[key];
                        if (typeof val === "function")
                            val = val();

                        return localeParams(val, params);
                    }


                    // Return input
                    return key;
                } else {
                    return sentinel.getString(key, params);
                }
            }

        }
    }

    return [window.localization];
}