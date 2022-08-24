<script setup lang="ts">
import { RouterLink } from 'vue-router'

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x!.className === "topnav") {
    x!.className += " responsive";
  } else {
    x!.className = "topnav";
  }
}

</script>
<template>
<div class="topnav" id="myTopnav">
  <RouterLink class="active" to="/">Home</RouterLink>
  <RouterLink to="/bookstore">Book Store</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" @click="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<!-- <nav class="navbar">
     <div class="logo">DoICT</div>
     <ul class="nav-links">
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       <div class="menu">
         <li><RouterLink to="/">Home</RouterLink></li>
         <li><RouterLink to="/bookstore">Book Store</RouterLink></li>
         <li><RouterLink to="/about">About</RouterLink></li>
         <li class="services">
           <a href="/">Services</a>
           
           <ul class="dropdown">
             <li><a href="/">Dropdown 1 </a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 3</a></li>
             <li><a href="/">Dropdown 4</a></li>
           </ul>
         </li>
         <li><a href="/">Pricing</a></li>
         <li><a href="/">Contact</a></li>
         <a href="javascript:void(0);" class="icon" @click="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
       </div>
     </ul>
   </nav> -->
</template>
<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  width: 100%;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>