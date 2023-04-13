const imageArray1 = [
	"assets/images/outfits/top/top1.png",
  "assets/images/outfits/top/top2.png",
  "assets/images/outfits/top/top3.png",
  "assets/images/outfits/top/top4.png",
  "assets/images/outfits/top/top5.png",
  "assets/images/outfits/top/top6.png"
];

const imageArrayBottom = [
	"assets/images/outfits/bottom/bottom1.png",
  "assets/images/outfits/bottom/bottom2.png",
  "assets/images/outfits/bottom/bottom3.png",
  "assets/images/outfits/bottom/bottom4.png",
  "assets/images/outfits/bottom/bottom5.png",
  "assets/images/outfits/bottom/bottom6.png"
];

const topList = document.getElementById("topList");
const bottomList = document.getElementById("bottomList")
// addAll(topList, imageArray1) 
// addAll(bottomList, imageArrayBottom)


// Generate random picture takes a list_select pointer to the html elelemnt and list of picture
// It will output a random picture from the list of picture and add it to the list emlement list_selector point to 
function addAll(list_select, listPicture) {
  list_select.innerHTML = '';
  for (const element of listPicture) {
    let newListItem = document.createElement('li');
    let newImage = document.createElement('img');
    newImage.src = element; 
    newListItem.appendChild(newImage);
    list_select.appendChild(newListItem);
  }
}

function generateARandomPicture(list_select, listPicture) {  
  let newImage = document.createElement('img');
  let newListItem = document.createElement('li');
  let currentIndex = 0;
  newImage.src = listPicture[currentIndex]; 
  newListItem.appendChild(newImage);
  list_select.appendChild(newListItem);
  listPicture.sort(() => Math.random() - 0.5);
  // Function to change the image at a 0.2-second interval
  let intervalId = setInterval(() => {
    // Get the next image URL
    currentIndex = (currentIndex + 1) % listPicture.length;
    let nextImage = listPicture[currentIndex];
    // Set the image source to the next image URL
    newImage.src = nextImage;
  }, 400);
  
  // Stop changing the image after 3 seconds
  setTimeout(() => {
    clearInterval(intervalId);
  }, 1200);
}




function generateTop() {
  topList.innerHTML = '';
  generateARandomPicture(topList, imageArray1)
}

function generateBottom() {
  bottomList.innerHTML = '';
  generateARandomPicture(bottomList, imageArrayBottom)
} 

function generateAll() {
  generateBottom();
  generateTop();
} 