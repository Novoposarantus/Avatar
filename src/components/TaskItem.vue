<template>
    <div class="task-item" :class="itemClass" @click="getReward">
        <div class="text">{{task.name}}</div>
        <font-awesome-icon v-if="task.actived" class="icon" icon="check"/> 
    </div>
</template>

<script>
import {historySteps} from '@/constants';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "TaskItem",
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            currentHistoryStep: "history/currentHistory"
        }),
        itemClass() {
            return {
                'allow': this.task.allow
            }
        },
        canGetReward() {
            return !this.currentHistoryStep || this.currentHistoryStep?.activeTask
        }
    },
    methods: {
        ...mapActions({
            addCoins: "userInfo/ADD_COINS",
            setTaskActiveted: "tasks/SET_ACTIVED",
            historyNext: "history/NEXT"
        }),
        getReward() {
            if(!this.task.allow || !this.canGetReward) return;
            if(this.currentHistoryStep?.step == historySteps._14
            || this.currentHistoryStep?.step == historySteps._24) {
                this.historyNext();
            }
            this.addCoins(this.task.reward);
            this.setTaskActiveted(this.task.id);
        }
    }
}
</script>

<style lang="sass" scoped>
    @import "@/assets/styles"
    .task-item
        display: flex
        justify-content: space-between
        align-items: center
        background: $task-disable
        margin: 10px 5px
        padding: 0 20px
        border-radius: 20px
        .text
            padding: 20px 0
    .task-item.allow
        cursor: pointer
        background: $task-allow
    @media screen and (max-width: $sm - 1px)
        .task-item
            font-size: 16px
        .icon
            font-size: 40px
    @media screen and (min-width: $sm)
        .task-item
            font-size: 20px
        .icon
            font-size: 60px
    .icon
        color: $task-allow   
</style>