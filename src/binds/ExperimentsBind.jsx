export default function ExperimentsBind(DEV_ENVIRONMENT = false) {
    window.experiments.get = function () {
        if (DEV_ENVIRONMENT) return [
            {
                id: "EXPERIMENT_LEGACY_INVENTORY_SUPPORT",
                display: "1.x/2.x inventory enhancements",
                state: false
            },
            {
                id: "EXPERIMENT_ACHIEVEMENTSV1_SUPPORT",
                display: "Support for V1 achievement system (gameplay rewards)",
                state: false
            },
            {
                id: "EXPERIMENT_MMO_SERVER_SUPPORT",
                display: "Multiplayer Grid support (EXTREMELY WIP)",
                state: false
            }
        ]

        else return sentinel.experiments.get();
    }

    window.experiments.save = function (experiments) {
        if (DEV_ENVIRONMENT) return;
        else return sentinel.experiments.save(experiments);
    }
}