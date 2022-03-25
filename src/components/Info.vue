<template>
    <section class="home" id="home">
            <div class="image">
                <img src="../assets/image1.png" alt="Imagen descriptiva de pasteleria">
            </div><!--./image-->
            <div class="content">
                <h1>Pasteleria Via Lactea.</h1>
            
                <p>
                    Los mejores pasteles que puedes probar, al realizar tu pedido puedes 
                    personalizarlo a tu gusto y presupuesto.
                </p>
                <router-link to="/pedidos" class="link">Realiza tu pedido</router-link>
            </div><!--./content-->
        </section><!--./home-->
</template>

<script>
export default {
    name: 'Info'
}
</script>

<style scoped>

.home{
    display: flex;
    align-items: center;
    background: linear-gradient(#FFA6B6, #E7D8C5, #FFFFFF);
}

.home img{
    width: 200px;
    height: 400px;
    margin-left: 150px;
    margin-top: 20px;
    padding: 20px 10px;
}

.home .content{
    width: 50%;
    margin: auto;
}

.home .content h1{
    color: #ffff;
    font-size: 60px;
    font-weight: 900;
    margin-bottom: 35px;
}

.home .content p{
    font-size: 20px;
    bottom: auto;
    margin-bottom: 25px;
    margin-top: 25px;
}

.home .content a{
    display: flex;
    width: 150px;
    height: 50px;
    background: #E7D8C5;
    justify-content: center;
    align-items: center;
    color: #FF4D6D;
    font-weight: 900;
}

@media (min-width: 660px) and (max-width: 840px) {
    .home img{
        margin-left: 20px;
    }
}

@media (min-width: 450px) and (max-width: 659px) {
    .home img{
        margin-left: 20px;
    }

    .home .content h1{
        font-size: 40px;
    }
}

</style>