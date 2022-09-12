<template>
    <header class="nav-cont">
        <nav>
            <div class="branding">
                <img 
                    src="../assets/logo.png" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" to="/">Inicio</router-link></li>
                <li><router-link class="link" to="/personajes">Personajes</router-link></li>
                <li><router-link class="link" to="/armas">Armas</router-link></li>
                <li><router-link class="link" to="/mapa">Mapa</router-link></li>
            </ul>
            <div class="icon">
                <i 
                    @click="toggleMobileNav" 
                    v-show="mobile" 
                    class="fas fa-bars" 
                    :class="{'icon-active' : mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
               <ul v-show="mobileNav" class="dropdown-nav">
                <li><router-link class="link" to="/">Inicio</router-link></li>
                <li><router-link class="link" to="/personajes">Personajes</router-link></li>
                <li><router-link class="link" to="/armas">Armas</router-link></li>
                <li><router-link class="link" to="/mapa">Mapa</router-link></li>
                </ul>  
            </transition>
        </nav>
    </header>
</template>
<script>
export default {
    name:"NavBar",
    data(){
        return{
            mobile:null,
            mobileNav:null,
            windowWidth:null
        }
    },
    created(){
        window.addEventListener("resize",this.checkScreen);
        this.checkScreen();
    },
    methods:{
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
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
        handleClick(){
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>
<style lang="scss" scoped>
    .nav-cont{
        background-color:white;
        color:black;
        transition:0.5s ease all;
        top:0;
        width:100%;
        z-index:90;

        nav{
            display:flex;
            flex-direction:row;
            margin: 0 auto;
            padding:transition;
            transition: .5s ease all;
            width:90%;
            @media (min-width:1140px){
                max-width:1140px;
            }

            ul,
            .link{
                color:navy;
                font-weight:500;
                list-style:none;
                text-decoration:none;
            }

            li{
                padding:16px;
            }
            .link{
                font-size:1.5em;
                transition: .5s ease all;
                padding-bottom:5px;
                border-bottom:1px solid transparent;

                &:hover{
                    color:navy;
                    border-color:navy;
                }
            }

            .branding{
                align-items:center;
                display:flex;

                img{
                    width:150px;
                    transition: .5s ease all;
                }
            }

            .navigation{
                align-items:center;
                display:flex;
                flex:1;
                justify-content:flex-end;
            }
            .icon{
                align-items:center;
                display:flex;
                margin: auto;
                height:100%;
                position:static;

                i{
                    cursor:pointer;
                    font-size:24px;
                    transition: .8s ease all;
                }
            }

            .icon-active{
                color:navy;
                transform:rotate(180deg);
            }

            .dropdown-nav{
                background-color: rgba(255, 255, 255, 0.767);
                box-shadow: 10px 8px 31px 13px rgba(0,0,0,0.75);
                -webkit-box-shadow:10px 8px 31px 13px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 8px 31px 13px rgba(0,0,0,0.75);
                display:flex;
                flex-direction:column;
                height:100%;
                left: 0;
                max-width:70%;
                position:fixed;
                top: 0;

                li {
                    margin: 0 auto;
                    .link{
                        color: navy;
                    }
                }
            }
            .mobile-nav-enter-active,
            .mobile-nav-leave-active{
                transition: 1s ease all;
            }

            .mobile-nav-enter-from,
            .mobile-nav-leave-to{
                transform: translateX(-250px);
            }
            .mobile-nav-enter-to{
                transform: translateX(0);
            }
        }
    }
</style>
