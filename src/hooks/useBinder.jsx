import { useState } from "react";

export default function useBinder(DEV_ENVIRONMENT=false) {
    const [loaded, setLoaded] = useState(false);

    window.servers = {};

    function initBinder() {
        window.servers.getServers = function () {
            if (DEV_ENVIRONMENT) return [];
            return sentinel.getServers();
        }

        window.servers.getExperiments = function () {
            if (DEV_ENVIRONMENT) return [{ "EXPERIMENT_LEGACY_INVENTORY_SUPPORT": false, "EXPERIMENT_ACHIEVEMENTSV1_SUPPORT": false, "EXPERIMENT_MMO_SERVER_SUPPORT": false }];
            return sentinel.getExperiments();
        }

        window.servers.getEmulationSoftwarePackages = function () {
            if (DEV_ENVIRONMENT) return [{ name: "Project Edge", id: "projectedge" }, { name: "SoDOff", id: "sodoff" }];
            return sentinel.getEmulationSoftwarePackages();
        }

        window.servers.saveExperiments = function (experiments) {
            if (DEV_ENVIRONMENT) return;
            return sentinel.saveExperiments(experiments);
        }

        window.servers.saveServers = function (servers) {
            if (DEV_ENVIRONMENT) return;
            return sentinel.saveServers(servers);
        }

        if (!loaded) setLoaded(true);
    }

    if (DEV_ENVIRONMENT) initBinder();

    window.servers.sentinelInit = () => {
        initBinder();
    }

    return [loaded];
}