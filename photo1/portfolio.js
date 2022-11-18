let anchor = [
    '<a href="../david005"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../jessica132"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../yasmine743"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../tven590"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../briana009"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../carlos460"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../citlaly001"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../jenifer002"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../jesus019"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../odalis001"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../adriana012"><h4>Click here to see another portfolio</h4></a>',
    '<a href="../alexandra499"><h4>Click here to see another portfolio</h4></a>',
]

var rand = Math.floor(Math.random() * anchor.length);

document.getElementById("link").innerHTML = anchor[rand];


//function getImage(imgID) {
//    var randomImgSrc = imgArray[Math.floor(Math.random() * imgArray.length)];
//    document.getElementById(imgID).innerHTML = anchor[rand];
//}
