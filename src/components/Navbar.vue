<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><RouterLink to="/">Homepage</RouterLink></li>
        <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
        <li><RouterLink to="/tp-td">TP/TD</RouterLink></li>
        <li><RouterLink to="/veille-technologique">Veille technologique</RouterLink></li> 
        <li><RouterLink to="/about">A propos</RouterLink></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a><img src="/public/Logo_MsQuest.png" alt="Logo MsQuest" class="w-10 h-10 rounded-full"></a>
  </div>
  <div class="navbar-end">
  </div>
</div>
</template>
