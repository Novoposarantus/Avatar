<template>
    <div class="footer">
        <button
            class="text-center menu-icon"
            :class="shopClass"
            @click="toShop"
        >
            <font-awesome-icon size="2x" icon="shopping-cart"/>         
        </button>
        <button 
            class="text-center menu-icon"
            :class="mainClass"
            @click="toMain"
        >
            <font-awesome-icon size="2x" icon="user-astronaut"/>         
        </button>
        <button 
            class="text-center menu-icon"
            :class="tasksClass"
            @click="toTasks"
        >
            <font-awesome-icon size="2x" icon="tasks"/>         
        </button>
    </div>
</template>

<script>
import {pages} from '@/constants';

export default {
    name: 'Footer',
    computed: {
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
        border-top: 1px solid $border-color
        display: flex
        justify-content: space-between
        flex: 0 0 auto
        background: #5757ff
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
            background: #3d3df5
        .menu-icon:last-child
            width: 34%
</style>