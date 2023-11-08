export default function PayloadsBind(DEV_ENVIRONMENT = false) {
    window.payloads.get = function () {
        if (DEV_ENVIRONMENT) return [
            {
                file: "main.spf",
                path: "path/to/location"
            },
            {
                file: "console.spf",
                path: "path/to/location"
            },
            {
                file: "no_free_stuff.spf",
                path: "path/to/location"
            }
        ]

        else return sentinel.payloads.get();
    }

    window.payloads.save = function (payloads) {
        if (DEV_ENVIRONMENT) return;
        else return sentinel.payloads.save(payloads);
    }
}