export default function PayloadsBind(DEV_ENVIRONMENT = false) {
    window.payloads.get = function () {
        if (DEV_ENVIRONMENT) return [
            {
                file: "main.spf",
                path: "path/to/location",
                id: "main",
                name: "Main"
            },
            {
                file: "console.spf",
                path: "path/to/location",
                id: "console",
                name: "Console Commands"
            },
            {
                file: "no_free_stuff.spf",
                path: "path/to/location",
                id: "no_free_stuff",
                name: "No Free Stuff"
            }
        ]

        else return sentinel.payloads.get();
    }

    window.payloads.save = function (payloads) {
        if (DEV_ENVIRONMENT) return;
        else return sentinel.payloads.save(payloads);
    }
}