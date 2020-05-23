<template>
    <div id="movies">

    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title><router-link to="/" tag="button">Accueil</router-link></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-movie</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title v-bind:disabled="lockSelection"><router-link to="/add" tag="button">Ajouter un film</router-link></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list>
        </v-navigation-drawer>

    <v-app-bar app color="light" light>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Projet Film</v-toolbar-title>
    </v-app-bar>

    <v-content>
        
        <router-view></router-view>
        
        <br><span> Films </span><br>
    
        <br>Nombre de films : {{ firstLetter }}<br>
        <v-row align="center" justify="center">
            <v-col cols="4" md="3">
                Recherche rapide : 
                <v-text-field type="text" @change="search()" v-model.lazy="data.research" name="search" id="search" placeholder="Entrez votre texte ici"/>
            </v-col>
        </v-row>

        <movie-item v-for="(m,i) of data.movies" v-bind:movies="m" :key="i" v-on:editfilm="editfilm(m.titre, i)" v-on:deletefilm="deletefilm(i)"></movie-item>
        
        <select class="select" name="listefilms" id="listefilms">
            <option v-for="(m,i) of data.movies" v-bind:key="i">{{ m.titre }}</option>
        </select>

        <v-row align="center" justify="center">
            <v-col cols="4" md="3">
        <v-text-field id="filmm" name="filmm" type="text" v-model="data.Filmm"/>
            </v-col>
        </v-row>
        <v-btn v-on:click="save">Enregistrer</v-btn>
        
    </v-content>
    </v-app>
    <br></div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>

import DetailFilm from './components/DetailFilm.vue'
import TestRouter from './components/TestRouter.vue'
import AjoutFilm from './components/AjoutFilm.vue'
import PosterFilm from './components/PosterFilm.vue'

export default {
    name: 'movies',
    props: {
        source: String
    },
    components: {
    DetailFilm,
    TestRouter,
    PosterFilm,
    AjoutFilm
    },
    data: function() {
        return {
            data: {
                    message: "Hello Dawin!",
                    show: true,
                    movies: [
                        {
                            id: "1",
                            titre: "Titanic",
                            anneesortie: "1997", 
                            realisateur: {name:"James Cameron", nationality: "Canadien", birthday: "1954"}, 
                            synopsis: "En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.",
                            genre: "Film d'amour/Drame historique",
                            langue: "VO: Anglais. Disponible en VOSTFR et VF."
                        },
                        {
                            id: "2",
                            titre: "Interstellar",
                            anneesortie: "2014", 
                            realisateur: {name: "Christopher Nolan", nationality: "Anglais", birthday: "1970"},
                            synopsis: "Dans un futur proche, la Terre est de moins en moins accueillante pour l'humanité qui connaît une grave crise alimentaire. Le film raconte les aventures d'un groupe d'explorateurs qui utilise une faille récemment découverte dans l'espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
                            genre: "Science-fiction/Aventure",
                            langue: "VO: Anglais. Disponible en VOSTFR et VF."
                        }, 
                        {
                            id: "3",
                            titre: "La Ligne verte",
                            anneesortie: "1999", 
                            realisateur: {name: "Franck Darabont", nationality: "Français", birthday: "1959"},
                            synopsis: "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain, en 1935, en Louisiane, il était chargé de veiller au bon déroulement des exécutions capitales au bloc E (la ligne verte) en s'efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes.",
                            genre: "Film criminel/Drame",
                            langue: "VO: Français."
                        }
                    ],
                    counter: 0,
                    inputText:"default",
                    Filmm: "",
                    index: "",
                    research: "",
                    moviessearch : [
                        {
                            titre: "Titanic",
                            anneesortie: "1997", 
                            realisateur: "James Cameron", 
                            synopsis: "En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou."
                        },
                        {
                            titre: "Interstellar",
                            anneesortie: "2014", 
                            realisateur: "Christopher Nolan", 
                            synopsis: "Dans un futur proche, la Terre est de moins en moins accueillante pour l'humanité qui connaît une grave crise alimentaire. Le film raconte les aventures d'un groupe d'explorateurs qui utilise une faille récemment découverte dans l'espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire."
                        }, 
                        {
                            titre: "La Ligne verte",
                            anneesortie: "1999", 
                            realisateur: "Franck Darabont", 
                            synopsis: "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain, en 1935, en Louisiane, il était chargé de veiller au bon déroulement des exécutions capitales au bloc E (la ligne verte) en s'efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes."
                        }
                    ],
                },
                drawer: null,
                lockSelection: true
        }
    },
    computed: {
        firstLetter: function() {
            return this.data.movies.length;
        }
    },
    methods: {
                    buttonClicked: function() {
                        this.data.Filmm = this.filmm.value;
                    },
                    deletefilm: function(i)
                    {
                        this.data.movies.splice(i, 1);
                    },
                    editfilm: function(name, index)
                    {
                        this.index = index;
                        this.data.Filmm = name;
                    },
                    save: function()
                    {
                        let index = this.index;
                        this.data.movies[index].titre = this.data.Filmm;
                    },
                    search: function()
                    {
                        this.data.moviessearch = this.data.movies;
                        if(this.data.research == "")
                        {
                            this.data.movies = this.data.moviessearch;
                        }

                        this.data.movies = this.data.movies.filter(element => element.titre.includes(this.data.research));
                    }
                }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
#movies {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.select {
    border:1px groove black;
}

.disabled {
    pointer-events:none; 
    opacity:0.6;        
}
</style>