## cat-animation(use lottie)
test for lottie 套件    
使用相關套件-  
animation:lottie  
slider:rc-slider  
icon:react-icons  
<br>
Lottie     
命名由來:    
發想於一位德國的動畫導演的名字Lotte Reiniger，  
她最著名的作品-The Adventures of Prince Achmed (1926)為最古老的長篇動畫，  
所以團隊將此套件取名為Lottie。  
<br>
簡介:  
Lottie由Airbnb所發展，    
是一套適用於各類平台像是Android、iOS、Web和Windows的函式庫(Library)， 
設計師將Adobe After Effects動畫經由Bodymovin的擴充功能輸出成JSON格式的檔案，  
而Lottie讀取這個轉換後的JSON檔案，可以將設計師的動畫及時渲染在裝置上。
<br>
## lottie notes
因先前寫的部落格沒更新，雲端主機被砍xD<br>
所以把lottie的筆記拿來這邊放<br>
*CDN(Content delivery network):*
```js<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie.js"></script>```
*Html+lottie<br>*
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!--  Meta  -->
  <meta charset="UTF-8" />
  <title>lottie demo</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie.js"></script>
  <style>
    #svgContainer { 
        width: 200px;
    }
  </style>
</head>
<body>
  <div id="svgContainer"> </div>
  <script>
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('svgContainer'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json'
    })
  </script>
</body>
</html>
```

## UI(手機)  
- 動畫開始/停止 : 播放及停止鍵  
- 調整速度 : Slider  
- 更換動畫 : 左右button  
<img src="https://github.com/ruby840124/cat-animation/blob/master/demo/mobile1.jpg" width="30%" height="45%">
<img src="https://github.com/ruby840124/cat-animation/blob/master/demo/mobile2.jpg" width="30%" height="45%">  
<br>

## UI(PC)
<img src="https://github.com/ruby840124/cat-animation/blob/master/demo/pc.JPG" width="60%" height="60%">  
<br>

## demo
https://ruby840124.github.io/cat-animation/
