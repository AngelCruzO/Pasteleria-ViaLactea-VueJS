<template>
    <div>
        <Formulario/>
        <Footer/>
    </div>
</template>

<script>
import Formulario from '@/components/Formulario.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Pedidos',
    components:{
        Formulario,
        Footer
    }
}
</script>