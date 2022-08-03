<template>
    <header class="app-header flex">
        <div class="logo flex">
            <img src="https://bobmatyas.github.io/fm-fylo-dark-landing-page/images/logo.svg" alt="logo">
            <h1 class="logo-text"></h1>
        </div>
        <nav class="main-nav flex">
            <router-link to="/">Features</router-link>
            <router-link to="/">Team</router-link>
            <router-link to="/">Sign in</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'app-header'
}
</script>
