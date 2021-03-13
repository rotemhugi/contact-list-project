<template>
    <v-card class="text-center">
        <v-card-title class="black">
            <v-row>
                <v-col cols='2'>
                    <v-img id="img" :src="getData('picture')"/> 
                </v-col>
                <v-col cols='6'>
                    <div class="title">{{getData('fullName')}}</div>
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-text>
            <RowInfo title='Full Address' :texts="address" :currContact='currContact'/>
            <RowInfo title='Contact' :texts="contact" :currContact='currContact'/>
            <RowInfo title='Personal' :texts="personal" :currContact='currContact'/>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="close()">
                Close
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

    import RowInfo from './RowInfo';

    export default {
        name: "MoreInfo",

        components:{
            RowInfo,
        },

        props: { 
            currContact: Object 
        },

        data: () => ({
                dialog: false,
                address: ['Street','City','Country'],
                contact: ['Phone Number','Email'],
                personal: ['Birthday','Age']
        }),

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
                        default:
                            break;
                    }
                }
                return value;
            },

            close(){
                this.$emit('close')
            },
        },
    };
</script>

<style scoped>

     #img {
        border-radius: 50%; 
        height: 3rem;
        width: 3rem;
        margin-top: -0.9rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .title{
        color: white;
    }
  
</style>
