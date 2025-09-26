Khác biệt giữa {} , object và Object
-   {}: là kiểu rỗng, chấp nhận hầu như mọi giá trị trừ "NULL" và "UNDEFINED nhưng không khai báo bất kì thuộc tính nào.
-   Object:     Là interface toàn cục tương ứng với Object prototype của JS
    +   Có các method như toString, ValueOf

------------------------------------**SO SÁNH**-------------------------------------
let a: {} = 123;       // ✅ hợp lệ
let b: Object = 123;   // ✅ hợp lệ
let c: object = 123;   // ❌ lỗi — `object` chỉ non-primitive

let n: {} = null;      // ❌ lỗi khi strictNullChecks = true
let m: Object = null;  // ❌ lỗi khi strictNullChecks = true

`Truy cập thuộc tính / Gọi method`
let x: {} = 123;
x.toString();   // ❌ TypeScript: Property 'toString' does not exist on type '{}'.

let y: Object = 123;
y.toString();   // ✅ OK — vì interface `Object` có định nghĩa toString(): string

`Khi gán object literal có thêm trường`
let p: {} = { a: 1 };      // ✅ OK — có thể gán object literal
p.a;                       // ❌ lỗi — Type '{}' has no property 'a'

let q: Object = { a: 1 };  // ✅ OK
q.a;                       // ❌ lỗi cũng xảy ra vì `Object` không biết về 'a' cụ thể


------------------------------------`1. TUPLE`-------------------------------------
-   Giống như Array, nhưng có một vài quy định bắt buộc
-   Số phần tử cần được khai báo trước
-   Type của từng phần tử trong Array cần được khai báo trước, và không nhất thiết phải giống nhau

-   Ví dụ:  let skills = ['Language', 5]
=>  let skills: [string, number] = ['Language', 5]

------------------------------------`2. Enum`-------------------------------------
-   Enum là liệt kê 1 nhóm giá trị các hẳng số
-   Ví dụ:  `let tupleName: [type1, type2, type3]`
            `let person: [string, number];`
            person = ["Alice", 25];   // ✅ OK
            person = [25, "Alice"];   // ❌ Sai thứ tự
            person = ["Alice"];       // ❌ Sai số lượng phần tử

------------------------------------`3.AccessModifier`-------------------------------------
-   public:     ai cũng có thể truy cập
-   private:    không cho phép kế thừa



