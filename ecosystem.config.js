module.exports = {
    apps: [{
        name: "students",
        script: "./index.js",
        watch: true,
        env_local: {
            "NODE_ENV": "local",
            "API_DESCRIPCION": "Estás ejecutando API en modo desarrollador"
        },
        env_production: {
            "NODE_ENV": "production",
            "API_DESCRIPCION": "Estás ejecutando API en modo productivo! Ten cuidado!!!"
        }
    }]
};
