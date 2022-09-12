<template>
    <div class="character">
        <div class="cont-char"><br><br><br>
            <div  :class="[elemento, 'img-cont']"><br>
                <div :class="[elemento, 'marco']">
                    <img :src="require(`/public/assets/icon/${nombre}.png`)"  alt="">
                </div><br>
                <div class="info-char">
                    <span>{{nombre}} - {{titulo}}</span><br>
                    <span>{{estrellas}}</span><br>
                    <span>{{cumple}}</span><br><br>
                    <span>{{perfil}}</span><br><br>
                    <span>Region de Origen: {{region}}</span><br>
                    <span>Afiliación: {{afiliacion}}</span><br><br><br>
                    <div class="icons">
                        <img class="arma" :src="require(`/public/assets/icon_arma/${arma}.png`)" alt="">
                        <img :src="require(`/public/assets/elemento/${elemento}.png`)" alt="">
                    </div>
                </div>
                <router-link class="link" to="/personajes">VOLVER</router-link>
            </div>
        </div><br><br><br>
    </div>
</template>
<script>
export default {
    name:"PersonajeVue",
    props:{
        nombre:String,
        perfil:String,
        cumple:String,
        rareza: Number,
        titulo: String,
        sexo: String,
        region: String,
        afiliacion:String,
        elemento: String,
        arma: String
    },
    data(){
        return{
            estrellas:"",
        }
    },
    mounted(){
        for(let i = 0 ; i < this.rareza; i++){
            this.estrellas +='⭐'
        }
    }
}
</script>t
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Amarante");
*{
    font-family:'Amarante';
    font-size:18px;
}
    .link{
        color:black;
        text-decoration: none;
    }
    .character{
        background: url("https://genshin.hoyoverse.com/_nuxt/img/ed0f1a8.png");
        background-attachment: fixed;
        background-position:top;
        background-repeat: no-repeat;
        background-size: cover;
        display:block;
        height:max-content;
        width: 100%;
    }
    .img-cont{
        border-radius:2em;
        display:block;
        margin: 0 auto;
        width:80%;
    }
    .Anemo{
        border: 3px solid rgb(195, 255, 195);
        background-color: rgba(255, 255, 255, 0.500);
        color:black
    }
    .Cryo{
        border: 3px solid turquoise;
        background-color: rgba(255, 255, 255, 0.500);
        color:black
    }
    .Dendro{
        border: 3px solid rgb(4, 177, 4);
        background-color: rgba(255, 255, 255, 0.500);
        color:black
    }
    .Electro{
        border: 3px solid rgb(88, 2, 88);
        background-color: rgba(255, 255, 255, 0.500);
        color:black
    }
    .Geo{
        border: 3px solid rgb(192, 164, 4);
        background-color: rgba(255, 255, 255, 0.200);
        color:black
    }
    .Hydro{
        border: 3px solid  blue;
        background-color: rgba(255, 255, 255, 0.767);
        color:black
    }
    .Pyro{
        border: 3px solid rgb(133, 5, 5);
        background-color: rgba(255, 255, 255, 0.500);
        color:black
    }
    span{
        text-align:center;
        width:100%;
    }
    .info-char{
        margin: 1em auto;
        width:80%;
    }
    .icons{
        display:flex;
        justify-content:space-around;
        margin: 0 auto;
        width:80%;
    }
    .icons img{
        margin: 0 auto;
        height:100px;
        width:100px;
    }
    .arma{
        background-color:white;
        border-radius:50%;
    }
    .marco{
        background-color:white;
        border-radius:50%;
        height:150px;
        margin: 0 auto;
        width:150px;
    }
    .marco img{
        border-radius:50%;
        height:145px;
        margin: 0 auto;
        width:145px;
        
    }
</style>