import * as uuid from "uuid"

export default function ServersBind(DEV_ENVIRONMENT = false) {
    window.servers.getConfig = function () {
        if (DEV_ENVIRONMENT) return {
            gameplay_api: {
                host: "0.0.0.0",
                port: 5320
            },

            common_api: {
                host: "0.0.0.0",
                port: 5321
            },

            social_api: {
                host: "0.0.0.0",
                port: 5322
            },

            smartfox: {
                host: "0.0.0.0",
                port: 5323
            },

            additional_jvm_args: "-DdebugMode",
            program_args: ""
        }
    }

    window.servers.get = function () {
        if (DEV_ENVIRONMENT) return [
            {
                host: "0.0.0.0", name: "Debug server", description: "Just a server meant for debugging", id: uuid.v4(), gameplay_api: {
                    host: "0.0.0.0",
                    port: 5320
                },

                common_api: {
                    host: "0.0.0.0",
                    port: 5321
                },

                social_api: {
                    host: "0.0.0.0",
                    port: 5322
                },

                smartfox: {
                    host: "0.0.0.0",
                    port: 5323
                },
            },
            {
                host: "0.0.0.0", name: "Developer Server", description: "Server meant for testing features", id: uuid.v4(), gameplay_api: {
                    host: "0.0.0.0",
                    port: 5320
                },

                common_api: {
                    host: "0.0.0.0",
                    port: 5321
                },

                social_api: {
                    host: "0.0.0.0",
                    port: 5322
                },

                smartfox: {
                    host: "0.0.0.0",
                    port: 5323
                },
            },
            {
                host: "0.0.0.0", name: "Public Server", description: "The official public server", id: uuid.v4(), gameplay_api: {
                    host: "0.0.0.0",
                    port: 5320
                },

                common_api: {
                    host: "0.0.0.0",
                    port: 5321
                },

                social_api: {
                    host: "0.0.0.0",
                    port: 5322
                },

                smartfox: {
                    host: "0.0.0.0",
                    port: 5323
                },
            }
        ]

        else return sentinel.servers.get();
    }

    window.servers.save = function (servers) {
        if (DEV_ENVIRONMENT) return;
        else return sentinel.servers.save(servers);
    }
}