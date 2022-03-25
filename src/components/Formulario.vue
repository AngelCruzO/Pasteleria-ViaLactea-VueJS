<template>
    <div class="pedido">
        <h1 class="heading">Realizar tu pedido</h1>
        <div class="container">
            <form class="row g-3">

                <div class="col-sm-12 col-md-4 col-lg-4 mt-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" placeholder="Juan Perez Lopez" id="name" v-model="name">
                </div><!--./col-->

                <div class="col-sm-12 col-md-4 col-lg-4 mt-3">
                    <label for="phone" class="form-label">Telefono</label>
                    <input type="tel" class="form-control" placeholder="(55)1236-4515" id="phone" v-model="phone">
                </div><!--./col-->
                        

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <label for="email" class="form-label">Correo electronico</label>
                    <input type="email" class="form-control" placeholder="name@example.com" v-model="email">
                </div><!--./col-->

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <label for="descripcion" class="form-label">Descrición general del pastel</label>
                    <textarea class="form-control" rows="3" v-model="description"></textarea>
                </div><!--./col-->

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <p>Sabores</p>
                    <div class="btn-group">
                        <div class="row">
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="chocolate" value="chocolate" v-model="flavors">
                                <label for="chocolate" class="btn btn-outline-light border border-dark">Chocolate</label>
                            </div>
                            
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="envinado" value="envinado" v-model="flavors">
                                <label for="envinado" class="btn btn-outline-light border border-dark">Envinado</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="vainilla" value="vainilla" v-model="flavors">
                                <label for="vainilla" class="btn btn-outline-light border border-dark">Vainilla</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="fresa" value="fresa" v-model="flavors">
                                <label for="fresa" class="btn btn-outline-light border border-dark">Fresa</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="cajeta" value="cajeta" v-model="flavors">
                                <label for="cajeta" class="btn btn-outline-light border border-dark">Cajeta</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="cafe" value="cafe" v-model="flavors">
                                <label for="cafe" class="btn btn-outline-light border border-dark">Cafe</label>
                            </div>
                            
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="cheesecake" value="cheesecake" v-model="flavors">
                                <label for="cheesecake" class="btn btn-outline-light border border-dark">Cheesecake</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="oreo" value="oreo" v-model="flavors">
                                <label for="oreo" class="btn btn-outline-light border border-dark">Oreo</label>
                            </div>
                            
                        </div><!--./row-->                                                
                    </div><!--./btn-group-->
                </div><!--./col-->

                <div class="col-sm-12 col-md-8 col-lg-8 mt-3">
                    <p>Adornos</p>
                    <div class="btn-group">
                        <div class="row">
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="crema" value="crema batida" v-model="ornaments">
                                <label for="crema" class="btn btn-outline-light border border-dark" >Crema batida</label>
                            </div>
                            
                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="trozos" value="trozos de chocolate" v-model="ornaments">
                                <label for="trozos" class="btn btn-outline-light border border-dark">Trozos de chocolate</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="galletas" value="galletas" v-model="ornaments">
                                <label for="galletas" class="btn btn-outline-light border border-dark">Galletas</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="frutas" value="frutas" v-model="ornaments">
                                <label for="frutas" class="btn btn-outline-light border border-dark">Frutas</label>
                            </div>

                            <div class="col mt-3">
                                <input type="checkbox" class="btn-check" id="fondat" value="fondat" v-model="ornaments">
                                <label for="fondat" class="btn btn-outline-light border border-dark" >Fondat</label>
                            </div>

                        </div><!--./row-->
                    </div><!--./btn-group-->
                </div><!--./col-->
            </form><!--./row-->

            <div class="row mb-4">
                <div class="col centrado">
                    <button class="btn-pink" @click="agregarPedido()">Enviar</button>
                </div><!--./col-->
            </div><!--./row-->

        </div><!--./container-->
    </div><!--./pedido-->
</template>

<script>
export default {
    name: 'Formulario',
    data(){
        return{
            name: "",
            phone: "",
            email: "",
            description: "",
            flavors: [],
            ornaments: []
        }
    },
    methods:{
        /* agregarPedido: agrega los datos registrados en el formulario en forma de objeto a una lista en los state
         * Entrada: 
         * Salida: el state listPedidos con un nuevo pedido
        */
        agregarPedido(){

            var pedido = {
                nombre: this.name,
                telefono: this.phone,
                correo: this.email,
                descripcion: this.description,
                sabores: this.flavors,
                adornos: this.ornaments
            }

            return this.$store.state.listPedidos.push(pedido)
        }
    }
}
</script>

<style scoped>
.pedido h1{
    position: relative;
    text-align: center;
    margin: 35px;
    font-weight: 900;
}

.row{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

label{
    color: #FF4D6D;
    font-weight: 900;
}

p{
    color: #FF4D6D;
    font-size: 25px;
    font-weight: 900;
}

.btn-group label{
    text-shadow: 0px 0px 5px #FF4D6D;
}

.btn-pink{
    width: 200px;
    height: 50px;
    font-size: 20px;
    margin-top: 30px;
    background: #FF4D6D;
    color: #C6F33F;
    border: none;
    cursor: pointer;
}

.centrado{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>