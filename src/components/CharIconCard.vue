<template>
    <div :class="[this.elemento, 'personaje']">
        <h1>{{nombre}}</h1><br>
        <div class="info-char">
            <img class="icon-p" :src="require(`/public/assets/icon/${nombre}.png`)">
            <span>{{estrellas}}</span>
            <button>
                <router-link 
                    :to="{ name:'charview' , 
                        params:{
                            nombre:this.nombre,perfil:this.perfil,cumple:this.cumple,rareza:this.rareza,
                            titulo:this.titulo,sexo:this.sexo,region:this.region,afiliacion:this.afiliacion,
                            elemento:this.elemento,arma:this.arma,
                        }}"
                    class="link">
                    Más info</router-link>
                
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name:"PersonajeCardIcon",
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
</script>
<style lang="css" scoped>
    .personaje{
        border:5px solid ;
        border-radius:1em;
        color:black;
        display:block;
        height: fit-content;
        width:150px;
    }
    h1{
        font-size: 15px;
        margin-top: 10px;        
        text-align: center;
        width:100%;
    }

    .info-char{
        display:block;
    }
    .icon-p{
        height: 100px;
        width:100px;
    }
    .link{
        color:black;
        text-decoration: none;
    }
    .Anemo{
        border-color:rgb(195, 255, 195);
        background-color: rgba(255, 255, 255, 0.767);
    }
    .Anemo button{
        background: transparent;
        border-color:rgb(195, 255, 195);
        border-radius:.5em;
        margin: 1em auto;
        font-size:15px;
        transition: .75s all ease-in-out;
        width:70%;
    }
    .Anemo button:hover{
        background-color:rgb(195, 255, 195);
        border-color:rgb(255, 255, 255);
        color:black;
    }
    .Cryo{
        border-color:turquoise;
        background-color: rgba(255, 255, 255, 0.767);
    }
    .Cryo button{
        background: transparent;
        border-color:turquoise;
        border-radius:.5em;
        margin: 1em auto;
        font-size:15px;
        transition: .75s all ease-in-out;
        width:70%;
    }
    .Cryo button:hover{
        background-color:turquoise;
        border-color:rgb(255, 255, 255);
        color:black;
    }
    .Dendro{
        border-color:rgb(4, 177, 4);
        background-color: rgba(255, 255, 255, 0.767);
    }
    .Dendro button{
        background: transparent;
        border-color:rgb(4, 177, 4);;
        border-radius:.5em;
        margin: 1em auto;
        font-size:15px;
        transition: .75s all ease-in-out;
        width:70%;
    }
    .Dendro button:hover{
        background-color:rgb(4, 177, 4);;
        border-color:rgb(255, 255, 255);
        color:white;
    }
    .Electro{
        border-color: rgb(88, 2, 88);
        background-color: rgba(255, 255, 255, 0.767);
    }
    .Electro button{
        background: transparent;
        border-color:rgb(88, 2, 88);
        border-radius:.5em;
        margin: 1em auto;
        font-size:15px;
        transition: .75s all ease-in-out;
        width:70%;
    }
    .Electro button:hover{
        background-color:rgb(88, 2, 88);
        border-color:rgb(255, 255, 255);
        color:white;
    }
    .Geo{
        border-color:rgb(192, 164, 4);
        background-color: rgba(255, 255, 255, 0.767);
    }
    .Geo button{
        background: transparent;
        border-color:rgb(192, 164, 4);
        border-radius:.5em;
        margin: 1em auto;
        font-size:15px;
        transition: .75s all ease-in-out;
        width:70%;
    }
    .Geo button:hover{
        background-color:rgb(192, 164, 4);
        border-color:rgb(255, 255, 255);
        color:black;
    }
    .Hydro{
        border-color: blue;
        background-color: rgba(255, 255, 255, 0.767);
    }
    .Hydro button{
        background: transparent;
        border-color:blue;
        border-radius:.5em;
        margin: 1em auto;
        font-size:15px;
        transition: .75s all ease-in-out;
        width:70%;
    }
    .Hydro button:hover{
        background-color:blue;
        border-color:rgb(255, 255, 255);
        color:white;
    }
    .Pyro{
        border-color:rgb(133, 5, 5);
        background-color: rgba(255, 255, 255, 0.767);
    }
    .Pyro button{
        background: transparent;
        border-color:rgb(133, 5, 5);
        border-radius:.5em;
        margin: 1em auto;
        font-size:15px;
        transition: .75s all ease-in-out;
        width:70%;
    }
    .Pyro button:hover{
        background-color:rgb(133, 5, 5);
        border-color:rgb(255, 255, 255);
        color:white;
    }

</style>