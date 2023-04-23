<template>
    <nav :class="['nav-container', darkNavMenu ? 'dark' : null]">
        <button @click="toggleMenubar" :class="['menu-bar', 'navbar-toggler', darkNavMenu ? 'dark-hover' : 'light-hover']"
            type="button" data-bs-toggle="collapse" data-bs-target="#navi" :title="menuBarOpen ? 'Close menu' : 'Open menu'"
            aria-controls="navi" aria-expanded="false" aria-label="Toggle Menu">
            <NavIcon />
            <span style="verticalAlign: sub">{{ menuBarOpen ? '' : 'Menu' }}</span>
        </button>
        <div class="collapse navbar-collapse" id="navi">
            <ul class="nav">
                <button @click="handleClick('home', false)" class="nav-link active menu-nav">Home</button>
                <button @click="handleClick('services', false)" class="nav-link active menu-nav">Services</button>
                <button @click="handleClick('contact-info', true)" class="nav-link active menu-nav">Contact</button>
                <button @click="openPortfolio" class="nav-link active menu-nav">Photo Gallery</button>
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

export default {
    name: 'Navigation',
    components: { NavItem, NavIcon },
    data() {
        return {
            darkNavMenu: false,
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
        handleClick(endpoint, changeColor) {
            this.darkNavMenu = changeColor
            this.$emit('scroll-to', endpoint)
        }
    },
}
</script>

<style>
/* Menu icon and Menu text */
button.menu-bar {
    background: none;
    border: none;
    font-size: 28px;
    padding-left: 0;
}

.menu-bar.light-hover :hover {
    color: rgba(180, 131, 150, 0.527) !important;
}

.menu-bar.dark-hover :hover {
    color: rgba(255, 255, 255, 0.719) !important;
}

/* Whole navigation container */
.nav-container {
    font-family: menu-font;
    padding: 1rem;
    display: block;
    text-align: start;
    position: fixed;
    top: 0;
    z-index: 5;
    color: rgba(255, 255, 255, 0.719);
}

.dark {
    color: #302416be !important;
}

@media (min-width: 57rem) {
    .nav-container {
        margin-left: 1.5rem;
        margin-top: 0.5rem;
    }
}

@media screen and (max-width: 32rem) {
    .nav-container {
        font-size: 20px;
    }

    span {
        font-size: 20px !important;
    }
}

/*@media (max-width: 48rem) {
    .nav-container {
        margin-left: 0;
        margin-top: 0.7rem;
        display: flex;
    }

    .nav {
        display: flex !important;
    }
}*/
</style>