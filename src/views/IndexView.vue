<template>
  <div class="home">
    <div :class="{'mobile-display' : mobile == true ,'normal-display' : mobile !=true }">
      <section class="cont-description">
        <img class="logo-princ" alt="Vue logo" src="../assets/logo.png">
        <div class="cont-card">
          <img src="https://p4.wallpaperbetter.com/wallpaper/354/698/428/genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-hd-wallpaper-preview.jpg">
          <div class="card-text">
            <h3>Un juego épico de aventura y fantasía</h3>
            Experimenta una aventura inmersiva para un jugador. Como viajero de otro mundo, comenzarás una travesía para reunirte con tu familiar perdido y encontrarte a ti mismo.
          </div>
          
        </div>
        <div class="cont-card">
          <img src="https://p4.wallpaperbetter.com/wallpaper/503/955/779/genshin-impact-genshin-landscape-hd-wallpaper-preview.jpg">
          <div class="card-text">
            <h3>Un mundo por descubrir</h3>
            Surca el vasto cielo de este mundo, nada a través de lagos y mares, y escala montañas imponentes. Explora más allá de los caminos transitados y descubre los muchos secretos ocultos en este mundo lleno de maravillas.
          </div>
          
        </div>
        <div class="cont-card">
          <img src="https://p4.wallpaperbetter.com/wallpaper/604/515/777/genshin-impact-qiqi-genshin-impact-diona-genshin-impact-klee-genshin-impact-hd-wallpaper-preview.jpg">
          <div class="card-text">
            <h3>Viaja solo o pelea en equipo</h3>
            Lánzate a la batalla en solitario, o invita a tus amigos para que entre los cuatro derroten monstruos peligrosos en modo cooperativo multiplataforma (PS4, iOS, Android, PC).
          </div>
        </div>
        <div class="cont-card">
          <img src="https://p4.wallpaperbetter.com/wallpaper/298/397/121/genshin-impact-noelle-genshin-impact-hd-wallpaper-preview.jpg">
          <div class="card-text">
            <h3>Crea tu propio equipo</h3>
            Escoge tus compañeros de pelea. Crea tu equipo a partir de más de 20 personajes (¡y más por venir!), cada uno con habilidades, personalidades y estilo de combate únicos.
          </div>
        </div>
        <div class="cont-buttons">  
          <router-link class="btn-genshin" to="/personajes">Ver personajes</router-link>

          <a class="btn-link" href="https://genshin.hoyoverse.com/">Ir al sitio web oficial</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data(){
        return{
            mobile:null,
            windowWidth:null
        }
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
        },
    }
}
</script>
<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=ABeeZee");
  *{
    margin: 0;
    padding: 0;
  }
  .mobile-display{
    .cont-description{
      background: url("https://p4.wallpaperbetter.com/wallpaper/585/921/170/genshin-impact-xiao-genshin-impact-lumine-genshin-impact-paimon-zhongli-genshin-impact-hd-wallpaper-preview.jpg");
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

      .cont-card{
          display:block;
          margin: 1.5em auto;
        img{
          font-weight: bold;
          height:50%;
          width:80%;
        }
        .card-text{
          background-color:antiquewhite;
          color:rgb(168, 127, 98);
          font-size:20;
          margin: 0 auto;
          padding:20px;
          width:80%;
          h3{
            font-family: 'ABeeZee';
            font-size:25px;
            font-weight: bold;
          }
        }
      }
      .cont-buttons{
        display: block;
        padding-bottom: 2em;
        .btn-genshin{
          background-color:yellow;
          border: 5px goldenrod;
          color:goldenrod;
          display: block;
          font-family: 'ABeeZee';
          font-size:30px;
          font-weight: bold;
          margin: 2em auto;
          text-align: center;
          text-decoration: none;
          width: 75%;
          :hover{
            background-color:white;
          }
        }
  
        .btn-link{
          border: 1px yellow solid;
          border-radius: .5em;
          color:white;
          font-size:25px;
          text-decoration: none;
          padding: .2em .75em;
        }
      }
    }
  }
</style>
