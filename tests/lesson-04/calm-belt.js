const navigatorName = "Luffy";
const currentHakiLevel = 3;
const IslandA = 15;
const IslandB = 25;
const IslandC = 40;

let tong = IslandA + IslandB + IslandC;
let avg = (tong / 3);
let remain = tong % 3;

// console.log("Tổng lượng thịt tiêu thụ là:", tong);
// console.log("Trung bình lượng thịt tiêu thụ là:", avg);
console.log("Số lượng thịt còn lại sau khi chia cho 3 thành viên là:", remain);