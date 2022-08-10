const images = ["1.jpg","2.jpg","3.jpg"];
const image = document.getElementById("image");
const chosenimage = images[Math.floor(Math.random()*images.length)]

const bgimage = document.createElement("img")

 bgimage.src ="img/"+chosenimage ;
 image.appendChild(bgimage);
 //document.body.appendChild(bgimage);