module.exports = {
  apps: [
    {
      name: "development",
      script: "./src/index.js",
      cwd: "/var/www/personal-website-dev/backend/",
      watch: true, // auto-reload on file changes (useful for dev)
      node_args: '-r dotenv/config',
      env: {
        NODE_ENV: "development",
        PORT: 5000
      },
      // Logging
      error_file: "/var/www/personal-website-dev/backend/logs/error.log",
      out_file: "/var/www/personal-website-dev/backend/logs/out.log",
      log_file: "/var/www/personal-website-dev/backend/logs/combined.log",
      time: true,
      // Auto-restart settings
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s"
    },
    {
      name: "staging",
      script: "./src/index.js",
      cwd: "/var/www/personal-website-staging/backend/",
      watch: false, // usually staging is more stable
      node_args: '-r dotenv/config',
      env: {
        NODE_ENV: "staging",
        PORT: 5001
      },
      // Logging
      error_file: "/var/www/personal-website-staging/backend/logs/error.log",
      out_file: "/var/www/personal-website-staging/backend/logs/out.log",
      log_file: "/var/www/personal-website-staging/backend/logs/combined.log",
      time: true,
      // Auto-restart settings
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      max_memory_restart: "300M"
    },
    {
      name: "production",
      script: "./src/index.js",
      cwd: "/var/www/personal-website-prod/backend/",
      watch: false, // production should not auto-reload
      instances: 1, // single instance; can use cluster if needed
      exec_mode: "cluster", // Enable cluster mode for better performance
      node_args: '-r dotenv/config',
      env: {
        NODE_ENV: "production",
        PORT: 5002
      },
      // Logging
      error_file: "/var/www/personal-website-prod/backend/logs/error.log",
      out_file: "/var/www/personal-website-prod/backend/logs/out.log",
      log_file: "/var/www/personal-website-prod/backend/logs/combined.log",
      time: true,
      // Auto-restart settings
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      max_memory_restart: "200M"
    }
  ]
};