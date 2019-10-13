$("body").on("touchmove", function (e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;

    if (X > 0) {
        if (moveLeft()) {
            //setTimeout("generateOneNumber()",210);
            getScore();
            generateOneNumber();//每次新增一个数字就可能出现游戏结束
            setTimeout("isgameover()", 400);//300毫秒
        }
        break;
    }
    else if (X < 0) {
        if(moveUp()){
        	getScore();
            generateOneNumber();//每次新增一个数字就可能出现游戏结束
            setTimeout("isgameover()",400);
        }
        break;
    }
    else if (Y > 0) {
        if(moveRight()){
        	getScore();
            generateOneNumber();//每次新增一个数字就可能出现游戏结束
            setTimeout("isgameover()",400);
        }
        break;
    }
    else if (Y < 0) {
        if(moveDown()){
        	getScore();
            generateOneNumber();//每次新增一个数字就可能出现游戏结束
            setTimeout("isgameover()",400);
        }
        break;
 
    }
});