<template>
    <footer class="app-footer full">
        <div class="logo"><img src="https://bobmatyas.github.io/fm-fylo-dark-landing-page/images/logo.svg"></div>
        <div class="container flex">
            <div class="about-us">
                <div class="details">
                    <img src="@/assets/img/icon-location.svg" class="contact-icon  location">
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div class="details flex flex-column">
                    <div v-for="opt in options" :key="opt.icon">
                        <img :src="opt.icon" class="contact-icon ">
                        <p class="text">{{ opt.info }}</p>
                    </div>
                </div>
            </div>
            <ul class="footer-nav clean-list flex flex-column" v-for="list in lists" :key="lists.id">
                <router-link v-for="link in list.links" to="/" :key="link">{{ link }}</router-link>
            </ul>
            <div class="sm-icons">

                <span v-for="icon in icons" :class="[icon, 'sm-icons fa-brands']" :key="icon"></span>
            </div>
        </div>
    </footer>
</template>

<script>
import iconPhone from '@/assets/img/icon-phone.svg'
import iconEmail from '@/assets/img/icon-email.svg'
export default {
    name: 'app-footer',
    data() {
        return {
            options: [

                { icon: iconPhone, info: '+1-543-123-4567' },
                { icon: iconEmail, info: 'example@fylo.com' },
            ],
            lists: [
                { links: ['About Us', 'Jobs', 'Press', 'Blog'], id: 'ul101' },
                { links: ['Contact Us', 'Terms', 'Privacy'], id: 'ul102' }
            ],
            icons: ['fa-facebook-f', 'fa-twitter', 'fa-instagram']
        }
    }
}
</script>
