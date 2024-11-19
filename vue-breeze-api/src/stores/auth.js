import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
    }),
    getters: {
        user: (state) => state.authUser,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },
        async handleLogin(data) {
            await this.getToken();
            await axios.post("/login", {
                email: data.email,
                password: data.password,
            });
            // acces to router comes from main.js -> useRaw
            this.router.push("/");
        },
        async handleRegister(data) {
            await this.getToken();
            await axios.post("/register", {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            });
            this.router.push("/");
        },
        async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
        },
        async handleForgotPassword(email) {
            await axios.post("/forgot-password", {
                email: email,
            });
        },
    },
});
