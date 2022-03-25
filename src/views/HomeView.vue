<template>
  <div>
    <Info/>
    <Catalogo/>
    <Contacto/>
    <Footer/>
  </div>  
</template>

<script>
// @ is an alias to /src
import Info from '@/components/Info.vue'
import Catalogo from '@/components/Catalogo.vue'
import Contacto from '@/components/Contacto.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Info,
    Catalogo,
    Contacto,
    Footer
  }
}
</script>
