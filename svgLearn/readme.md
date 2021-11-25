# Svg
SVG是一种XML语言，类似XHTML，可以用来绘制矢量图形
SVG支持渐变、旋转、动画、滤镜效果、与JavaScript交互等等功能
一个简单的SVG文档由<svg>根元素和基本的形状元素构成。另外还有一个g元素，它用来把若干个基本形状编成一个组。
 <svg width="100%" height="100%" >
</svg>

缺点： 加载慢
优点： 实现了DOM接口 比较方便 不需要装插件 flash 

不同的浏览器对 svg 的支持可以参考
https://caniuse.com/

## svg 文件的基本属性
 后来者居上 后面的会覆盖到之前的元素上

## 坐标定位
以左上角为原点 x y 轴

view 四个 数字 定义显示的部位 会将 该区域内的图形放大 显示到 整个svg画布上

## 基本形状
#### 矩形
rect
x 矩形左上角的x位置
y 矩形左上角的y位置
width 矩形的宽度
height  矩形的高度
rx  圆角的x方位的半径
ry  圆角的y方位的半径

#### 圆形
circle
r
圆的半径
cx
圆心的x位置
cy
圆心的y位置

#### 椭圆
ellipse
rx
椭圆的x半径
ry
椭圆的y半径
cx
椭圆中心的x位置
cy
椭圆中心的y位置 

#### 线条
x1
起点的x位置
y1
起点的y位置
x2
终点的x位置
y2
终点的y位置

#### 折线
polyline
points="" 用,隔开的坐标

#### 多边形
polygon
points="" 和折线差不多 只是会自动的首尾相连

### 路径 
path
 M : 从哪里开始移动
    L ： 画直线到
    z ： 是否闭合
M: 画笔起始位置
L：  line to (在两个点之间画线)
H:  绘制水平只有一个参数 水平的移动    
V: 绘制垂直直线 一个参数 垂直的移动

##### 曲线

贝赛尔曲线
 三次   C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
 二次 Q x1 y1 ， x y

### 填充 边框
fill
fill-opacity控制填充色的不透明度
stroke
stroke-opacity控制描边的不透明度

stroke-width属性定义了描边的宽度。注意，描边是以路径为中心线绘制的，在上面的例子里，路径是粉红色的，描边是黑色的。如你所见，路径的每一侧都有均匀分布的描边。
stroke-linecap属性 控制边框终点的形状

## 基础变形

平移
transform="translate(30,40)"
旋转
transform="rotate(45)"
缩放
scale()