$("#Submit").click(function () {
    //Grabs values from the inputs on the form and assigns it the percent of the total grade
    assign = $("#assign").val() * .50,
        group = $("#group").val() * .10,
        quiz = $("#quiz").val() * .10,
        midterm = $("#mid").val() * .10,
        final = $("#final").val() * .10,
        intex = $("#intex").val() * .10,
        //adds all the parts of the final grade to calculate the final grade percentage
        finalGrade = assign + group + quiz + midterm + final + intex;
    //based off the final grade percentage assign it a letter
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
    //print the final grade letter and percentage in an empty h1 tag
    $("#calculatedGrade").text(letterGrade + ": " + finalGrade);
})
