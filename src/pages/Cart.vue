<template>
  
</template>

<script>
import { mapState } from 'vuex';
export default {
    components: {
        
    },
    computed: {
        ...mapState(['cart']),
        
        passwordVisible() {
            return this.type === 'password';
        },
        eyeIconSource() {
            return this.passwordVisible
                ? require('@/assets/img/eye-show.svg')
                : require('@/assets/img/eye-hide.svg');
        }
    }
}
</script>

<style>

</style>