<template>
    <nav>
        <a href="index.html"><img src="../assets/logo.png" alt="Logo pasteleria Via Lactea" class="logo"></a>            <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/pedidos">Pedidos</router-link></li>
            <li><router-link to="/pastelero">Pastelero</router-link></li>
        </ul><!--./ul-->
    </nav><!--./nav-->
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
    nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    background-color: #FFA6B6;
    padding: 10px 50px;
}

nav .logo{
    width: 80px;
    height: 80px;
    margin-top: 5px;
}

nav ul{
    display: flex;
}

nav ul li a{
    margin: 30px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    height: 60px;
}

nav ul li a:hover{
    color:  #C6F33F;
}
</style>