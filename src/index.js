import './style.css';
import Icon from './logo.png';

let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  return map;
}



function createLastest(){
  const latestDiv = document.createElement('div');
  latestDiv.classList.add('container')
  latestDiv.classList.add('latest')
  const h1 = document.createElement('h1');
  h1.textContent = 'Latest';
  latestDiv.append(h1);
  const cardsDiv = document.createElement('div');
  cardsDiv.classList.add('cards');
  cardsDiv.innerHTML = 
  `
  <div class="card">
    <img src="../src/latest.jpg" alt="latest">
  </div>  
  <div class="card">
    <div class="intro">The <strong>HOTTEST</strong> (literally) cafe in Shinjuku !!!</div>
  </div>  
  `;
  latestDiv.append(cardsDiv);
  return latestDiv;
}

function createMenu(){
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('container')
  menuDiv.classList.add('menu')
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  menuDiv.append(h1);
  const cardsDiv = document.createElement('div');
  cardsDiv.classList.add('cards');
  cardsDiv.innerHTML = 
  `<div class="card">
    <div class="img-container"><img src="../src/menu/finger.jpg" alt=""></div>
      <p class="food-name">Sukuna's finger 1</p>
      <p class="food-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?</p>
      <p class="food-price">$15</p>
    </div>
    <div class="card">
      <div class="img-container"><img src="../src/menu/spirit.jpg" alt=""></div>
      <p class="food-name">Cursed Spirit</p>
      <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa esse placeat, magnam illum ducimus rem voluptatum incidunt maxime, sint voluptatem natus. Minima rem delectus voluptas totam optio nemo. Ea?</p>
      <p class="food-price">$5</p>
    </div>
    <div class="card">
      <div class="img-container"><img src="../src/menu/bun.jpg" alt=""></div>
      <p class="food-name">Nanami's bun</p>
      <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi inventore porro, veritatis quasi quam maiores in? Cumque iure, totam veritatis doloribus atque sed eum nam voluptas ipsum dolores dicta.</p>
      <p class="food-price">$5</p>
    </div>
    <div class="card">
      <div class="img-container"><img src="../src/menu/finger.jpg" alt=""></div>
      <p class="food-name">Sukuna's finger 2</p>
      <p class="food-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?</p>
      <p class="food-price">$15</p>
    </div>`;
  menuDiv.append(cardsDiv);
  return menuDiv;
}

function createFindUs(){
  const findUsDiv = document.createElement('div');
  findUsDiv.classList.add('container')
  findUsDiv.classList.add('latest')
  const h1 = document.createElement('h1');
  h1.textContent = 'Latest';
  findUsDiv.append(h1);
  const cardsDiv = document.createElement('div');
  cardsDiv.classList.add('cards');
  cardsDiv.innerHTML = 
  `
  <div class="card">
    <span class="contact"><i class="bi bi-geo-alt-fill"></i>: 1 234 Nishishinjuku, Shinjuku City, Tokyo</span>
    <span class="contact"><i class="bi bi-telephone-fill"></i>: +81 1-2345-6789</span>
  </div>
  <div class="card">
    <img src="../src/findus.jpg" alt="findus">
  </div>
  
  `;
  findUsDiv.append(cardsDiv);
  return findUsDiv;
}

const content = document.querySelector('#content');
const latestButton = document.querySelector('#latest-button');
const menuButton = document.querySelector('#menu-button');
const findUsButton = document.querySelector('#find-us-button');


latestButton.addEventListener('click', () => {
  while(content.firstChild){
    content.removeChild(content.firstChild);
  }
  content.appendChild(createLastest())
})

menuButton.addEventListener('click', () => {
  while(content.firstChild){
    content.removeChild(content.firstChild);
  }
  content.appendChild(createMenu());
})

findUsButton.addEventListener('click', () => {
  while(content.firstChild){
    content.removeChild(content.firstChild);
  }
  content.appendChild(createFindUs())
})

content.appendChild(createFindUs())