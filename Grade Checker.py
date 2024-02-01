def convert_grade(grade):
    if grade >= 86 and grade <= 100:
        letter_grade = "A"
    elif grade >= 76 and grade <= 85:
        letter_grade = "AB"
    elif grade >= 66 and grade <= 75:
        letter_grade = "B"
    elif grade >= 61 and grade <= 65:
        letter_grade = "BC"
    elif grade >= 56 and grade <= 60:
        letter_grade = "C"
    elif grade >= 41 and grade <= 55:
        letter_grade = "D"
    elif grade >= 0 and grade <= 40:
        letter_grade = "E"
    else:
        return "Invalid grade"
    
    even_odd = "Even" if grade % 2 == 0 else "Odd"

    return f"Numerical grade: {grade}\nLetter grade: {letter_grade}\nOdd/Even: {even_odd}"

# Example usage
student_grade = int(input("Enter the numerical grade: "))
result = convert_grade(student_grade)
print(result)
