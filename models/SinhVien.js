// Sinh viên thì sẽ có những thuộc tính gì?
/**
 * maSinhVien
 * hoTen
 * soDienThoai
 * lop
 * diemToan
 * diemLy
 * diemHoa
 */

// Cách để tạo một lớp đối tượng kèm theo các thuộc tính ở bên trong
function SinhVien(
  _maSinhVien,
  _hoTen,
  _email,
  _matKhau,
  _ngaySinh,
  _khoaHoc,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.maSinhVien = _maSinhVien;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngaySinh = _ngaySinh;
  this.khoaHoc = _khoaHoc;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.dienHoa = _diemHoa;

  //   Tạo ra một hàm xử lý tính điểm trung bình của 3 môn
  this.tinhDiemTrungBinh = function () {
    return (this.diemToan + this.diemLy + this.dienHoa) / 3;
  };
//   this.xepLoai = function () {
//     var diemTrungBinh = (this.diemToan + this.diemLy + this.dienHoa) / 3;
//     if (diemTrungBinh <5 )(
//         return "Điểm kém";
//     )else if (diemTrungBinh >= 5) {
//         return "Cũng ổn đó";
//     }else if (diemTrungBinh > 8) {
//         return "Tuyệt vời"
//     }

//   }
}
