import './style.css';
import Logo from '../src/logo.png';
import Latest from '../src/latest.jpg';
import food1 from '../src/menu/finger.jpg';
import food2 from '../src/menu/spirit.jpg';
import food3 from '../src/menu/bun.jpg';
import food4 from '../src/menu/finger.jpg';
import Findus from '../src/findus.jpg';



function createLatest(){
  const latestDiv = document.createElement('div');
  latestDiv.classList.add('container')
  latestDiv.classList.add('latest')
  const h1 = document.createElement('h1');
  h1.textContent = 'Latest';
  latestDiv.append(h1);
  const cardsDiv = document.createElement('div');
  cardsDiv.classList.add('cards');

  const card1 = document.createElement('div');
  card1.classList.add('card');
  const latest = new Image();
  latest.src = Latest;
  card1.append(latest)
  cardsDiv.append(card1);

  const card2 = document.createElement('div');
  card2.classList.add('card');
  const intro = document.createElement('div');
  intro.classList.add('intro')
  intro.textContent = 'The HOTTEST (literally) cafe in Shinjuku !!!'
  card2.append(intro);
  cardsDiv.append(card2);

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
  // cardsDiv.innerHTML = 
  // `
  // <div class="card">
  //   <span class="contact"><i class="bi bi-geo-alt-fill"></i>: 1 234 Nishishinjuku, Shinjuku City, Tokyo</span>
  //   <span class="contact"><i class="bi bi-telephone-fill"></i>: +81 1-2345-6789</span>
  // </div>
  // <div class="card">
  //   <img src="../src/findus.jpg" alt="findus">
  // </div>
  
  // `;
  const card1 = document.createElement('div');
  card1.classList.add('card');
  const span1 = document.createElement('span');
  const icon1 = document.createElement('i');
  icon1.classList.add('bi')
  icon1.classList.add('bi-geo-alt-fill')
  span1.append(icon1);
  span1.append(': 1 234 Nishishinjuku, Shinjuku City, Tokyo');
  card1.append(span1);
  const span2 = document.createElement('span');
  const icon2 = document.createElement('i');
  icon2.classList.add('bi')
  icon2.classList.add('bi-telephone-fill')
  span2.append(icon2);
  span2.append(': +81 1-2345-6789');
  card1.append(span2);
  cardsDiv.append(card1);

  const card2 = document.createElement('div');
  card2.classList.add('card');
  const findUs = new Image();
  findUs.src = Findus;
  card1.append(findUs)
  cardsDiv.append(card2);

  findUsDiv.append(cardsDiv);
  return findUsDiv;
}

const a = document.getElementById('homepage');
const myLogo = new Image();
myLogo.src = Logo;
a.append(myLogo);
const cafe = document.createElement('h1');
cafe.textContent = 'Cafe';
a.append(cafe);

const content = document.querySelector('#content');
const latestButton = document.querySelector('#latest-button');
const menuButton = document.querySelector('#menu-button');
const findUsButton = document.querySelector('#find-us-button');


latestButton.addEventListener('click', () => {
  while(content.firstChild){
    content.removeChild(content.firstChild);
  }
  content.appendChild(createLatest())
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

content.appendChild(createLatest())