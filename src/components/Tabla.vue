<template>
    <section class="container">
        <div class="table-responsive">
            <table class="table table-striped table-secondary align-middle">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Correo electrónico</th>
                        <th>Descripción</th>
                        <th>Sabores</th>
                        <th>Adornos</th>
                    </tr>
                </thead><!--./thead-->

                <tbody>
                    <tr v-for="(item,index) in $store.getters.imprimirPedidos" :key="index">
                        <th>{{index+1}}</th>
                        <td>{{item.nombre}}</td>
                        <td>{{item.telefono}}</td>
                        <td>{{item.correo}}</td>
                        <td>{{item.descripcion}}</td>
                        <td>{{item.sabores.toString()}}</td>
                        <td>{{item.adornos.toString()}}</td>
                    </tr>
                </tbody><!--./tdoby-->            
            </table><!--./table-->
        </div><!--./table-responsive-->

    </section><!--./section-->
</template>

<script>
export default {
    name: 'Pastelero'
}
</script>

<style scoped>

.container{
    margin-top: 20px;
}

</style>