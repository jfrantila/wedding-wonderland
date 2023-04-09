<template>
    <li class="nav-item">
        <router-link class="nav-link active menu-nav" aria-current="page" :to="viewPath" @click="$emit('click-nav')">{{
            navText
        }}</router-link>
    </li>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        navText: String,
        viewPath: String
    }
}
</script>

<style>
.nav {
    display: inherit;
}

/* Single menu item */
.menu-nav {
    color: inherit !important;
    background-color: none;
    border: none;
    text-align: start;
    text-decoration: none;
}

.menu-nav:hover {
    color: rgba(180, 131, 150, 0.527) !important;
    background-color: none;
    border: none;
}

a {
    cursor: pointer;
}
</style>