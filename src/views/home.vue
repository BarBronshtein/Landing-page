<template>
    <section class="home">
        <!-- Hero -->
        <div class="hero flex flex-column pos-relative">
            <!-- <div class="img-container"> <img src="src/assets/img/illustration-intro.png"></div> -->
            <div class="info">
                <h2>All your files in one secure location, accessible anywhere.</h2>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need,
                    share
                    and
                    collaborate with friends family, and co-workers.</p>
                <button class="cta-btn" to="/">Get Started</button>
            </div>
        </div>
        <!-- <img src="src/assets/img/bg-curvy-desktop.svg" class="pos-absolute img-background"> -->
        <div class="background-color pos-absolute"></div>
        <!-- About Us -->
        <div class="about-us">
            <div v-for="item in items" class="item" :key="item.title">
                <div class="svg-container">
                    <img :src="item.svg" alt="">
                </div>
                <h4>{{ item.title }}</h4>
                <p>{{ item.info }}</p>
            </div>
        </div>
        <!-- More Info -->
        <div class="more-info full">
            <!-- <div class="img-container"><img src="src/assets/img/illustration-stay-productive.png"></div> -->
            <div class="info">
                <h2>Stay productive,
                    wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.</p>
                <router-link to="/" class="active">
                    <span>See how Fylo works</span>
                    <span class="link-icon">

                        <svg class="icon icon-arrow-right2">
                            <use xlink:href="#icon-arrow-right2"></use>
                            <symbol id="icon-arrow-right2" viewBox="0 0 32 32">
                                <path
                                    d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z">
                                </path>
                            </symbol>
                        </svg>
                    </span>

                    <div class="underline"></div>
                </router-link>
            </div>
        </div>
        <!-- Testimonials -->
        <div class="testimonials pos-relative full">
            <!-- <img src="src/assets/img/bg-quotes.png" class="pos-absolute" /> -->
            <div v-for="(testimonial, i) in testimonials" :key="testimonial.name" class="testimonial">
                <p>{{ testimonial.info }}</p>
                <div class="testimonial-personnel">
                    <div class="img-container"><img :src="`src/assets/img/profile-${i + 1}.jpg`"
                            :alt="testimonial.name">
                    </div>
                    <div>
                        <h6>{{ testimonial.name }}</h6>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import { itemsService } from '../services/items.js'
export default {
    name: 'home',
    data() {
        return {
            items: itemsService.getItems(),
            testimonials: [
                { info: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Satish Patel' },
                { info: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Bruce McKenzie' },
                { info: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Iva Boyd' }
            ]
        }
    },
}
</script>
