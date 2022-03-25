<template>
    <section id="contacto" class="contact">
            <h1 class="heading">Contacto</h1>
            <div class="container1">
                <div class="datos">
                    <h2 class="subtitle">Dirección</h2>
                    <p class="text">
                        Lomas de San Juan Ixhuatepec
                        54180 Tlalnepantla de Baz, Méx.
                    </p>
                    <h2 class="subtitle">Telefono</h2>
                    <p class="text">55 2356-5684</p>
                    <h2 class="subtitle">Horario de atención</h2>
                    <p class="text">Lunes a Domingo de 8:00 am - 10:00pm</p>
                </div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7521.255362507117!2d-99.11393522514258!3d19.51464785990428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9f0f85f9af7%3A0xc0877411f84ddf8b!2sLomas%20de%20San%20Juan%20Ixhuatepec%2C%2054180%20Tlalnepantla%20de%20Baz%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1646159424398!5m2!1ses-419!2smx" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>          
        </section>
</template>

<script>
export default {
    name: 'Contacto'
}
</script>

<style scoped>

.contact h1{
    position: relative;
    text-align: center;
}

.datos,.map{
    margin: auto;
    padding-bottom: 50px;
}

@media (min-width: 450px) and (max-width: 1050px) {
    .container1{    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

</style>