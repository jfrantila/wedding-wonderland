<template>
    <nav :class="containerClass">
        <button @click="toggleMenubar" class="menu-bar navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navi" :title="menuBarOpen ? 'Close menu' : 'Open menu'" aria-controls="navi"
            aria-expanded="false" aria-label="Toggle Menu">
            <NavIcon />
            <span style="verticalAlign: sub">{{ menuBarOpen ? '' : 'Menu' }}</span>
        </button>
        <div class="collapse navbar-collapse" id="navi">
            <ul class="nav">
                <NavItem navText="Home" viewPath="/" @click-nav="changeToImage" />
                <!-- <NavItem navText="Services" viewPath="/services" @click-nav="changeToBeige" /> -->
                <button @click="$emit('to-services')" class="nav-link active menu-nav">Services</button>
                <NavItem navText="Contact" viewPath="/contact-info" @click-nav="changeToBeige" />
                <button @click="openPortfolio" class="nav-link active menu-nav">Photo Gallery</button>
            </ul>
        </div>
    </nav>
</template>

<script>
import { useBackgroundImage } from '../stores/background'
import NavItem from './NavItem.vue'
import NavIcon from './NavIcon.vue'
import PhotoSwipe from 'photoswipe'
import Photo1 from '../assets/1.jpg'
import Photo2 from '../assets/2.jpg'
import Photo3 from '../assets/3.jpg'
import Photo4 from '../assets/4.jpg'
import Photo5 from '../assets/5.jpg'

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
                        src: Photo1,
                        width: 1467,
                        height: 865,
                        alt: 'image 1'
                    },
                    {
                        src: Photo2,
                        width: 1502,
                        height: 1000,
                        alt: 'image 2'
                    },
                    {
                        src: Photo3,
                        width: 1502,
                        height: 1000,
                        alt: 'image 3',
                    },
                    {
                        src: Photo4,
                        width: 4928,
                        height: 3280,
                        alt: 'image 4',
                    },
                    {
                        src: Photo5,
                        width: 4691,
                        height: 3122,
                        alt: 'image 5',
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
        changeToBeige() {
            useBackgroundImage().changeBackgroundImageToBeige()
        },
        changeToImage() {
            useBackgroundImage().changeBackgroundImageToImage()
        },
        openPortfolio() {
            const pswp = new PhotoSwipe(this.options)
            pswp.init()
        }
    },
    computed: {
        containerClass() {
            return useBackgroundImage().$state.backgroundImg ? 'nav-container' : 'nav-container dark-text'
        }
    }
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

.menu-bar :hover {
    color: rgba(180, 131, 150, 0.527) !important;
}

/* Whole navigation container */
.nav-container {
    float: left;
    font-family: menu-font;
    padding: 1rem;
    display: block;
    text-align: start;
    position: sticky !important;
    top: 0;
    color: rgba(255, 255, 255, 0.719);
}

.dark-text {
    color: #302416be;
}
</style>