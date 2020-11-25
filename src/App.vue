<template>
  <div id="app">
    <div class="main-wrapper">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import Header from '@/components/layout/Header';
import {startGame} from '@/helpers';
import {mapMutations} from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  methods: {
    ...mapMutations({
      setWindowSize: "windowSize/SET_SIZE"
    }),
    matchWindow() {
        this.setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight
        });
    }
  },
  created() {
    startGame(this.$store);
  },
  mounted() {
    this.matchWindow();
    this.$resize.on(this.matchWindow);
    window.addEventListener('resize', this.$resize.event);
  },
  beforeDestroy() {
    this.$resize.off(this.matchWindow);
    window.removeEventListener('resize', this.$resize.event);
  }
}
</script>

<style lang="sass" >
  @import "@/assets/styles"
  @import "@/assets/styles/default-styles"
  *
    box-sizing: border-box
  html, body
    width: 100%
    padding: 0
    margin: 0
    .main-wrapper
      display: flex
      flex-direction: column
      margin: 0 auto
      min-height: 100vh
      width: 100%
      outline: 1px solid $border-color
  
  @media screen and (min-width: $sm)
    .main-wrapper
        max-width: 480px
  @media screen and (min-width: $md)
    .main-wrapper
        max-width: 700px
  ::-webkit-scrollbar 
    width: 5px
  

  ::-webkit-scrollbar-track
    box-shadow: inset 0 0 5px #272727
    border-radius: 10px
  
  
  ::-webkit-scrollbar-thumb 
    background: #989898
    border-radius: 10px
  
</style>
