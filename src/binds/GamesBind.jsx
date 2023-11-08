export default function GamesBind(DEV_ENVIRONMENT = false) {
    window.games.getCurrentDescriptor = function() {
        if (DEV_ENVIRONMENT) return { name: "School of Dragons", id: "sod", icon: "/assets/server_banner.png" };
        else return sentinel.games.getCurrentDescriptor();
    }

    window.games.setCurrentDescriptor = function (desciptor) {
        if (DEV_ENVIRONMENT) return;
        else return sentinel.games.setCurrentDescriptor(desciptor);
    }

    window.games.getDescriptors = function() {
        if (DEV_ENVIRONMENT) return [{ name: "School of Dragons", id: "school_of_dragons", icon: "/assets/server_banner.png", version: "3.31.0" }, { name: "Fer.al", id: "fer_al", icon: "/assets/games/Fer_al.png", version: "3.4.1" }];
        else return sentinel.games.getDescriptors();
    }

    window.games.getVersions = function() {
        if (DEV_ENVIRONMENT) return ["3.31.0"];
        else return sentinel.games.getVersions();
    }

    window.games.setCurrentEmulationSoftware = function (software) {
        if (DEV_ENVIRONMENT) return;
        else return sentinel.games.setCurrentEmulationSoftware(software);
    }

    window.games.getCurrentEmulationSoftware = function () {
        if (DEV_ENVIRONMENT) return window.games.getEmulationSoftwares()[0];
        else return sentinel.games.getCurrentEmulationSoftware();
    }

    window.games.getEmulationSoftwares = function () {
        if (DEV_ENVIRONMENT) return [{ name: "Project Edge", id: "projectedge", icon: "/assets/games/SoD.png" }, { name: "SoDOff", id: "sodoff" }];
        else return sentinel.games.getEmulationSoftwares();
    }
}