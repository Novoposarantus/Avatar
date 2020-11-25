<template>
    <div class="main-page">
        <Spinner
            v-if="isTasksLoading"
            class="spinner"
        />
        tasks
    </div>
</template>

<script>
import Spinner from '@/components/loading/Spinner';

export default {
    name: "VTasks",
    components: {
        Spinner
    },
    computed: {
        isTasksLoading() {
            return this.$wait.loading("tasks");
        }
    }
}
</script>