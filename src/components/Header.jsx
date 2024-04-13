import React from 'react'

function Header(){
    return(
       
 
 
 <header class="header" data-header>
 <div class="container">

   <h1>
     <a href="#" class="logo">
       <img src="public\images\logo.png" alt="Logo" />
     </a>
   </h1>
   

   <nav class="navbar" data-navbar>

     <div class="navbar-top">
       <a href="#" class="logo">Raju Education Academy</a>

       <button class="nav-close-btn" aria-label="Close menu" data-nav-toggler>
         <ion-icon name="close-outline"></ion-icon>
       </button>
     </div>

     <ul class="navbar-list">

       <li class="navbar-item">
         <a href="#home" class="navbar-link" data-nav-toggler>Home</a>
       </li>

       <li class="navbar-item">
         <a href="#about" class="navbar-link" data-nav-toggler>About</a>
       </li>

       <li class="navbar-item">
         <a href="#courses" class="navbar-link" data-nav-toggler>Courses</a>
       </li>

       <li class="navbar-item">
         <a href="#event" class="navbar-link" data-nav-toggler>Teacher</a>
       </li>

       <li class="navbar-item">
         <a href="#" class="navbar-link" data-nav-toggler>Contact</a>
       </li>

     </ul>

   </nav>

   <div class="header-actions">


     <a href="#" class="header-action-btn login-btn">
       <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

       <span class="span">Login</span>
     </a>

     <button class="header-action-btn nav-open-btn" aria-label="Open menu" data-nav-toggler>
       <ion-icon name="menu-outline"></ion-icon>
     </button>

   </div>

   <div class="overlay" data-nav-toggler data-overlay></div>

 </div>
</header> 
    )
}
export default Header;