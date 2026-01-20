module.exports = {
  apps: [
    {
      name: "development",
      script: "./src/index.js",
      cwd: "/var/www/personal-website-dev/backend/", // current working directory
      watch: true, // auto-reload on file changes (useful for dev)
      env: {
        NODE_ENV: "development",
        PORT: 5000
      }
    },
    {
      name: "staging",
      script: "./src/index.js",
      cwd: "/var/www/personal-website-staging/backend/",
      watch: false, // usually staging is more stable
      env: {
        NODE_ENV: "staging",
        PORT: 5001
      }
    },
    {
      name: "production",
      script: "./src/index.js",
      cwd: "/var/www/personal-website-prod/backend/",
      watch: false, // production should not auto-reload
      instances: 1, // single instance; can use cluster if needed
      autorestart: true,
      max_memory_restart: "200M",
      env: {
        NODE_ENV: "production",
        PORT: 5002
      }
    }
  ]
};
