## cat-animation(use lottie)
先前在工作上有用到此套件，故寫下整理筆記<br>
test for lottie 套件    
使用相關套件-  
animation:lottie  
slider:rc-slider  
icon:react-icons  
<br>
Lottie     
**命名由來:**   
發想於一位德國的動畫導演的名字Lotte Reiniger，
她最著名的作品-The Adventures of Prince Achmed (1926)為最古老的長篇動畫，
所以團隊將此套件取名為Lottie。
<br><br>
**簡介:** <br>
Lottie由Airbnb所發展，   
是一套適用於各類平台像是Android、iOS、Web和Windows的函式庫(Library)，
設計師將Adobe After Effects動畫經由Bodymovin的擴充功能輸出成JSON格式的檔案， 
而Lottie讀取這個轉換後的JSON檔案，可以將設計師的動畫及時渲染在裝置上。
<br><br>
**Lottie的優點:**<br>
那你應該會想問，為什麼不直接放gif的動畫就好?<br>
Lottie除了呈現動畫外，<br>
也可以透由程式去控制動畫的播放速度、轉換角度等效果，<br>
甚至可以新增addListener事件抓到動畫的開始、結束點，做更多的應用。<br>
而除了在動畫控制的自由度上，再來是文件大小的部分，<br>
json檔案的大小比gif檔案小，且不會有邊緣鋸齒的狀況，性能當然也更好，<br>
以及不會有畫質壓縮等等的問題。
<br><br>
**Lottie的缺點:**<br>
1.如果設計師的Adobe After Effects建了很多圖層，可能會造成json檔案文件大的問題。<br>
2.Adobe After Effects某些動畫效果無法實現(像是描邊動畫等)<br>
3.lottie其實在html上是svg、canvas動畫，若你想用自己程式寫動畫添加效果，就無法利用lottie。<br>
<br><br>
在使用lottie前，要先有json檔案，<br>
可以有兩種方法取得:<br>
**方案一:直接拿現成的json檔案**<br>
此網站上面有各種已經轉換的JSON動畫。<br>
https://lottiefiles.com/<br>
**方案二:自己生成JSON檔案**<br>
那如果你會做動畫，可以參考這篇文章，自行生成JSON檔案，來呈現自己製作的動畫。<br>
https://medium.com/as-a-product-designer/%E5%BF%83%E5%BE%97%E5%88%86%E4%BA%AB-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8lottie-%E5%B0%87%E5%AE%8C%E7%BE%8E%E5%8B%95%E7%95%AB100-%E5%91%88%E7%8F%BE%E5%9C%A8%E7%94%A2%E5%93%81%E4%B8%8A-7ac7107abfa5
<br><br>
## lottie notes
*Html搭配lottie套件*<br>
*CDN(Content delivery network):*<br>
```html 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie.js"></script>
```
*設定容器大小:*<br>
```js     
#svgContainer { 
  width: 300px;
}
```
*設定動畫內容:*<br>
```js     
var animation = bodymovin.loadAnimation({
  container: document.getElementById('svgContainer'), //放入的容器
  renderer: 'svg', //有svg、canvas、html選項 
  loop: true, //動畫是否要循環播放
  autoplay: true, //一開始自動播放
  path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json'// json檔案的路徑
})
```
*Html完整程式碼*<br>
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
