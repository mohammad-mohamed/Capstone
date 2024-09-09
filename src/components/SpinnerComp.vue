<template lang="">
    <div class="spinner center" v-if="loader">
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
        <div class="spinner-blade"></div>
    </div>
    </template>
    <script>
    export default {
       data() {
          return {
            loader: true, // Initially set loading to true
            data: [], // Your data array
          };
        },
        mounted() {
          // Fetch data from the provided URL
          // put mine just for now
          fetch('https://mohammad-mohamed.github.io/first-api/data/')
            .then(response => response.json())
            .then(data => {
              this.data = data;
              this.loader = false;
            })
            .catch(error => {
              console.error('Error fetching data:', error);
              this.loader = false;
            });
        },
    }
    </script>
    <style scoped>

    </style>