// English localization
export default function bindEnglishLocalization(DEV_ENVIRONMENT = false) {
    // Init
    if (!window.locales)
        window.locales = {}

    // Create english locale
    window.locales["en-US"] = {
        id: "en-US",
        name: "English (United States)",

        localization: {

            ["labels.version"]: () => {
                if (DEV_ENVIRONMENT)
                    return "v0.0.1";
                return "v" + sentinel.launcherVersion;
            },

            ["tooltips.clients"]: "Clients",
            ["tooltips.servers"]: "Servers",

            ["varargs.example"]: "Example $0 $1"

        }
    }
}