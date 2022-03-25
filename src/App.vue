<template>
    <div>
        <Menu/>
        <router-view/>
    </div> 
</template>

<script>
import Menu from "./components/Menu.vue"

export default {
    name: 'App',
    components: {
        Menu
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap');

*{
    margin: 0;
    padding: 0;

    font-family: 'Nunito', sans-serif;
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

header{
    width: 100%;
    position: relative;
}

main{
    width: 100%;
    position: relative;
}

.container1{
    display: flex;
    justify-content: center;
    align-items: center;
}

.heading{
    padding-bottom: 20px;
    font-size: 35px;
    color: #FF4D6D;
}

.subtitle{
    margin-bottom: 20px;
    font-weight: 900;
    color: #FFA6B6;
}

.text{
    margin-bottom: 20px;
    text-align: justify;
    font-size: 18px;
    font-weight: 400;
}

.marcaAgua{
    position: relative;
    z-index: -1;
    background-image: url('./assets/logo.png');
    background-repeat: no-repeat;
    background-size: 250px 250px;
    background-position: center;
    opacity: 0.5;
}

.gradient1{
    background: linear-gradient(90deg, rgba(255,77,109,0.8239670868347339) 15%, rgba(255,70,182,0.7035189075630253) 45%, rgba(231,216,197,0.938813025210084) 100%);
}

.gradient2{
    background: linear-gradient(90deg, rgba(255,166,182,0.7231267507002801) 15%, rgba(231,216,197,0.9108018207282913) 45%, rgba(198,243,63,0.6643032212885154) 100%);
}

.gradient3{
    background: linear-gradient(328deg, rgba(255,166,182,0.7231267507002801) 15%, rgba(231,216,197,0.9108018207282913) 45%, rgba(255,255,255,1) 100%);
}

.title{
    font-size: 30px;
    font-weight: 600;
}

.title-white{
    color: #fff;
}

.title-pink-dark{
    color: #FF4D6D;
}

.info-green-lime{
    color: #C6F33F;
}

.info{
    font-size: 45px;
    font-weight: bold;
}

</style>
