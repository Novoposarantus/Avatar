<template>
    <component class="wrapper" :is="currentPage"/>
</template>

<script>
import {pages} from '@/constants';

export default {
    name: "Main",
    computed: {
        currentPage() {
            return pages[this.$router.route.name].component;
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        flex: 1 0 auto
        overflow-y: auto
</style>