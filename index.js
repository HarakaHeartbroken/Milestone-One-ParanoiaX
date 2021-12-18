Crafty.init(200, 200);

var dim1 = {x: 5, y: 5, w: 50, h: 50}
var dim2 = {x: 75, y: 75, w: 60, h: 40}

var rect1 = Crafty.e("2D, Canvas, Color, Wall").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(50).attr(dim2).color("blue");

rect2.bind("EnterFrame", function () {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
        // collision detected!
        this.color("green");
        if (rect1.x < rect2.x + rect2.w ){
            this.x--;
        };
        if (rect1.x + rect1.w > rect2.x){
            this.xx++;
        };
        if (rect1.y < rect2.y + rect2.h){
            this.y--;
        };
        if (rect1.h + rect1.y > rect2.y){
            this.yy++;
        };
        
    } else {
        // no collision
        this.color("blue");
    }
});

// Crafty.init();

// Crafty.e("2D, Fourway, Collision, DOM, Color, WiredHitBox, player")
//       .attr({x: 32, y: 32, w: 32, h: 32})
//       .collision([0, 16, 16, 0, 32, 16, 16, 32])
//       .color('green')
//       .fourway()
//       .bind('Moved', function(evt) {
//         var hitDatas, hitData;
//         if ((hitDatas = this.hit('solid'))) {
//           // resolving collision for just one collider here and assuming SAT collision
//           hitData = hitDatas[0];
//           this.x -= hitData.overlap * hitData.normal.x;
//           this.y -= hitData.overlap * hitData.normal.y;
//         }
//       });


// Crafty.e("2D, Collision, DOM, Color, WiredHitBox, solid")
//       .attr({x: 64, y: 64, w: 64, h: 64})
//       .collision([0, 32, 32, 0, 64, 32, 32, 64])
//       .color('black');