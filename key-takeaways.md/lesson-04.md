
## 🗓️ Tháng 9/2026

### ✅ Lesson #4: JavaScript (tiếp)

**Ngày học**: 16/9/2026  
**Tình huống**: Tìm hiểu về JS basic (tiếp)

**JavaScript**
**1. JS - Object:**
    1.1. Object là gì?
    - Là kiểu dữ liệu dùng để lưu trữ 1 tập hợp các cặp key-value (khóa-giá trị).
    - Object gom gọn trong 1 biến duy nhất, dễ quản lý, dễ truyền đi.
    - **Quy tắc nhớ:** Object giống như 1 hồ sơ (record) - mỗi mục trong hồ sơ có tên (key) và nội dung (value).
    1.2. Cách khai báo Object:
    - Cách 1: Object Literal (phổ biến nhất)
        `let xe = {
            hang:"Toyota";
            mau:"Trắng";
            namSanXuat: 2023
            };
    - Cách 2: Dùng new Object()
        `let xe2 = new Object();
          xe2.hang ="Toyota";
          xe2.mau = "Đen";
          xe2.namSanXuat = 2024;`
    1.3. Quy tắc đặt tên key.
    - Key thường là String, không cần đặt trong dấu ngoặc kép nếu là tên hợp lệ (không có dấu cách, ký tự đặc biệt).
    - Nếu key có dấu cách hoặc ký tự đặc biệt --> bắt buộc đặt trong ngoặc kép.
    - VD:
        ` let person = {
            "full name": " Nguyen Van A",
            age: 25
            };`
    1.4. Truy xuất dữ liệu trong Object.
    - Cách 1: Dot notation (Dấu chấm) --> sử dụng phổ biến
        VD: 
            `const myInfor = {
                name: "Jane",
                isLove: true,
                };
             console.log(myInfor.name);`
    - Cách 2: Bracket notation (Dấu ngoặc vuông)
            `console.log(myInfor["name"];`
        --> Bắt buộc dùng khi:
        1. Khi key có dấu cách hoặc ký tự đặc biệt
        2. Key là biến.
    1.5. Gán giá trị cho Object.
    Note: Gán vòa key chưa tồn tại = thêm mới. Gán vào key đã tồn tại = cập nhật
    VD: 
        ` 
        const students = {name: "Lan", age: 23};
        console.log(students.name);
        students.name = "Tuyết";
        console.log(students.name);
        students.favor = "Play game";
        consosle.log(students); // {name: "Tuyết"; age:23, favor: "Play game"}`
    1.6. Thêm, sửa, xóa thuộc tính
    - Thêm: Thuộc tính chưa tồn tại --> sẽ thêm
    - Sửa: Tên_biến.thuộc tính = ...;
    - Xóa: 
        delete tên_biến.thuộc_tính;
        
    Cảnh báo: Delete chỉ xóa thuộc tính khỏi Object, không xóa Object.
    1.7. Object lồng nhau (Nested Object)
    - Giá trị (Value) của 1 key có thể là bất kỳ kiểu dữ liệu nào, kể cả 1 Object khác.
    VD: 
        `let SV = {
            hoten:"Minh",
            tuoi:21,
            diachi:{
                sonha:"12",
                duong:"Lê Lợi"
            }
            };
    - Truy xuất Object lồng nhau: 
        console.log(SV.diachi.duong);
**2. JS - Array:**

**3. JS Function**
    3.1. Function là gì?
    - Là 1 khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code.
    - Dùng function có thể viết 1 lần dùng nhiều lần. Cần sửa --> sửa 1 chỗ duy nhất.
    3.2. Cách khai báo function:
    - **Cú Pháp:**
        **Cú Pháp**:
        `function <tên_hàm> {
            //code
        }
        <tên_hàm>(); //gọi hàm `
    - **Quy tắc đặt tên hàm:**
        - Dùng camelCase: tinhTong
        - Nên bắt đầu bằng động từ: tinh...
        - Tên phải diễn tả hành động mà hàm thực hiện.
    **Quan trọng:** Khai báo function chưa chạy coe bên trong. Code chỉ chạy khi gọi hàm.
    3.3. Gọi hàm - Function thực thi.
    - Cú pháp: <tênn_hàm>();
    3.4. Function với tham số (Parameter)
    - Tham số = "nguyên liệu" truyền vào cho hàm.
    Cách nhớ: tham số giống như ô trống cần điền - khi gọi hàm, bạn điền giá trị cụ thể vào.
    * Phân biệt Parameter với Argument.
    - Parameter (tham số): tên đặt trong () khi khai báo --> ten
    - Argument (đối số): giá trị truyền vào () khi gọi hàm --> "Lan"
    --> Thực tế 2 từ này thường dùng thay thế nhau.
**4. JS Array utils function**
