`Abtract Classes`
-   abstract: trừu tượng
-   abstract class Employee{}
-   1 abstract class có thể chứa:
    +   1 hoặc nhiều normal method
    +   1 hoặc nhiều abstract method đối với loại này, không chứa phần body, chỉ định nghĩa tên method

-   Định nghĩa các hành vi chung cho các lớp kết thừa.
-   Phương thức abstract không chứa các thực thi code bên trong. Nó chỉ định nghĩa tên của phương thức mà không thực thi gì.

Ví dụ
-------------------------------------------------------------------------------
abstract class Employee{
    constructor(private firstName: string, private lastName: string){
        <!--  -->
    }
    abstract getSalary(): number
    get fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    
}