window.onload = function hideRumus(){
    document.getElementById("hitung-luas").style.display = "none";
    document.getElementById("hitung-keliling").style.display = "none";
}

function showHitungLuas() {
    var x = document.getElementById("hitung-luas");
    var y = document.getElementById("hitung-keliling");
    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "flex";
		x.style.flex = "column";
		x.style.align = "center";

    } else {
        if (x.style.display === "none" && y.style.display === "flex") {
            x.style.display = "flex";
			x.style.flex = "column";
			x.style.align = "center";
			y.style.display = "none";
        }

    }
}

function showHitungKeliling() {
    var x = document.getElementById("hitung-luas");
    var y = document.getElementById("hitung-keliling");
    if (x.style.display === "none" && y.style.display === "none") {
        y.style.display = "flex";
		y.style.flex = "column";
		y.style.align = "center";

    } else {
        if (x.style.display === "flex" && y.style.display === "none") {
            y.style.display = "flex";
            y.style.flex = "column";
            y.style.align = "center";
            x.style.display = "none";
        }

    }
}

function hitungLuas() {
    var nilaiLuas = 0;

    if (document.getElementById("nilai-alas").value == "" || document.getElementById("nilai-tinggi").value == "") {
        alert("[Nilai Alas] atau [Nilai Tinggi] belum terisi lengkap");
        document.getElementById("rumus-luas").innerHTML = ('');
        document.getElementById("isi-rumus-luas").innerHTML = ('');
        document.getElementById("hasil-luas").innerHTML = ('');
    } else {
        var nilaiAlas = parseFloat(document.getElementById("nilai-alas").value);
        var nilaiTinggi = parseFloat(document.getElementById("nilai-tinggi").value);
        var nilaiLuas = (nilaiAlas * nilaiTinggi) / 2;
        document.getElementById("rumus-luas").innerHTML = ('L = ½ × alas × tinggi');
        document.getElementById("isi-rumus-luas").innerHTML = ('L = ½ × ' + nilaiAlas + ' cm × ' + nilaiTinggi + ' cm');
        document.getElementById("hasil-luas").innerHTML = ('L = <b>' + nilaiLuas + ' cm²');
    }
}

function hitungKeliling() {
    var nilaiKeliling = 0;

    if (document.getElementById("nilai-sisi1").value == "" || document.getElementById("nilai-sisi2").value == "" || document.getElementById("nilai-sisi3").value == "") {
        alert("[Nilai Sisi] belum terisi lengkap");
        document.getElementById("rumus-keliling").innerHTML = ('');
        document.getElementById("isi-rumus-keliling").innerHTML = ('');
        document.getElementById("hasil-keliling").innerHTML = ('');
    } else {
        var nilaiSisi1 = parseFloat(document.getElementById("nilai-sisi1").value);
        var nilaiSisi2 = parseFloat(document.getElementById("nilai-sisi2").value);
        var nilaiSisi3 = parseFloat(document.getElementById("nilai-sisi3").value);
        var nilaiKeliling = nilaiSisi1 + nilaiSisi2 + nilaiSisi3;
        document.getElementById("rumus-keliling").innerHTML = ('K = s + s + s');
        document.getElementById("isi-rumus-keliling").innerHTML = ('K = ' + nilaiSisi1 + ' cm + ' + nilaiSisi2 + ' cm + ' + nilaiSisi3 + ' cm');
        document.getElementById("hasil-keliling").innerHTML = ('L = <b>' + nilaiKeliling + ' cm');
    }
}

function resetLuas() {
    document.getElementById("nilai-alas").value = "";
    document.getElementById("nilai-tinggi").value = "";

    document.getElementById("rumus-luas").innerHTML = ('');
    document.getElementById("isi-rumus-luas").innerHTML = ('');
    document.getElementById("hasil-luas").innerHTML = ('');
}

function resetKeliling() {
    document.getElementById("nilai-sisi1").value = "";
    document.getElementById("nilai-sisi2").value = "";
    document.getElementById("nilai-sisi3").value = "";
    
    document.getElementById("rumus-keliling").innerHTML = ('');
    document.getElementById("isi-rumus-keliling").innerHTML = ('');
    document.getElementById("hasil-keliling").innerHTML = ('');
}