`Static Method And Properties`
-   Static Method:  Phương thức tĩnh
-   Static Properites:  Thuộc tính tĩnh
=>  Cho phép liên kết các chức năng và dữ liệu trực tiếp với Class

`1.  Static Properties`
-   Thuộc tính tĩnh là dữ liệu thuộc về barnthana Class chứ không phải các đối tượng được tạo ra từ Class đó.
-   Đặc Điểm
    +   Được định nghĩa bằng từ khóa Static
    +   Chỉ có thể được truy cập thông qua tên class, không qua đối tượng





-   Để truy cập một thuộc tính static <ClassName>.<StaticMemeber>
    chúng ta sử dụng classname và dot notation, mà không cần tạo mới 1 object

<Class Circle{
    static pi: number = 3.14;
    static calculateArea(radius:number){
        return this.pi * radius  * radius;
    }
}
Cirle.pi    --Return 3.14--
Circle.calculateArea(5);  --return 78.5

//Static and non static
<Class Circle{
    static pi = 3.14
    pi = 3
}
Circle.pi => return 3.14
let circleObj = new Circle();
circleObj.pi => return 3
>
>