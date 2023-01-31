$("#Submit").click(function () {
    assign = $("#assign").val() * .50,
        group = $("#group").val() * .10,
        quiz = $("#quiz").val() * .10,
        midterm = $("#mid").val() * .10,
        final = $("#final").val() * .10,
        intex = $("#intex").val() * .10,
        finalGrade = assign + group + quiz + midterm + final + intex;
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E"
    }
    $("#calculatedGrade").text(letterGrade + ": " + finalGrade);
})
