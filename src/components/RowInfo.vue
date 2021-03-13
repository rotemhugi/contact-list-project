<template>
    <div>
        <v-row class="blackText mt-2">
            <v-col cols="3">
                <h3>{{title}}</h3>
            </v-col>
            <v-col v-for="text in texts" :key="text">
                <div v-if="text=='Email'">
                    <span>{{text}}: </span><a :href="'mailto:'+email">{{getData(text)}}</a></div>
                <div v-else>
                    <span>{{text}}: </span>{{getData(text)}}</div>
            </v-col>
        </v-row>
        <v-divider class="mt-3"/>
    </div>  
</template>

<script>

    import moment from 'moment';

    export default {
        name: "RowInfo",

        props: { 
            title: String,
            texts: Array,
            currContact: Object 
        },

        data: () => ({
                dialog: false,
        }),

        methods: {

            getData(type){
                
                let value;

                if(this.currContact != undefined){
                    switch (type) {
                        case 'Street':
                            value = this.currContact.location.street.name
                            break;
                        case 'City':
                            value = this.currContact.location.city
                            break;
                        case 'Country':
                            value = this.currContact.location.country
                            break;
                        case 'Phone Number':
                            value = this.currContact.phone
                            break;
                        case 'Email':
                            value = this.currContact.email;
                            break;
                        case 'Birthday':
                            value = moment(this.currContact.dob.date).format('DD.MM.YYYY');
                            break;
                        case 'Age':
                            value = this.currContact.dob.age
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

    span{
        font-weight: bold;
    }

    .blackText{
        color: black;
    }

    h3{
        background-color: #FCD038;
    }
  
</style>
