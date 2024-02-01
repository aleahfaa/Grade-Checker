let language = 'en';

function changeLanguage() {
  language = document.getElementById('language').value;
  updateGrade();
}

function updateGrade() {
  const numericGradeLabel = language === 'en' ? 'Student grade:' : 'Nilai siswa:';
  const numericGradeInput = document.getElementById('numericGrade');
  const numericGrade = parseFloat(numericGradeInput.value);
  const numericLabel = language === 'en' ? 'Numerical grade:' : 'Nilai angka:';
  const letterLabel = language === 'en' ? 'Letter grade:' : 'Nilai huruf:';
  const evenOddLabel = language === 'en' ? 'Odd/Even:' : 'Ganjil/Genap:';

  let letterGrade, evenOdd;

  if (!isNaN(numericGrade)) {
    if (numericGrade >= 86 && numericGrade <= 100) {
      letterGrade = 'A';
    } else if (numericGrade >= 76 && numericGrade < 86) {
      letterGrade = 'AB';
    } else if (numericGrade >= 66 && numericGrade < 76) {
      letterGrade = 'B';
    } else if (numericGrade >= 61 && numericGrade < 66) {
      letterGrade = 'BC';
    } else if (numericGrade >= 56 && numericGrade < 61) {
      letterGrade = 'C';
    } else if (numericGrade >= 41 && numericGrade < 56) {
      letterGrade = 'D';
    } else {
    letterGrade = 'E';
    }

    evenOdd = numericGrade % 2 === 0 ? (language === 'en' ? 'Even' : 'Genap') : (language === 'en' ? 'Odd' : 'Ganjil');
  } else {
    letterGrade = '';
    evenOdd = '';
  }

  document.getElementById('numericGrade').previousElementSibling.innerText = numericGradeLabel;
  document.getElementById('numericLabel').innerText = numericLabel;
  document.getElementById('numericResult').innerText = isNaN(numericGrade) ? '' : numericGrade;
  document.getElementById('letterLabel').innerText = letterLabel;
  document.getElementById('letterResult').innerText = letterGrade;
  document.getElementById('evenOddLabel').innerText = evenOddLabel;
  document.getElementById('evenOddResult').innerText = evenOdd;
}
