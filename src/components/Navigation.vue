<template>
    <nav class="nav-container">
        <button @click="toggleMenubar" :class="['menu-bar', 'navbar-toggler', menuBarOpen ? 'light' : 'dark']" type="button"
            data-bs-toggle="collapse" data-bs-target="#navi" :title="menuBarOpen ? 'Close menu' : 'Open menu'"
            aria-controls="navi" aria-expanded="false" aria-label="Toggle Menu">
            <NavIcon />
            <span>{{ menuBarOpen ? '' : 'Menu' }}</span>
        </button>
        <div class="collapse navbar-collapse" id="navi">
            <ul class="nav">
                <router-link to="/" class="nav-link menu-nav">Home</router-link>
                <router-link to="services" class="nav-link menu-nav">Services</router-link>
                <router-link to="contact-info" class="nav-link menu-nav">Contact</router-link>
                <button @click="openPortfolio" class="nav-link menu-nav">Gallery</button>
            </ul>
        </div>
    </nav>
</template>

<script>
import NavItem from './NavItem.vue'
import NavIcon from './NavIcon.vue'
import PhotoSwipe from 'photoswipe'
import Photo1 from '../assets/1.jpg'
import Photo2 from '../assets/2.jpg'
import Photo3 from '../assets/3.jpg'
import Photo4 from '../assets/4.jpg'
import Photo5 from '../assets/5.jpg'
import Photo6 from '../assets/6.jpg'
import Photo7 from '../assets/7.jpg'
import Photo8 from '../assets/8.jpg'
import Photo9 from '../assets/9.jpg'
import Photo10 from '../assets/10.jpg'
import Photo11 from '../assets/11.jpg'
import Photo12 from '../assets/12.jpg'
import Photo13 from '../assets/13.jpg'
import Photo14 from '../assets/14.jpg'
import Photo15 from '../assets/15.jpg'
import Photo16 from '../assets/16.jpg'
import Photo17 from '../assets/17.jpg'
import Photo18 from '../assets/18.jpg'
import Photo19 from '../assets/19.jpg'
import Photo20 from '../assets/20.jpg'
import Photo21 from '../assets/21.jpg'

export default {
    name: 'Navigation',
    components: { NavItem, NavIcon },
    data() {
        return {
            menuBarOpen: false,
            options: {
                index: 0,
                dataSource: [
                    {
                        src: Photo5,
                        width: 4691,
                        height: 3122,
                        alt: 'image 1',
                    },
                    {
                        src: Photo14,
                        width: 3000,
                        height: 1508,
                        alt: 'image 2',
                    },
                    {
                        src: Photo15,
                        width: 1280,
                        height: 852,
                        alt: 'image 5',
                    },
                    {
                        src: Photo13,
                        width: 2048,
                        height: 1228,
                        alt: 'image 5',
                    },
                    {
                        src: Photo6,
                        width: 3028,
                        height: 4928,
                        alt: 'image 5',
                    },
                    {
                        src: Photo7,
                        width: 1705,
                        height: 1075,
                        alt: 'image 5',
                    },
                    {
                        src: Photo10,
                        width: 1502,
                        height: 1000,
                        alt: 'image 5',
                    },
                    {
                        src: Photo11,
                        width: 1217,
                        height: 843,
                        alt: 'image 5',
                    },
                    {
                        src: Photo12,
                        width: 2048,
                        height: 1363,
                        alt: 'image 5',
                    },
                    {
                        src: Photo16,
                        width: 1280,
                        height: 852,
                        alt: 'image 16',
                    },
                    {
                        src: Photo8,
                        width: 1502,
                        height: 1000,
                        alt: 'image 5',
                    },
                    {
                        src: Photo9,
                        width: 1922,
                        height: 1691,
                        alt: 'image 5',
                    },
                    {
                        src: Photo1,
                        width: 1467,
                        height: 865,
                        alt: 'image 3'
                    },
                    {
                        src: Photo2,
                        width: 1502,
                        height: 1000,
                        alt: 'image 4'
                    },
                    {
                        src: Photo3,
                        width: 1502,
                        height: 1000,
                        alt: 'image 5',
                    },
                    {
                        src: Photo4,
                        width: 4928,
                        height: 3280,
                        alt: 'image 6',
                    },
                    {
                        src: Photo17,
                        width: 1502,
                        height: 1000,
                        alt: 'image 17',
                    },
                    {
                        src: Photo18,
                        width: 3243,
                        height: 4872,
                        alt: 'image 18',
                    },
                    {
                        src: Photo19,
                        width: 3280,
                        height: 4928,
                        alt: 'image 19',
                    },
                    {
                        src: Photo20,
                        width: 5299,
                        height: 3533,
                        alt: 'image 20',
                    },
                    {
                        src: Photo21,
                        width: 2694,
                        height: 4047,
                        alt: 'image 21',
                    },
                ],
                showHideAnimationType: 'none'
            }
        }
    },
    methods: {
        toggleMenubar() {
            this.menuBarOpen = !this.menuBarOpen
        },
        openPortfolio() {
            const pswp = new PhotoSwipe(this.options)
            pswp.init()
        },
    },
}
</script>

<style>
span {
    vertical-align: text-bottom;
}

/* Menu icon and Menu text */
button.menu-bar {
    background: none;
    border: none;
    font-size: 28px;
}

.menu-bar.light-hover :hover,
.light,
.router-link-active {
    color: rgba(180, 131, 150, 0.527) !important;
}

.navbar-collapse {
    display: flex;
}

/* Whole navigation container */
.nav-container {
    align-self: center !important;
    font-family: menu-font;
    padding-top: 0.5rem;
    position: fixed;
    display: flex;
    top: 0;
    z-index: 5;
    /*color: rgba(255, 255, 255, 0.719);*/
}

.dark {
    color: #302416be !important;
}

@media (min-width: 32rem) {
    .nav-container {
        margin-top: 0.8rem;
        font-size: 23px;
    }

    svg {
        margin-bottom: 8px;
    }
}

@media screen and (max-width: 32rem) {
    .nav-container {
        font-size: 20px;
        padding-top: 20px;
    }

    span {
        font-size: 23px !important;
    }
}
</style>