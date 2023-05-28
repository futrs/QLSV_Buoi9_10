/* Dự án quản lý sinh viên
 * Input : Dữ liệu mà người dùng nhập vào : maSinhVien,hoTen,email,matKhau,ngaySinh,khoaHoc,diemToan,diemLy,diemHoa
 *
 *
 * Output : Xuất ra kết quả thông tin sinh viên xuống bản
 */
var danhSachSinhVien = [];

function SinhVien(
  maSinhVien,
  hoTen,
  email,
  matKhau,
  ngaySinh,
  khoaHoc,
  diemToan,
  diemLy,
  diemHoa
) {
  this.maSinhVien = maSinhVien;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngaySinh = ngaySinh;
  this.khoaHoc = khoaHoc;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
}
SinhVien.prototype.tinhDiemTrungBinh = function () {
  return (this.diemToan + this.diemLy + this.diemHoa) / 3;
};
SinhVien.prototype.xepLoai = function () {
  var diemTrungBinh = this.tinhDiemTrungBinh();
  if (diemTrungBinh < 5) {
    return "Điểm kém";
  } else {
    return "Cũng ổn đó";
  }
};
function themSinhVien() {
  var maSinhVien = document.getElementById("txtMaSV").value;
  var hoTen = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var ngaySinh = document.getElementById("txtNgaySinh").value;
  var khoaHoc = document.getElementById("khSV").value;
  var diemToan = parseFloat(document.getElementById("txtDiemToan").value);
  var diemLy = parseFloat(document.getElementById("txtDiemLy").value);
  var diemHoa = parseFloat(document.getElementById("txtDiemHoa").value);

  var sinhVien = new SinhVien(
    maSinhVien,
    hoTen,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );

  danhSachSinhVien.push(sinhVien);
  renderDanhSachSinhVien();
}
function renderDanhSachSinhVien() {
  var content = "";
  for (var i = 0; i < danhSachSinhVien.length; i++) {
    var sinhVien = danhSachSinhVien[i];
    content += `
      <tr>
        <td>${sinhVien.maSinhVien}</td>
        <td>${sinhVien.hoTen}</td>
        <td>${sinhVien.email}</td>
        <td>${sinhVien.ngaySinh}</td>
        <td>${sinhVien.khoaHoc}</td>
        <td>${sinhVien.tinhDiemTrungBinh()}</td>
        <td>${sinhVien.xepLoai()}</td>
        <td><button onclick="xoaSinhVien('${
          sinhVien.maSinhVien
        }')" class="btn btn-danger mr-3"><i class="fa-solid fa-trash"></i></button><button class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
      </tr>`;
  }
  document.getElementById("tbodySinhVien").innerHTML = content;
}

// Validation dữ liệu đầu vào
function validateData(maSinhVien, hoTen, email, diemToan, diemLy, diemHoa) {
  // Kiểm tra xem các trường bắt buộc có được nhập hay không
  if (!maSinhVien || !hoTen || !email || !diemToan || !diemLy || !diemHoa) {
    return false; // Không hợp lệ nếu có trường bắt buộc không được nhập
  }

  // Kiểm tra định dạng email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false; // Không hợp lệ nếu email không đúng định dạng
  }

  // Kiểm tra giá trị của điểm số
  if (isNaN(diemToan) || isNaN(diemLy) || isNaN(diemHoa)) {
    return false; // Không hợp lệ nếu có một trong các điểm không phải là số
  }

  // Kiểm tra giá trị của điểm số phải nằm trong khoảng từ 0 đến 10
  if (
    diemToan < 0 ||
    diemToan > 10 ||
    diemLy < 0 ||
    diemLy > 10 ||
    diemHoa < 0 ||
    diemHoa > 10
  ) {
    return false; // Không hợp lệ nếu có một trong các điểm nằm ngoài khoảng cho phép
  }

  return true; // Dữ liệu hợp lệ
}
document.getElementById("btnThemSV").onclick = themSinhVien;

/**
 * Xoá sinh viên ra khỏi mảng
 * Một function dùng để chạy chức năng xoá
 * Bên trong function chạy 1 vòng lặp để duyệt mảng
 * Bên trong vòng lặp sẽ kiểm tra điều kiện là kiểm tra maSinhVien của sinh viên ngay tại lúc bấm trùng với bất kì một maSinhVien nào trong mảng thì sẽ trả về index của maSinhVien ngay tại vị trí đó trong mảng, còn nếu không thì trả về - 1
 * Dùng hàm từ javascript để xoá sinhVien, sẽ dùng hàm slipe nhận vào 2 giá trị, giá trị đầu vào và vị trí index giá trị t2 là số phần tử cần xoá.
 * Sau khi xoá phải chạy lại hàm renderDanhSachSinhVien để tải lại giao diện
 */

function timViTriSinhVien(maSinhVien) {

}

// function editSinhVien(maSinhVien) {
//   var index = 
  
// }
function xoaSinhVien(maSinhVien) {
  var viTri = -1;

  danhSachSinhVien.forEach(function(item,index) {
    // item ở đây là một sinh viên nằm trong array nên chấm tới thuộc tính maSinhVien
    if (item.maSinhVien == maSinhVien) {
      viTri = index;
    }
  });
  if (viTri != -1) {
    danhSachSinhVien.splice(viTri, 1);
    renderDanhSachSinhVien();
  }
  console.log(maSinhVien);
}
