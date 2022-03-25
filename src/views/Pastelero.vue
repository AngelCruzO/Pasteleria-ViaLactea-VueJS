<template>
    <div class="container">
        <Inventario/>
        <Tabla/>
    </div>
</template>

<script>
import Tabla from '@/components/Tabla.vue'
import Inventario from '@/components/Inventario.vue'

export default {
    name: 'Pastelero',
    components:{
        Tabla,
        Inventario
    }
}
</script>