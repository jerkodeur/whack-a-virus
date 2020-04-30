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
  
</body>
</html>
```
```css

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