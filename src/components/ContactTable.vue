<template>
  <v-container>
    <div v-if="message==null">
        <TableTitle class="mb-3"/>

        <v-flex v-for="contact in this.contactList" :key="contact.id.value">
            <Contact :currContact="contact"/>
        </v-flex>

    </div>
    <h1 class="message text-center" v-else>{{message}}</h1>
  </v-container>
</template>

<script>
  import Contact from "./Contact.vue";
  import TableTitle from "./TableTitle.vue";

  export default {
    name: 'ContactTable',

    components: {
      TableTitle,
      Contact,
    },

    props: {
        contactList: Array
    },

    data: () => ({
      
    }),

    computed:{

        message(){
            if(this.contactList.length == 0){
                return 'There are no contacts on the contact list';
            }
            return null;
        }
    }
  }
</script>

<style>

  .message{
    font-size: 3rem;
    color: rgb(104, 91, 20);
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    margin-top: 3rem;
  }

</style>
