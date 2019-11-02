<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Vue js examples</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/business">Business</router-link>
            </li>
            <li>
              <router-link to="/contact-us">Contact</router-link>
            </li>
          </ul>
          <!--<ul class="nav navbar-nav navbar-right">-->
            <!--<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>-->
          <!--</ul>-->
        </div>
      </div>
    </nav>

    <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
          <p>
            <router-link to="/show-business">Show business</router-link>
          </p>
        </div>
        <div class="col-sm-8 text-left">
          <router-view/>
        </div>
      </div>
    </div>
    <footer class="container-fluid text-center">
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active">
            <router-link to="/">Home</router-link>
          </li>

          <li>
            <router-link to="/contact-us">Contact</router-link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar {
  margin-bottom: 0;
  border-radius: 0;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
.row.content {height: 450px}

/* Set gray background color and 100% height */
.sidenav {
  padding-top: 20px;
  background-color: #f1f1f1;
  height: 100%;
}

/* Set black background color, white text and some padding */
footer {
  background-color: #555;
  color: white;
  padding: 15px;
}

/* On small screens, set height to 'auto' for sidenav and grid */
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }
  .row.content {height:auto;}
}
</style>
