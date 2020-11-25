<template>
    <div class="footer" :style="footerStyle">
        <button
            class="text-center menu-icon"
            :class="shopClass"
            @click="toShop"
        >
            <font-awesome-icon class="icon" icon="shopping-cart"/>         
        </button>
        <button 
            class="text-center menu-icon"
            :class="mainClass"
            @click="toMain"
        >
            <font-awesome-icon class="icon" icon="user-astronaut"/>         
        </button>
        <button 
            class="text-center menu-icon"
            :class="tasksClass"
            @click="toTasks"
        >
            <font-awesome-icon class="icon" icon="tasks"/>         
        </button>
    </div>
</template>

<script>
import {pages} from '@/constants';
import { mapGetters } from 'vuex'

export default {
    name: 'Footer',
    computed: {
        ...mapGetters({
            windowSizes: "windowSize/sizes"
        }),
        shopClass() {
            return {
                'active': this.$router.route.name == pages.shop.name
            }
        },
        mainClass() {
            return {
                'active': this.$router.route.name == pages.main.name
            }
        },
        tasksClass() {
            return {
                'active': this.$router.route.name == pages.tasks.name
            }
        },
        footerStyle() {
            return {
                'width': `${this.windowSizes?.mainWidth}px`
            }
        }
    },
    methods: {
        toShop() {
            this.$router.push({name: pages.shop.name});
        },
        toMain() {
            this.$router.push({name: pages.main.name});
        },
        toTasks() {
            this.$router.push({name: pages.tasks.name});
        }
    }
}
</script>

<style lang="sass" scoped>
    @import "@/assets/styles"
    .footer
        position: fixed
        bottom: 0
        border-top: 1px solid $border-color
        display: flex
        justify-content: space-between
        flex: 0 0 auto
        background: $menu
        .menu-icon
            cursor: pointer
            width: 33%
            padding: 5px
            color: white
            border: none
            outline: none
            background: transparent
        .menu-icon.active,
        .menu-icon:hover
            background: $menu-hover
        .menu-icon:last-child
            width: 34%
    @media screen and (max-width: $sm - 1px)
        .icon
            font-size: 64px
    @media screen and (min-width: $sm)
        .icon
            font-size: 40px
        
    
</style>