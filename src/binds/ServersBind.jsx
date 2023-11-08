import * as uuid from "uuid"

export default function ServersBind(DEV_ENVIRONMENT = false) {
    window.servers.get = function () {
        if (DEV_ENVIRONMENT) return [
            { host: "0.0.0.0", name: "Debug server", description: "Just a server meant for debugging", id: uuid.v4() },
            { host: "0.0.0.0", name: "Developer Server", description: "Server meant for testing features", id: uuid.v4() },
            { host: "0.0.0.0", name: "Public Server", description: "The official public server", id: uuid.v4() }
        ]

        else return sentinel.servers.get();
    }

    window.servers.save = function (servers) {
        if (DEV_ENVIRONMENT) return;
        else return sentinel.servers.save(servers);
    }
}