<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState.js';
import { ufoService } from '../services/Ufoservice.js';




const total = computed(() => AppState.Total)
function clickUfo() {
  // console.log('ufo clicked',AppState.Total);
  ufoService.clickUfo()
}

function update1(){
  console.log('updated +1')
  ufoService.updated1()
}
</script>


// HTML
<template>
  <div class="container-fluid">
    <div class="row text-center justify-content-center mt-5 img-card">
      <div class="col-4">
        <img @click="clickUfo()" role="button" class="img-fluid"
          src="https://static.vecteezy.com/system/resources/previews/038/039/860/non_2x/ai-generated-flying-saucer-ufo-uap-isolated-on-transparent-background-free-png.png"
          alt="">
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-1 border border-light border-4 text-light">
        <p>{num} p/c</p>
      </div>
      <div class="col-2 border border-light border-4 text-light text-center">
        <div class="justify-items-between">
          <p>Total: {{ AppState.Total }} </p>
        </div>
      </div>
      <div class="col-1 border border-light border-4 text-light">
        <p> {num} p/s </p>
      </div>
    </div>
    <div class="row justify-content-center text-light">
      <div class="col-12 border border-1 border-light rounded ">
        <div class="row ">
          <div class="col-6">
            <div class="row p-2">
              <div class="col-6">
                <button @click="update1()" class="btn btn-success"> buy +1</button>
              </div>
              <div class="col-6">
                <button class="btn btn-success"> automate +1</button>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-6">
                <button class="btn btn-success"> buy +10</button>
              </div>
              <div class="col-6">
                <button class="btn btn-success"> automate +100</button>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="row p-2">
              <div class="col-6">
                {num} of clicks can add {num} total
              </div>
              <div class="col-6">
                {num} of clicks per second
              </div>
            </div>
            <div class="row p-4">
              <div class="col-6">
                {num} of clicks can add {num} total
              </div>
              <div class="col-6">
                {num} of big clicks per second
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>


// styles
<style lang="scss">
// @import "./assets/scss/main.scss";

.img-card {
  // height: 14vh;
  // width: 30vh;
}
</style>