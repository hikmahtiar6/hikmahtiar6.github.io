/**
 * HBD.js
 * @author Jhonsky 
 **/

var daysInMonth = function (m, y) {
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
};

var isValidDate = function (d, m, y) {
    m = parseInt(m, 10) - 1;
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
};

function HBD() {
	// 1 April 2020
	if(isValidDate(1, 4, 2020)) {
		alert("Selamat hari kelahiran istriku ^_^ , Semoga yg dilalui selama ini menjadi keberkahan dalam hidup ini, Jadilah ibu yg the best buat anak kita. Ku tak bisa merangkai kata karena ku bukan pujangga. Hanya do'a yang terbaik yg bisaku panjatkan untuk mendapatkan ridho Allah SWT. Aamiin");
	} 

}
HBD();