const imageArray1 = [
	"assets/images/outfits/top/top1.png",
  "assets/images/outfits/top/top2.png",
  "assets/images/outfits/top/top3.png",
  "assets/images/outfits/top/top4.png",
  "assets/images/outfits/top/top5.png",
  "assets/images/outfits/top/top6.png"
];


const image1 = document.querySelector('.img-top');
const button1 = document.querySelector('.button-top');


window.onload = () => generateRandomPicture(imageArray1);

button1.addEventListener("click", () => generateRandomPicture(imageArray1));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image1.setAttribute('src', array[randomNum]);
}



const imageArray2 = [
	"assets/images/outfits/bottom/bottom1.png",
  "assets/images/outfits/bottom/bottom2.png",
  "assets/images/outfits/bottom/bottom3.png",
  "assets/images/outfits/bottom/bottom4.png",
  "assets/images/outfits/bottom/bottom5.png",
  "assets/images/outfits/bottom/bottom6.png"
];

const image2 = document.querySelector(".img-bottom");
const button2 = document.querySelector(".button-bottom");


window.onload = () => generateRandomPicture(imageArray2);

button2.addEventListener("click", () => generateRandomPicture(imageArray2));


function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image2.setAttribute('src', array[randomNum]);
}