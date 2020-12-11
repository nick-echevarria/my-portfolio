<template>
  <header>
    <div>
        <input type="checkbox" id="active">
        <label for="active" class="menu-btn">
          <i class="fas fa-bars" />
        </label>
        <div class="wrapper">
            <ul class="">
                <li
                  v-for="({ label, to }, i) in navItems"
                  :key="i"
                >
                  <nuxt-link v-bind="{ to }">
                    {{ label }}
                  </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
  </header>
</template>

<script>
  export default {
    data: () => ({
      menuOpen: false,
      navItems: [
        { label: 'home 🏡 ', to: '/' },
        { label: 'software development ⌨️', to: '/code' }, 
        { label: 'copywriting 📝', to: '/copywriting' }, 
        { label: 'about nick 🙋🏾‍♂️', to: '/about' }, 
        { label: 'contact 📱', to: '/contact' }
      ]
    })
  }
</script>

<style scoped>
  header { 
      height: 90px;
  }    

  header > div {
      background-color: #ffcb0c;
      display: flex; 
      justify-content: center;
      align-items: center; 
      justify-content: space-around;
      font-family: "Montserrat";
      font-size: 30px;
      color: white;
  }

  .wrapper{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #ffcb0c;
        clip-path: circle(25px at calc(100% - 45px) 45px);
        transition: all 0.3s ease-in-out;
    }

    #active:checked ~ .wrapper{
        clip-path: circle(75%);
    }

    .menu-btn{
        position: absolute;
        z-index: 2;
        right: 20px;
        top: 20px;
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        font-size: 20px;
        /* color: purple; */
        cursor: pointer;
        background: white;
        transition: all 0.3s ease-in-out;
    }
    
    #active:checked ~ .menu-btn{
        color: #fff;
    }

    #active:checked ~ .menu-btn i:before {
        content: "\f00d";
    }

    .wrapper ul{
        height: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }

    .wrapper ul li{
        margin: 15px 0;
  
    }

    .wrapper ul li a{
        text-decoration: none;
        font-size: 35px;
        font-weight: 500;
        padding: 5px 25px;
        color: #fff;
        display: flex;
        justify-content: flex-end;
        line-height: 40px;
        transition: all 0.3s ease;
    }

    .wrapper ul li a:after {
        position: absolute;
        content: "";
        /* background: purple; */
        width: 104%;
        height: 110%;
        left: -2%;
        top: -5%;
        transform: scaleY(0);
        z-index: -1;
        animation: rotate 1.5s linear infinite;
        transition: transform 0.3s ease;
    }

    .wrapper ul li a:hover:after{
        transform: scaleY(1);
    }

    .wrapper ul li a:hover{
        color: purple;
    }

    input[type="checkbox"]{
        display: none;
    }
</style>
