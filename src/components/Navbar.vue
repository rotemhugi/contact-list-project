<template>
    <v-app-bar app color="#131313" dark>
        <div class="d-flex align-center">
            <v-img :src="require('../assets/NamogooLogo.png')" width="200"/>
            <div class="navbarTitle"> Vue Exercise</div>
        </div>
    </v-app-bar>
</template>

<script>

  export default {
    name: 'Navbar',
  };

</script>

<style scoped>

  .navbarTitle{
    font-size: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

</style>
