module.exports = {
    "plugins": ["prettier"],
    "extends": ["standard", "prettier", "plugin:react/recommended", "eslint:recommended", "plugin:import/errors", "plugin:import/warnings"],
    "parser": "babel-eslint",
    "rules": {
        "prettier/prettier": "error",
        "no-console": 0,
    },
    "globals": {
        "LIVEUPDATE": true,
        "LIVE_UPDATE_URL": true,
        "cordova": true,
    },
};