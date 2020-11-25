<template>
    <component :style="mainStyle" class="wrapper" :is="currentPage"/>
</template>

<script>
import {pages} from '@/constants';
import { mapGetters } from 'vuex'

export default {
    name: "Main",
    computed: {
        ...mapGetters({
            windowSizes: "windowSize/sizes"
        }),
        currentPage() {
            return pages[this.$router.route.name].component;
        },
        mainStyle() {
            return {
                'margin-top': `${this.windowSizes?.headerHeight}px`,
                'margin-bottom': `${this.windowSizes?.footerHeight}px`
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        flex: 1 0 auto
        overflow-y: auto
</style>