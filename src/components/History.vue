<template>
    <div class="history" :class="historyClass" :style="historyStyle" @click="onClick">
        {{currentHistoryStep.text}}
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "History",
    computed: {
        ...mapGetters({
            currentHistoryStep: "history/currentHistory",
            windowSizes: "windowSize/sizes"
        }),
        historyStyle() {
            return {
                'width': `${this.windowSizes?.mainWidth}px`,
                'bottom': `${this.windowSizes?.footerHeight + 50}px`
            }
        },
        historyClass() {
            return {
                'active': !this.currentHistoryStep?.simpleNext
            }
        }
    },
    methods: {
        ...mapActions({
            next: "history/NEXT",
            historyStop: "history/STOP",
            setTaskAllow: "tasks/SET_ALLOW"
        }),
        onClick() {
            if(!this.currentHistoryStep?.simpleNext) return;
            this.next();
            if(!this.currentHistoryStep) {
                this.setTaskAllow(3);
                this.historyStop();
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    @import "@/assets/styles"
    .history
        cursor: pointer
        position: fixed
        padding: 20px
        background: gainsboro
        border: 4px solid #c0c0c0
        border-radius: 20px
        font-size: 18px
        -webkit-touch-callout: none
        -webkit-user-select: none
        -khtml-user-select: none
        -moz-user-select: none    
        -ms-user-select: none    
        user-select: none
    .history.active
        border: 4px solid $rare
</style>