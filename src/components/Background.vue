<script setup lang="ts">


</script>

<template>
  <main class="space">
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
  </main>
  <img class="glow" src="@/assets/glow.svg">
  <slot></slot>
</template>

<style scoped lang="less">

@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0.5);
    transform: rotate(5deg);
    animation-timing-function: ease-in;
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
    transform: scale(2.2);
  }
}

.glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  transform: translate(-50%, -50%);
}

.space,
.stars {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}


.space {
    .stars {
      background-image: radial-gradient(2px 2px at 50px 200px, #eee, rgba(0, 0, 0, 0)),radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
      background-repeat: repeat;
      background-size: 250px 250px;
      opacity: 0;
      animation: zoom 10s infinite;

      &:nth-child(1) {
        background-position: 10% 90%;
        animation-delay: 0s;
      }

      &:nth-child(2) {
        background-position: 20% 50%;
        background-size: 270px 500px;
        animation-delay: .3s;
      }

      &:nth-child(3) {
        background-position: 40% -80%;
        animation-delay: 1.2s;
      }

      &:nth-child(4) {
        background-position: -20% -30%;
        transform: rotate(60deg);
        animation-delay: 2.5s;
      }

      &:nth-child(5) {
        background-image: radial-gradient(2px 2px at 10px 100px, #eee, rgba(0, 0, 0, 0)),radial-gradient(2px 2px at 20px 10px, #fff, rgba(0, 0, 0, 0)),radial-gradient(3px 4px at 150px 40px, #ddd, rgba(0, 0, 0, 0));
        background-position: 80% 30%;
        animation-delay: 4s;
      }

      &:nth-child(6) {
        background-position: 50% 20%;
        animation-delay: 6s;
      }
    }
}

</style>
