let anchor = [
    '<a href="../david005/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../jessica132/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../yasmine743/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../tven590/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../briana009/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../carlos460/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../citlaly001/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../jenifer002/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../jesus019/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../odalis001/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../adriana012/index.html"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../alexandra499/index.html"><h4>Click here to see another portfolio</h4></a>',
]

var rand = Math.floor(Math.random() * anchor.length);

document.getElementById("link").innerHTML = anchor[rand];


//function getImage(imgID) {
//    var randomImgSrc = imgArray[Math.floor(Math.random() * imgArray.length)];
//    document.getElementById(imgID).innerHTML = anchor[rand];
//}
