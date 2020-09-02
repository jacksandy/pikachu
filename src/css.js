const string = `/*
*让我们来做一只小可爱吧~
*看看你能猜出来我的名字嘛？
*首先，他有黄色的皮肤
*/
  .skin {
    background: #ffe600;
    min-height: 50vh;
    position: relative;
  }
  /*
  * 然后是黑色的小鼻子
  */
  .nose {
    border: 10px solid red;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 148px;
    margin-left: -10px;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
  }

  /*
  *再来一双可爱的大眼睛
  */
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid #000;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  /*
  *一张樱桃大口
  */
  .mouth {
    width: 150px;
    height: 150px;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    top: 180px;
  }
  .mouth .up {
    position: relative;
    top: -10px;
    z-index: 1;
  }
  /*
  *卡哇伊的上嘴唇
  */
  .mouth .up .lip {
    border: 3px solid #000;
    width: 75px;
    height: 25px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-22deg);
    margin-left: -75px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(22deg);
    margin-right: -75px;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -4px;
  }
  .mouth .up .lip.right::before {
    left: -4px;
  }
  /*
  *圆润的下嘴唇
  */
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 0px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    width: 100%;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 75px/400px;
    background: #9b000a;
    overflow: hidden;
  }
  /*
  *看我的小舌头
  */
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff458f;
    position: absolute;
    bottom: -156px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  /*
  *再来一副小脸蛋
  */
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    margin-left: -44px;
    z-index: 1;
    top: 235px;
    background: #ff0000;
    border-radius: 50%;
  }
  .face.left {
    transform: translateX(-152px);
  }
  .face.right {
    transform: translateX(152px);
  }
/*
 * 看我可爱吗？允许你摸摸我的鼻子哦~
 * 小i童鞋 祝你开启一个愉快的夜晚呐~~哈哈哈
 * 
 * 
 * 
*/
`;

export default string;
