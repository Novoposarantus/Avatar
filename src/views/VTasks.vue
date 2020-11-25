<template>
    <div class="main-page">
        <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
        />
    </div>
</template>

<script>
import TaskItem from '@/components/TaskItem';
import { mapGetters } from 'vuex';

export default {
    name: "VTasks",
    components: {
        TaskItem
    },
    computed: {
        ...mapGetters({
            tasks: "tasks/tasks"
        }),
        isTasksLoading() {
            return this.$wait.loading("tasks");
        }
    }
}
</script>