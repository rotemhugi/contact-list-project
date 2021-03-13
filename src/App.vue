<template>
  <v-app>
      <Navbar/>
      <v-main>
        <Heading :isEmpty='isEmpty'/>
        <ContactTable :contactList='contactList'/>
      </v-main>
  </v-app>
</template>

<script>
  import Heading from './components/Heading';
  import ContactTable from './components/ContactTable';
  import Navbar from './components/Navbar';
  import { mapGetters } from "vuex";

  export default {
    name: 'App',

    components: {
      Navbar,
      Heading,
      ContactTable,
    },

    created(){
        this.$store.dispatch('getContacts');
      },

      computed:{
          ...mapGetters(["contactList"]),

          isEmpty(){
            return this.contactList.length == 0 ? true : false;
          }
      }
  };
</script>

<style scoped>

  .v-main{
    background-color: rgb(235, 235, 173);
  }

</style>
