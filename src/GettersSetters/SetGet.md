`Getter/Setter`
-   Dùng để truy xuất giá trị của một thuộc tính
-   Mục đích:
    +   Tính toán giá trị
    +   Định dạng dữ liệu
    +   Bảo vệ dữ liệu:     Cho phép truy cập vào dữ liệu private mà không cần lộ ra trường dữ liệu

    ----------------------------------------------------------------------------------
    class Product {
    private _price: number;
    private _discountPercentage: number = 0.1; // 10% discount

    constructor(price: number) {
        this._price = price;
    }

    // Getter: Bắt đầu bằng từ khóa 'get'
    // Tính toán giá cuối cùng sau khi giảm giá
    get finalPrice(): number {
        // Logic tính toán: Giá gốc - (Giá gốc * % giảm giá)
        return this._price * (1 - this._discountPercentage);
    }
    }

    const item = new Product(100);

    //  Gọi getter như thể nó là một thuộc tính (KHÔNG có dấu ngoặc đơn)
    console.log(`Giá niêm yết: $${item.finalPrice}`); // Output: Giá niêm yết: $90
    ----------------------------------------------------------------------------------
    `Setter` | Được sử dụng để thiết lập giá trị cho một thuộc tính
    ----------------------------------------------------------------------------------
    class Product {
        private _price: number;

        constructor(price: number) {
            this._price = price;
        }

        // Setter: Bắt đầu bằng từ khóa 'set'
        // Chấp nhận một tham số đầu vào (value) và KHÔNG có kiểu trả về
        set price(newPrice: number) {
            // Logic xác thực dữ liệu: Đảm bảo giá không âm
            if (newPrice < 0) {
                console.error("Lỗi: Giá sản phẩm không thể âm.");
                return; // Dừng việc gán giá trị
            }
            // Nếu hợp lệ, gán giá trị mới cho trường dữ liệu private
            this._price = newPrice;
            console.log(`Đã cập nhật giá thành: $${this._price}`);
        }

        get price(): number {
            return this._price;
        }
    }

    const item = new Product(50);

    // Gọi setter như thể nó là một thuộc tính (sử dụng toán tử gán '=')
    item.price = 75;    // Output: Đã cập nhật giá thành: $75
    item.price = -10;   // Output: Lỗi: Giá sản phẩm không thể âm. (Giá vẫn là 75)

    console.log(`Giá hiện tại: $${item.price}`); // Output: Giá hiện tại: $75
    ----------------------------------------------------------------------------------
