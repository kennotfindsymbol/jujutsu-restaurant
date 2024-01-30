import './style.css';
import Icon from './logo.png';
import food1 from '../src/menu/finger.jpg';
import food2 from '../src/menu/spirit.jpg';
import food3 from '../src/menu/bun.jpg';
import food4 from '../src/menu/finger.jpg';



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
  // cardsDiv.innerHTML = 
  // `
  //   <div class="card">
  //     <div class="img-container"><img src="../src/menu/spirit.jpg" alt=""></div>
  //     <p class="food-name">Cursed Spirit</p>
  //     <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa esse placeat, magnam illum ducimus rem voluptatum incidunt maxime, sint voluptatem natus. Minima rem delectus voluptas totam optio nemo. Ea?</p>
  //     <p class="food-price">$5</p>
  //   </div>
  //   <div class="card">
  //     <div class="img-container"><img src="../src/menu/bun.jpg" alt=""></div>
  //     <p class="food-name">Nanami's bun</p>
  //     <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi inventore porro, veritatis quasi quam maiores in? Cumque iure, totam veritatis doloribus atque sed eum nam voluptas ipsum dolores dicta.</p>
  //     <p class="food-price">$5</p>
  //   </div>
  //   <div class="card">
  //     <div class="img-container"><img src="../src/menu/finger.jpg" alt=""></div>
  //     <p class="food-name">Sukuna's finger 2</p>
  //     <p class="food-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?</p>
  //     <p class="food-price">$15</p>
  //   </div>`;
  const card1 = document.createElement('div');
  card1.classList.add('card');
  const imgContainer1 = document.createElement('div');
  imgContainer1.classList.add('img-container')
  const myImage1 = new Image();
  myImage1.src = food1;
  imgContainer1.append(myImage1);
  const foodName1 = document.createElement('p');
  foodName1.classList.add('food-name');
  foodName1.textContent = 'Sukuna\'s finger 1';
  const foodDescription1 = document.createElement('p');
  foodDescription1.classList.add('food-description');
  foodDescription1.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?`;
  const foodPrice1 = document.createElement('p');
  foodPrice1.classList.add('food-price');
  foodPrice1.textContent = '$15';
  card1.append(imgContainer1);
  card1.append(foodName1);
  card1.append(foodDescription1);
  card1.append(foodPrice1);
  cardsDiv.append(card1);



  const card2 = document.createElement('div');
  card2.classList.add('card');
  const imgContainer2 = document.createElement('div');
  imgContainer2.classList.add('img-container')
  const myImage2 = new Image();
  myImage2.src = food2;
  imgContainer2.append(myImage2);
  const foodName2 = document.createElement('p');
  foodName2.classList.add('food-name');
  foodName2.textContent = 'Cursed Spirit';
  const foodDescription2 = document.createElement('p');
  foodDescription2.classList.add('food-description');
  foodDescription2.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa esse placeat, magnam illum ducimus rem voluptatum incidunt maxime, sint voluptatem natus. Minima rem delectus voluptas totam optio nemo. Ea?`;
  const foodPrice2 = document.createElement('p');
  foodPrice2.classList.add('food-price');
  foodPrice2.textContent = '$10';
  card2.append(imgContainer2);
  card2.append(foodName2);
  card2.append(foodDescription2);
  card2.append(foodPrice2);
  cardsDiv.append(card2);

  const card3 = document.createElement('div');
  card3.classList.add('card');
  const imgContainer3 = document.createElement('div');
  imgContainer3.classList.add('img-container')
  const myImage3 = new Image();
  myImage3.src = food3;
  imgContainer3.append(myImage3);
  const foodName3 = document.createElement('p');
  foodName3.classList.add('food-name');
  foodName3.textContent = 'Nanami\'s bun';
  const foodDescription3 = document.createElement('p');
  foodDescription3.classList.add('food-description');
  foodDescription3.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi inventore porro, veritatis quasi quam maiores in? Cumque iure, totam veritatis doloribus atque sed eum nam voluptas ipsum dolores dicta.`;
  const foodPrice3 = document.createElement('p');
  foodPrice3.classList.add('food-price');
  foodPrice3.textContent = '$5';
  card3.append(imgContainer3);
  card3.append(foodName3);
  card3.append(foodDescription3);
  card3.append(foodPrice3);
  cardsDiv.append(card3);

  const card4 = document.createElement('div');
  card4.classList.add('card');
  const imgContainer4 = document.createElement('div');
  imgContainer4.classList.add('img-container')
  const myImage4 = new Image();
  myImage4.src = food4;
  imgContainer4.append(myImage4);
  const foodName4 = document.createElement('p');
  foodName4.classList.add('food-name');
  foodName4.textContent = 'Sukuna\'s finger 2';
  const foodDescription4 = document.createElement('p');
  foodDescription4.classList.add('food-description');
  foodDescription4.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?`;
  const foodPrice4 = document.createElement('p');
  foodPrice4.classList.add('food-price');
  foodPrice4.textContent = '$15';
  card4.append(imgContainer4);
  card4.append(foodName4);
  card4.append(foodDescription4);
  card4.append(foodPrice4);
  cardsDiv.append(card4);


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

content.appendChild(createMenu())