<template>
  <v-container>
    <v-row class="mb-2 text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold">
          Contact List
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn x-large rounded color="#FCD038" @click="addContant()">
            <v-icon>mdi-plus</v-icon>
            Add Contact
        </v-btn>
      </v-col>
      <v-col cols='5' v-show="isEmpty==false">
          <v-autocomplete class="sort" label="Sort By" :items="sortByOptions" 
                          v-model="selectedSortBy" @input="sort()" 
                          background-color="#FCD038" color="black"
                          outlined clearable filled rounded/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Heading',

    components:{
    },

    props:{
        isEmpty: Boolean
    },

    data: () => ({

        sortByOptions: ['A-Z first name',
                        'Z-A first name',
                        'days until birthday'],
        selectedSortBy: '',
      
    }),

    methods:{
        addContant(){
            this.$store.dispatch('addNewContact');
        },

        sort(){
            this.$store.dispatch('setSortBy',this.selectedSortBy)
        }
    }
  }
</script>

<style scoped>

.sort{
    max-width: 15rem;
}

</style>
