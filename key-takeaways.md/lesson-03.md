
## 🗓️ Tháng 9/2026

### ✅ Lesson #3: Git & JavaScript basic

**Ngày học**: 16/9/2026  
**Tình huống**: Tìm hiểu về git và JS basic (tiếp)
**Kiến thức về git**:
**1. Git un-stage:**
- Để un-staged 1 file cụ thể thì dùng lệnh: `git restore --staged <tên_file>`
- Để un-staged 1 file hoặc 1 tâp hợp các file thì dùng lệnh: `git restore --staged . ` 
    --> Restore toàn bộ từ staging về working directory.
**2. Git un-commit**
- Để đưa 1 commit cuối cùng từ vùng Repository về vùng Staging thì dùng:
    `git reset --soft HEAD~1`
- Muốn reset nhiều hơn 1 commit --> điền số lượng commit đằng sau dấu ~
- Muốn đưa 1 commit cuối từ vùng Repository về vùng Working directory thì dùng:
    `git reset HEAD 1`
**Note:** 
    - Commit đầu tiên không thể bị reset. 
    - Nếu muốn reset thì xóa thư mục .git đi và khởi tạo lại.
**3. Git undo commit message:**
- Muốn thay đổi commit msg mới nhất thì dùng:
    `git commit --amend -m"<msg mới>`
---

**JavaScript**
**1. Cấu điều kiện:**
- Dùng để kiểm tra 1 đoạn logic trước khi chạy. Nếu điều kiện đúng thì mới chạy.
- **Cú pháp:** 
    `If (<điều kiện>){
        //code
    } `
VD: Kết hợp nhiều điều kiện:
    ` let hour = 8;
      if (hour >= 6 && hour <= 11) {
        console.log("Xin chào");
      }`
  
**2. Vòng lặp:**
- Dùng để lặp lại 1 đoạn logic. Có thể lặp lại 1 số lần nhất định hoặc lặp vô hạn, tùy theo điều kiện dừng.
- Các loại vòng lặp: For(i), For(of), For(each), For(in), While, do..while
2.1. For(i):
- **Cú pháp:**
    ` for (<điều kiện khởi tạo>; <điều kiện lặp>;<cập nhật>){
        //code
      }
    - Điều kiện khởi tạo: chạy 1 lần duy nhất.
    - Điều kiện lặp: nếu đúng --> chạy tiếp, nếu sai --> dừng.
    - Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm
- VD:
    `for(let i = 0; i < 5; i++) {
        console.log("Xin chào!")
     }`
**3. JS conventions**
- Mục đích: giúp:
    + Code theo format chung, dễ nhìn
    + Người khác trong team dễ đọc code.
- 1 số convention phổ biến:
    + Snake case: tất cả các chữ viết thường cách nhau bởi dấu gạch dưới. VD: lesson_1.
    + kebab-case: tất cả chữ viết thường, cách nhau bởi dấu gạch ngang. VD: toi-dang-hoc-auto.
    + camelCase: chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên. VD toiDangHoc.
    + Screaming_snake_case (Upper-Case): viết hoa tất cả chữ cái.
Note: Convention trong lớp học:
    - kebab-case: đặt tên file và folder.
    - camelCase: đặt tên biến và tên hàm
    - PascalCase: đặt tên cho Class.
