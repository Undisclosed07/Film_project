<template>
    <div>
        <p v-if="$route.params.id == 1">
            <img src="http://images.affiches-et-posters.com//albums/3/48400/affiche-film-titanic.jpg">
        </p>
        <p v-if="$route.params.id == 2">
            <img src="https://www.amazon.fr/images/I/514O7ntbvAL._AC_.jpg">
        </p>
        <p v-if="$route.params.id == 3">
            <img src="https://www.amazon.fr/images/I/51WxwR-YyoL._AC_.jpg">
        </p>
    </div>
</template>

<script>
export default {
props: ['movies'],
name: 'PosterFilm'
}

</script>
<style scoped>
    /* Style spécifique à ce composant */
    
</style>