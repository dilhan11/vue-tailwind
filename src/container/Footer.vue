<template>
<div>
    <footer class="bg-bookmark-blue py-8 my-0 ">
      <div class="container flex flex-col md:flex-row items-center">
        <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img src=".././assets/imgs/logo-bookmark-white.png" alt="" />
          <ul class="flex text-white uppercase gap-12 text-xs">
            <li class="cursor-pointer">Features</li>
            <li class="cursor-pointer">Pricing</li>
            <li class="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div class="flex gap-10 mt-12 md:mt-0 list">
          <li><i class="text-white text-2xl fab fa-twitter"></i></li>
          <li><i class="text-white text-2xl fab fa-facebook-square"></i></li>
        </div>
      </div>
    </footer>
</div>
</template>

<script>
export default {

}
</script>

<style>
footer {
   position:fixed;
  clear: both;
  left: 0;
  bottom: 0 !important ;
  width: 100%;
  background-color: #eeeef0;
  color: #555;
  text-align: center;
  padding: 12px !important;
  font-size: 14px !important;
}

.list{
    list-style: none;
}
</style>
