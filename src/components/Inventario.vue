<template>
    <section class="container">
        <div class="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-3">
            <div class="col">
                <div class="card border-primary mb-3">
                    
                    <div class="card-header">Sabores</div>

                    <div class="card-body">
                        <p class="card-text">{{ $store.getters.totalSabores }}</p>
                    </div>

                </div><!--./card-->
            </div><!--./col-->

            <div class="col">
                <div class="card border-warning mb-3">
                    
                    <div class="card-header">Adornos</div>

                    <div class="card-body">
                        <p class="card-text">{{ $store.getters.totalAdornos }}</p>
                    </div>

                </div><!--./card-->
            </div><!--./col-->

            <div class="col">
                <div class="card border-secondary mb-3">
                    
                    <div class="card-header">Pedidos</div>

                    <div class="card-body">
                        <p class="card-text" >{{ $store.state.listPedidos.length }}</p>
                    </div>

                </div><!--./card-->
            </div><!--./col-->

        </div><!--./row-->
    </section><!--./section-->
</template>

<script>
export default {
    name: 'Inventario'
}
</script>

<style scoped>

.container{
    margin-top: 50px;
}

.card-body p{
    font-size: 40px;
    font-weight: 900;
    text-align: center;
}

</style>