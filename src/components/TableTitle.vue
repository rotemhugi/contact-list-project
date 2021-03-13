<template>
  <v-container>
    <v-row class="text-center mt-1 font-weight-bold">
      <v-card dark height=65 width=100%>
          <v-row class="mt-0">
            <v-col v-for="title in titles" :key="title.name" :cols='title.cols'>
              <div>{{title.name}}</div>
            </v-col>
          </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: "TableTitle",

    data: () => ({
          titles: [{name:'Picture', cols:'1'},
                  {name:'Full Name', cols:'3'},
                  {name:'Country', cols:'2'},
                  {name:'Days Until BirthDay', cols:'1'},
                  {name:'Email', cols:'3'},
                  {name:'More Info', cols:'1'},
                  {name:'Remove', cols:'1'}]
    }),
  };

</script>
