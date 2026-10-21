function calculate() {
    let m1 = document.getElementById("mark1").value;
    let m2 = document.getElementById("mark2").value;
    let m3 = document.getElementById("mark3").value;

    if (m1 === "" || m2 === "" || m3 === "") {
        document.getElementById("result").innerHTML =
            "Please enter all three marks.";
        return;
    }

    let marks = [Number(m1), Number(m2), Number(m3)];

    if (marks.some(mark => mark < 0 || mark > 100)) {
        document.getElementById("result").innerHTML =
            "Marks must be between 0 and 100.";
        return;
    }

    let total = marks[0] + marks[1] + marks[2];
    let average = total / 3;

    document.getElementById("result").innerHTML =
        "Total marks: " + total +
        "<br>Average marks: " + average.toFixed(2);
}