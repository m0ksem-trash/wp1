
function createFlower() {
  var flower = document.createElement("img");

  flower.src = "./imgs/flowers/" + Math.floor(Math.random() * 7) + ".png";
  flower.height = Math.floor(Math.random() * (30 - 10)) + 16;
  flower.width = flower.height;
  flower.classList += "flower";

  return flower;
}

function Tree() {
  var tree = document.getElementById("tree");
  this.tree = tree;
  var branches = [];
  this.branches = branches;

  function Vector(top1, left1, top2, left2 ,ver_shift, horiz_shift) {
    this.flowers = [];
    var l1 = Math.sqrt(Math.pow((top2 - top1), 2) + Math.pow((left2 - left1), 2));
    var l2 = ver_shift + horiz_shift;
    var sqr = l1*l2;
    var times = sqr / 1200

    this.createFlower = function () {
      var flower = document.createElement("img");

      flower.src = "./imgs/flowers/" + Math.floor(Math.random() * 7) + ".png";
      flower.height = Math.floor(Math.random() * (30 - 10)) + 16;
      flower.width = flower.height;
      flower.classList += "flower";

      this.flowers.push(flower);

      var A = left1 - left2;
      var B = top1 - top2;
      var C = top1 * left2 - top2 * left1;

      var top = Math.floor(Math.random() * (top1 - top2)) + top2;

      var left = (C + A*top) / B + Math.floor(Math.random() * (horiz_shift - (-horiz_shift))) - horiz_shift;

      top += + Math.floor(Math.random() * (ver_shift - (-ver_shift))) - ver_shift;

      flower.style.top = top + "px";
      flower.style.left = left + "px"

      tree.appendChild(flower);
    }

    for (var i = 0; i < times;  i++) {
      this.createFlower();
    }
  }

  branches.push(
    // Центральная ветка
    new Vector(166, 375, 225, 395, 30, 30),
    new Vector(166, 375, 225, 395, 30, 30),
    new Vector(200, 326, 404, 490, 30, 30),
    new Vector(210, 515 , 303, 463, 30, 30),
    new Vector(255, 555, 455, 579, 30, 30),
    new Vector(431, 395, 428, 533, 30, 30),
    new Vector(472, 580, 552, 623, 30, 30),
    new Vector(570, 680, 552, 623, 30, 30),
    // Левая ветка
    new Vector(384, 95, 495, 187, 60, 30),
    new Vector(450, 60, 483, 149, 60, 30),
    new Vector(495, 187, 617, 393, 60, 30),
    new Vector(531, 40, 583, 180, 60, 30),
    new Vector(570, 0, 583, 180, 60, 30),
    new Vector(583, 180, 576, 226, 60, 30),
    new Vector(615, 314, 576, 226, 60, 30),
    new Vector(666, 156, 615, 314, 60, 30),
    new Vector(657, 576, 615, 314, 60, 40),
    new Vector(790, 424, 657, 576, 60, 50),
    new Vector(477, 374, 648, 503, 60, 30),
    new Vector(790, 424, 630, 633, 60, 20),
    new Vector(915, 457, 890, 510, 60, 20),
    new Vector(890, 510, 816, 537, 60, 30),
    new Vector(816, 537, 897, 595, 60, 20),
    new Vector(897, 595, 774, 666, 60, 10),
    new Vector(748, 594, 774, 666, 60, 20),
    new Vector(774, 666, 742, 748, 40, 40),
    new Vector(633, 668, 742, 748, 40, 40),
    new Vector(769, 807, 759, 941, 60, 0),
    new Vector(769, 807, 759, 941, 60, 0),
    new Vector(769, 807, 759, 941, 60, 0),
    //
    new Vector(562, 600, 604, 746, 20, 20),
    new Vector(647, 794, 604, 746, 20, 20),
    new Vector(525, 737, 642, 836, 60, 30),
    // Правая ветка
    new Vector(0, 1022, 328, 894, 60, 60),
    new Vector(137, 808, 328, 894, 60, 60),
    new Vector(494, 890, 328, 894, 60, 60),
    new Vector(435, 700, 532, 926, 60, 60),
    new Vector(330, 1088, 572, 968, 40, 40),
    new Vector(572, 968, 660, 970, 60, 60),
    new Vector(660, 970, 728, 1050, 60, 60),
    new Vector(520, 1148, 767, 1112, 60, 40),
    new Vector(728, 1050, 842, 1044, 60, 60)
  );

  this.FallingFlowers = function() {
    var random_vector = Math.floor(Math.random() * branches.length);
    console.log( this.branches);
    var random_flower = Math.floor(Math.random() * branches[random_vector].flowers.length);

    var t = setInterval(function() {
      var random_vector_pos = Math.floor(Math.random() * branches.length);
      var random_flower_pos = Math.floor(Math.random() * branches[random_vector_pos].flowers.length);
      var random_flower = branches[random_vector_pos].flowers[random_flower_pos];
      animateFlower(random_flower, random_vector_pos);
    }, 300)

    function animateFlower(flower, branche) {
      var timer = setInterval(function() {
        if (flower.offsetTop > 930) {
          branches[branche].createFlower();
          clearInterval(timer);
        }
        flower.style.top = (parseInt(flower.style.top) + 6) + "px";
        flower.style.left = (parseInt(flower.style.left) - 1) + "px";
      }, 20)
    }
  }
}

var tree = new Tree();
tree.FallingFlowers();

