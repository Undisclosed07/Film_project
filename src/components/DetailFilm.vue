<template>
<p>
    <b>Titre :</b> {{ movies.titre }}
    <br><b>Année de sortie : </b> {{movies.anneesortie}} 
    <br><b>Réalisateur : </b> {{movies.realisateur['name']}} 
    <br><b>Synopsis : </b> {{movies.synopsis}} 
    <br><b>Genre : </b>{{movies.genre}}
    <br><b>Langue : </b>{{movies.langue}}
    <br><v-btn small color="primary" v-on:click="editfilm">Editer</v-btn>
    <v-btn small color="error" v-on:click="deletefilm">Supprimer</v-btn>
    <br><br><v-btn color="success" :to="`${movies.id}`">Voir le poster de {{movies.titre}}</v-btn><br><br>
</p>
</template>

<script>
export default {
name: 'DetailFilm',
props:['movies'],
methods: {
            editfilm(name, index){
                this.$emit('editfilm', index)
            },
            deletefilm(i){
                this.$emit('deletefilm', i)
            },
            visualiserposter(i){
                this.$emit('visualiserposter', i)
                
            }
        }
}
</script>

<style scoped>
.top {
    position: fixed;
}
</style>