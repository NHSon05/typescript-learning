class Circle{
    static pi: number = 3.14;
    public test: number = 69;

    static calculateArea(radius:number){
        return this.pi * radius * radius;
    }
}
console.log(Circle.calculateArea(5));

// Tạo các hàm tiện ích
class StringFormatter{
    static capitalize(text: string): string{
        if (!text) return "";
        return text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
    }
}

// Sử dụng trực tiếp class mà không cần tạo đối tượng
const name = StringFormatter.capitalize("HoàNg");
console.log(name);

// Quản lý hằng số
// Lưu trữ các hằng số liên quan đến class
class Role{
    // Các hằng số định nghĩa các vai trò hợp lệ
    static readonly ADMIN_ROLE = "admin";
    static readonly USER_ROLE = "user";
    static readonly GUEST_ROLE = "guest";

    // Phương thức kiểm tra
    static isValidRole(role: string):boolean{
        return [Role.ADMIN_ROLE, Role.USER_ROLE, Role.GUEST_ROLE].includes(role);
    }
}
console.log(Role.ADMIN_ROLE);
console.log(Role.isValidRole("admin"));




function StaticMethod() {
    return (  
        <h1>Phải chịu</h1>
    );
}

export default StaticMethod;