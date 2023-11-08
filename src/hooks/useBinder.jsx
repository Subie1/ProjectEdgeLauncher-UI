import { useState } from "react"
import useLocalization from "./useLocalization"
import ExperimentsBind from "../binds/ExperimentsBind"
import ServersBind from "../binds/ServersBind"
import GamesBind from "../binds/GamesBind"
import PayloadsBind from "../binds/PayloadsBind"

export default function useBinder(DEV_ENVIRONMENT = false) {
    useLocalization(DEV_ENVIRONMENT);

    if (!window.servers) window.servers = {};
    if (!window.experiments) window.experiments = {};
    if (!window.games) window.games = {};
    if (!window.payloads) window.payloads = {};

    const [loaded, setLoaded] = useState(false);

    function initBinder() {
        ExperimentsBind(DEV_ENVIRONMENT);
        ServersBind(DEV_ENVIRONMENT);
        GamesBind(DEV_ENVIRONMENT);
        PayloadsBind(DEV_ENVIRONMENT);

        window.localization.init();
        if (!loaded) setLoaded(true);
    }

    if (DEV_ENVIRONMENT) initBinder();

    window.servers.sentinelInit = () => {
        initBinder();
    }

    return [loaded];
}