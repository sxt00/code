## svg(Scalable Vector Graphics) 可缩放矢量图 是一种基于 xml语法的图像格式    可以通过 js css 来更改样式


### 使用方法
1. 直接放入 html 中
2. 作为img  通过 src 引入 
3. iframe 通过 src 引入
4. object data="svg.svg" type = "image/svg+xml"
5. embed  通过 src 引入    type = "image/svg+xml"

### 使用img 较快速 但是不易操作

## 

 <svg width="100%" height="100%" >
    <circle id="my circle" cx="100" cy="50" r="50" fill="blue">
            cx  cy 代表圆心 x  y  的 值   r 代表 半径
    </circle>
</svg>

svg 图像 在html 中 默认像素  300(宽) * 150(高)

宽高设置均为像素值  

viewBox = "50 50 50 50"

前两个为坐标点  后面为 宽高切出来

注意，视口必须适配所在的空间。上面代码中，视口的大小是5050，由于SVG图像的大小是100100，所以视口会放大去适配SVG图像的大小，即放大了四倍。
如果不指定width属性和height属性，只指定viewBox属性，则相当于只给到定SVG图像的长宽比。这时，SVG图像的默认大小将等于所在的HTML元素的大小。

### 圆形
<circle></circle>
可以添加 css class 属性 来更改样式