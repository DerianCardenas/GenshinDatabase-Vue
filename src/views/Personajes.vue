<template>
  <div class="about">
    <div :class="{'mobile-display' : mobile == true ,'normal-display' : mobile !=true }">
      <section class="cont-description">
        <img class="logo-princ" alt="Vue logo" src="../assets/logo.png">
        <p class="title">
          LISTA DE PERSONAJES
        </p>
        <div class="container-list">
          <div class="charac-list" v-for="(personaje,index) of personajes" :key="index" >
            <CharIconCardVue
              :nombre="personaje.nombre"
              :perfil="personaje.perfil"
              :cumple="personaje.cumple"
              :rareza="personaje.rareza"
              :titulo="personaje.titulo"
              :sexo="personaje.sexo"
              :region="personaje.region"
              :afiliacion="personaje.afiliacion"
              :elemento="personaje.elemento"
              :arma="personaje.arma"
              />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import CharIconCardVue from '@/components/CharIconCard.vue';
export default {
  name:"PersonajesView",
  components: {
    CharIconCardVue
  },
  data(){
        return{
            personajes:[],
            mobile:null,
            windowWidth:null
        }
    },
  mounted(){
    fetch("/files/data.json").then(response => response.json()).then(result =>(this.personajes = result.personajes))
  },
  created(){
        window.addEventListener("resize",this.checkScreen);
        this.checkScreen();
    },
  methods:{
      checkScreen(){
            this.windowWidth = window.innerWidth;
            if ( this.windowWidth <=750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}
</script>
<style lang="scss" scoped>
.mobile-display{
  margin: 0;
  padding:0;
  
  .cont-description{
    background: url("https://genshin.hoyoverse.com/_nuxt/img/ed0f1a8.png");
      background-attachment: fixed;
      background-position:top;
      background-repeat: no-repeat;
      background-size: cover;
      display:block;
      height:max-content;
      width: 100%;
    
      .logo-princ{
      height:20%;
      margin: 1em auto;
      width:100%;
    }
    
    .title{
      
      background-color:antiquewhite;
      color:rgb(168, 127, 98);
      font-size:20px;
      font-weight: bold;
      margin: 0 auto;
      padding:20px;
      width:80%;
    }

    .container-list{
      display:flex;
      flex-flow:wrap;
      justify-content: space-around;
      margin: 2em auto;
      margin-bottom: 0;
      width:100%;
      .charac-list{
        margin: 1em auto;
        width: auto;
      }
    }
  }
  
  
}
</style>