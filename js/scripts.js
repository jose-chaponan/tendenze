let _callServices = () => {
  fetch('json/services.json')
  .then(response => response.json())
  .then(data => {
    let services = document.getElementsByClassName('services');
    let arrayData = data.services;
    arrayData.map((val, index) =>{
      let tagWrapp = document.createElement('div');
      let imgWrapp = document.createElement('img');
      let caption = document.createElement('h3');
      caption.innerHTML = val.title;
      tagWrapp.appendChild(imgWrapp).src = val.img;
      tagWrapp.appendChild(caption).classList.add('align_center');
      services[0].appendChild(tagWrapp).classList.add('itemServices');
    });
  });
}

let _callClients = () => {
  fetch('json/clients.json')
    .then(response => response.json())
    .then(data => {
      let clientes = document.getElementsByClassName('clientes');
      let arrayData = data.clientes;
      arrayData.map((val, index) => {
        let imgWrapp = document.createElement('img');
        imgWrapp.width = val.width;
        imgWrapp.title = val.title;
        imgWrapp.classList.add('cli-'+val.tipo);
        clientes[0].appendChild(imgWrapp).src = val.img
      });
    });
}

let _callGallery = () => {
  fetch('json/gallery.json')
    .then(response => response.json())
    .then(data => {
      let gallery = document.getElementsByClassName('gallery');
      let arrayData = data.gallery;
      arrayData.map((val, index) => {
        let tagWrapp = document.createElement('div');
        tagWrapp.classList.add('itemGallery');
        let imgWrapp = document.createElement('img');
        imgWrapp.title = val.title;
        imgWrapp.src = val.img;
        tagWrapp.appendChild(imgWrapp);
        gallery[0].appendChild(tagWrapp)
      });
    });
}

/*Fixed header */
let sticky = 0;

let _fixedHeader = () => {
  let header = document.getElementById("header");
  sticky = parseInt(header.offsetTop) + 300;

  if (window.pageYOffset > sticky) {
    header.classList.add("fixedHeader");
  } else {
    header.classList.remove("fixedHeader");
  }
}

let _parallaxSlider = () => {
    let slider = document.getElementById("sliderPrincipal");
    let scrolled = window.pageYOffset;
    slider.style.backgroundPosition = 'center ' + - (scrolled * 0.3) + 'px';
}

/*Ready functions */
_callGallery();
_callServices();
_callClients();

let _clickAnchorLink = () =>{
  document.querySelectorAll('.anchor[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      let header = document.getElementById('header').offsetHeight;
      let attribute = document.querySelector(this.getAttribute('href'));
      let position = parseInt(attribute.offsetTop) - (parseInt(header) + 20);

      document.getElementById('hb').classList.remove('activeHamburguer');
      document.querySelector('nav > ul').classList.remove('activeMenu');

      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    });
  });
}

let _openHideMenu = () => {
  let hb = document.getElementById('hb');
  let ulMenu = document.querySelector('nav > ul');
  hb.onclick = function(e){
    e.preventDefault();
    hb.classList.toggle('activeHamburguer');
    ulMenu.classList.toggle('activeMenu');
  }
}

window.onload = () => {
  _clickAnchorLink();
  _openHideMenu();
  window.onscroll = () => {
    _parallaxSlider();
    _fixedHeader();
  }
}