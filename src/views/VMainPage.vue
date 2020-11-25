<template>
    <div class="main-page">
        <Spinner
            v-if="isAvatarLoading"
            class="spinner" 
        />
        <img 
            v-else 
            class="avatar" 
            :src="AvatarImage"
        >
    </div>
</template>

<script>
import AvatarImage from '@/assets/img/Avatar.png'
import Spinner from '@/components/loading/Spinner';

export default {
    name: "VMainPage",
    components: {
        Spinner
    },
    data() {
        return {
            AvatarImage
        }
    },
    computed: {
        isAvatarLoading() {
            return this.$wait.loading("avatar");
        }
    }
}
</script>

<style lang="sass" scoped>
    .main-page
        display: flex
        align-items: flex-end
        justify-content: center
    .spinner
        margin-bottom: 50vh
    .avatar
        height: 85vh
</style>