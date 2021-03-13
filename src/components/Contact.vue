<template>
  <v-container width="100%">
    <v-row class="mb-0" width="100%">
      <v-card class="cardStyle">
          <v-row class="text-center mt-1">
              <v-col cols="1">
                <v-img id="rounded-img" :style="imgStyle" :src="getData('picture')"/> 
              </v-col>
              <v-col cols="3">
                <div>{{getData('fullName')}}</div>
              </v-col>
              <v-col cols="2">
                <div>{{getData('country')}}</div>
              </v-col>
              <v-col cols="1">
                <div>{{getData('daysUntilBD')}}</div>
              </v-col>
              <v-col cols="3">
                <a :href="'mailto:'+email">{{getData('email')}}</a>
              </v-col>
              <v-col cols="1">
                <v-btn @click="dialog=true" text color="#FCD038" small>
                    <v-icon>mdi-information</v-icon>
                </v-btn>
                <v-dialog v-model="dialog" width="850">
                    <MoreInfo :currContact='currContact' @close='closeDialog'/>
                </v-dialog>
              </v-col>
            <v-col cols="1">
                  <v-btn text small @click="removeContact()">
                      <v-icon>mdi-delete</v-icon>
                  </v-btn>
              </v-col>
          </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

  import MoreInfo from './MoreInfo'

  export default {
    name: "Contact",

    props: { 
      currContact: Object 
    },

    components:{
        MoreInfo
    },

    data: () => ({
          dialog: false,
    }),

    computed: {

        imgStyle(){
            let color;
            if(this.currContact != undefined){
                if(this.currContact.gender == 'male'){
                    color = 'red'
                }
                else{
                    color = 'green'
                }
            }
            return `border-color: ${color}`
        },
        
    },
    methods: {

        getData(type){
            
            let value;

            if(this.currContact != undefined){
                switch (type) {
                  case 'picture':
                      value = this.currContact.picture.medium
                      break;
                  case 'fullName':
                      value = `${this.currContact.name.title} 
                              ${this.currContact.name.first} 
                              ${this.currContact.name.last}`
                      break;
                  case 'country':
                      value = this.currContact.location.country
                      break;
                  case 'daysUntilBD':
                      value = this.currContact.daysUntilBirthday
                      break;
                  case 'email':
                      value = this.currContact.email;
                      break;
                  default:
                      break;
                }
            }
            return value;
        },

        removeContact(){
          this.$store.dispatch('removeContact',this.currContact);
        },

        closeDialog(){
            this.dialog = false;
        },
    },
  };
</script>

<style>

    #rounded-img {
        border-radius: 50%; 
        height: 3rem;
        width: 3rem;
        margin-top: -0.9rem;
        margin-left: 1rem;
        border-style: solid;
    }

    .cardStyle{
        width: 100% !important;
        height: 3.5rem
    }
  
</style>
