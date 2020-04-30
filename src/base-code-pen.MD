### Code du Code pen exemple projet WHACK-A-VIRUS

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="rectangle" id="rectangle">
      <div class="circle" id="circle"></div>
      <div class="circle2" id="circle2"></div>
    </div>
  </div>
  <div class="container2">
    <div class="life">
      <div class="realLife"></div>
      <div class="bullet"></div>
    </div>
  </div>
</body>
</html>
```
```css
*,::after,::before {
  box-sizing: border-box;
}

.container {
  width: 600px;
  height:600px;
  position:relative;
}
.rectangle {
  width:100%;
  height:75%;
  background-color: #111;
  postion:relative;
  padding:1%;
}
.circle {
  width:100px;
  height:100px;
  position:absolute;
  background-color: green;
  border-radius:50%;

}
.circle2 {
  width:100px;
  height:100px;
  position:absolute;
  background-color: orange;
  border-radius:50%;
}

.container2{}

.life {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height:250px;
  width:25px;
  border-radius: 10px;
  background-color:green;
  position:relative;
  padding-bottom: 2px;
}
.realLife {
  border-radius: 10px;
  height:60%;
  width:66%;
  position:absolute;
  background-color:blue;
  z-index:10
}
.bullet {
  background-color: blue;
  border-radius: 50%;
  position:absolute;
  width:40px;
  height:40px;
  top:230px;
  border: 5px solid green;
  border-top:none;
  z-index:0;
}
```
```js
const rectangle = document.getElementById("rectangle")
const circle = document.getElementById("circle")
const rectWidth = parseFloat(getComputedStyle(rectangle).width)
const rectHeight = parseFloat(getComputedStyle(rectangle).height)
const circleWidth = parseFloat(getComputedStyle(circle).width)
const circleHeight = parseFloat(getComputedStyle(circle).height)
const maxX = rectWidth - (circleWidth)
const maxY = rectHeight - (circleHeight)
console.log(rectWidth, rectHeight)

const definePosition = () => {
  const posX = Math.random() * maxX
  const posY = Math.random() * maxY
  const posX2 = Math.random() * maxX
  const posY2 = Math.random() * maxY
  circle.style.left = posX + 'px'
  circle.style.top = posY + 'px'
  circle2.style.left = posX2 + 'px'
  circle2.style.top = posY2 + 'px'
}

setInterval(definePosition,750)
```