import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import ForgotPassword from "../components/ForgotPassword.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/forgot-password",
        name: "Forgot password",
        component: ForgotPassword,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
