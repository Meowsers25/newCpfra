const template = document.createElement('template')

template.innerHTML = `
<style>
* {
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

nav {
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 8vh;
	background-color: #5d4954;
	font-family: 'Poppins', sans-serif;
}

.logo {
	color: rgb(226, 226, 226);
	letter-spacing: 5px;
	font-size: 20px;
}

.nav-links {
	display: flex;
	justify-content: space-around;
	width: 65%;
}

.nav-links li {
	list-style: none;
}
.nav-links a {
	color: rgb(226, 226, 226);
	text-decoration: none;
	letter-spacing: 3px;
	font-weight: bold;
	font-size: 14px;
}

.burger {
	display: none;
	cursor: pointer;
}

.burger div {
	width: 25px;
	height: 2px;
	background-color: rgb(226, 226, 226);
	margin: 5px;
	transition: all 0.3s ease;
}

@media screen and (max-width: 1024px) {
	.nav-links {
		width: 65%;
	}
}

@media screen and (max-width: 760px) {
	body {
		overflow-x: hidden;
	}
	.nav-links {
		position: absolute;
		right: 0px;
		height: 92vh;
		top: 8vh;
		background-color: #5d4954;
		display: flex;
		flex-direction: column;
		align-items: center;
		transform: translateX(100%);
		transition: transform 0.5s ease-in;
	}
	.nav-links li {
		opacity: 0;
	}
	.burger {
		display: block;
	}
}

.nav-active {
	transform: translateX(0%);
}

@keyframes navLinkFade {
	from {
		opacity: 0;
		transform: translateX(50px);
	}
	to {
		opacity: 1;
		transform: translateX(0px);
	}
}

.toggle .line1 {
	transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
	opacity: 0;
}

.toggle .line3 {
	transform: rotate(45deg) translate(-5px, -6px);
}

</style>
<nav>
    <div class="logo">
      <h4>CPFRA</h4>
    </div>
    <ul class="nav-links">
      <li><a href="#">Medical Claims Packet</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Recent Deaths</a></li>
      <li><a href="#">Board of Directors</a></li>
      <li><a href="#">By-Laws</a></li>
    </ul>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
  
`
class NavBar extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.shadowRoot.querySelector('')
  }

  navSlide() {
    // const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
  
    // toggle nav
    // burger.addEventListener('click', () =>{
      nav.classList.toggle('nav-active')
  
      //animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
        }
      })
      // burger animation
      burger.classList.toggle('toggle')
    //})
   }
  

  connectedCallback() {
    this.shadowRoot.querySelector('.burger').addEventListener('click', () => this.navSlide())
  }
}

window.customElements.define('nav-bar', NavBar)