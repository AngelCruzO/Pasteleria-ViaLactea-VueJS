<template>
    <section class="catalogo" id="catalogo">
            <h1 class="heading">Ingredientes para pasteles</h1>
            <div class="container1 marcaAgua">
                <div class="sabores ">
                    <h2 class="subtitle">Sabores</h2>
                    <ul>
                        <li>Vainilla ------------------------ $50.00</li>
                        <li>Chocolate ------------------------ $50.00</li>
                        <li>Cheescake ------------------------ $120.00</li>
                        <li>Fresa ------------------------ $50.00</li>
                        <li>Cajeta ------------------------ $75.00</li>
                        <li>Cafe ------------------------ $60.00</li>
                        <li>Oreo ------------------------ $85.00</li>
                        <li>Envinado ------------------------ $90.00</li>
                    </ul>
                </div><!--./sabores-->
                
                <div class="adornos">
                    <h2 class="subtitle">Adornos</h2>
                    <ul>
                        <li>Crema batida ------------------------ $30.00</li>
                        <li>Fondat ------------------------ $63.50</li>
                        <li>Trozos de chocolate ------------------------ $75.00</li>
                        <li>Galletas ------------------------ $45.50</li>
                        <li>Frutas ------------------------ $96.00</li>
                    </ul>
                </div><!--./adornos-->
            </div><!--./container-->
        </section><!--./catalogo-->
</template>

<script>
export default {
    name: 'Catalogo'
}
</script>

<style scoped>

.catalogo h1{
    position: relative;
    text-align: center;
}

.sabores,.adornos{
    width: 50%;
    height: 400px;
    color: #000;
    font-weight: 600;
    display: inline-block;
    margin-left: 150px;
    margin-top: 50px;
}

li{
    margin-top: 15px;
}

@media (min-width: 900px) and (max-width: 1050px){
    .sabores,.adornos{
        margin-left: 90px;
    }
}

@media (min-width: 450px) and (max-width: 899px){
    .container1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sabores,.adornos{
        margin-left: 10px;
    }

    .marcaAgua{
        background-image: none;
    }
}

</style>