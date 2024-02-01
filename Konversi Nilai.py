def konversi_nilai(nilai):
    if nilai >= 85 and nilai <= 100:
        nilai_huruf = "A"
    elif nilai >= 75 and nilai <= 84:
        nilai_huruf = "B"
    elif nilai >= 60 and nilai <= 74:
        nilai_huruf = "C"
    elif nilai >= 0 and nilai <= 59:
        nilai_huruf = "D"
    else:
        return "Nilai tidak valid"

    # Mengecek apakah nilai genap atau ganjil
    genap_ganjil = "Bilangan Genap" if nilai % 2 == 0 else "Bilangan Ganjil"

    return f"Nilai angka: {nilai}\nNilai huruf: {nilai_huruf}\n{genap_ganjil}"

# Contoh penggunaan
nilai_siswa = int(input("Masukkan nilai angka siswa: "))
hasil = konversi_nilai(nilai_siswa)
print(hasil)
