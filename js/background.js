 const images = [
    "1.jpg",
    "2.jpg",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
   
 ];

 const chosenImage = images[Math.floor(Math.random()*images.length)]
 console.log(chosenImage)

 const bgImage = document.createElement("img")
 bgImage.src = `img/${chosenImage}`

 const bgContainer = document.querySelector("#bgContainer")
 bgContainer.appendChild(bgImage)