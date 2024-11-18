### Source

> https://www.youtube.com/watch?v=YS0MV285KW4

# Source Git

> https://github.com/tonyxhepa/vue-authentication-breeze-api

# This Git

> https://github.com/samedan/2411_vue_laravel_auth_breeze

### Install laravel

> composer create-project laravel/laravel:^10.0 example-app

> DBB & php artisan migrate

### Install Breeze

> composer require laravel/breeze --dev
> php artisan breeze:install api

### Frontend

> Indicate server URL: /src/axios.js -> axios.defaults.baseURL = "http://localhost:8000";

## Create State

> npm install pinia
> main.js -> import { createPinia } from "pinia";

## Create router

> /src/rouer/index.js
> main.js -> app.use(pinia); app.use(router);

## Tailwind CSS

> https://tailwindcss.com/docs/guides/vite#vue

# Tailwind Play Console

> https://play.tailwindcss.com/

### Create default user

> php artisan migrate:fresh --seed
