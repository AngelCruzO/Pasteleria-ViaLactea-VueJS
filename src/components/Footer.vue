<template>
    <footer>
        <h3>&reg; Pasteleria - Via Lactea</h3>
        <div class="redes">
            <a href=""><i class="fa-brands fa-facebook-square"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>        
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

footer{
    width: 100%;
    height: 70px;
    background-color: #E7D8C5;
}

.redes{
    display: block;
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.redes i{
    color: #FF4D6D;
    margin: 5px;
}

h3{
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}

</style>