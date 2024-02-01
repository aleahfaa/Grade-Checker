# Grade Checker Website

The function of this website is to make it easier to sort and check numerical grades based on the letter grades and number type (odd/even) automatically. This website is available in English and Bahasa Indonesia. The grade range for letter grades is based on the Bachelor's grade range at the Sepuluh Nopember Institute of Technology (Institut Teknologi Sepuluh Nopember).

__Grade Range__

86-100 = A

76-85 = AB

75-66 = B

61-65 = BC

56-60 = C

41-55 = D

0-40= E

_Made by Iffa using Glitch on February 1, 2024._

## File Description

← `README.md`: The overview of this website.

← `index.html`: The main web page for this site. Defines the structure and content of the page using elements. There are also references to CSS and JavaScript files.

← `style.css`: The files to add styling rules to this content or site. In this content, I am using the basic CSS because I want to focus on the function of this website which is to check the student grade.

← `script.js`: The files behind the output in this website. JavaScript not only allows me to check the student's grade but also changes the content language.

## Change the Grade Range

If you want to change the grade range, you can copy all of the codes and paste them on your compiler/IDE, you can use Glitch like me or VSCode (it can be accessed offline).
```
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
```
You can change the code above based on your desired grade range.
