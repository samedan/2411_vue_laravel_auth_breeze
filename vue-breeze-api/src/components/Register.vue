<script setup></script>

<template>
    <!-- ====== Forms Section Start -->
    <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div
                        class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                    >
                        <div class="mb-10 text-center md:mb-16">Laraveller</div>
                        <form>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                                <div class="flex">
                                    <span class="text-red-400 text-sm m-2 p-2"
                                        >name</span
                                    >
                                </div>
                            </div>
                            <div class="mb-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                                <div class="flex">
                                    <span class="text-red-400 text-sm m-2 p-2"
                                        >email</span
                                    >
                                </div>
                            </div>
                            <div class="mb-6">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                                <div class="flex">
                                    <span class="text-red-400 text-sm m-2 p-2"
                                        >passwoord</span
                                    >
                                </div>
                            </div>
                            <div class="mb-6">
                                <input
                                    type="password"
                                    placeholder="Password Confirmation"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                            <div class="mb-10">
                                <button
                                    type="submit"
                                    class="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <p class="text-base text-[#adadad]">
                            <router-link
                                to="/login"
                                class="text-primary hover:underline"
                            >
                                Sign In
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
