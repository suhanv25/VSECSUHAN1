function calculate() {

    let t1 = Number(document.getElementById("m1").value)
           + Number(document.getElementById("s1").value)
           + Number(document.getElementById("e1").value);

    let t2 = Number(document.getElementById("m2").value)
           + Number(document.getElementById("s2").value)
           + Number(document.getElementById("e2").value);

    let t3 = Number(document.getElementById("m3").value)
           + Number(document.getElementById("s3").value)
           + Number(document.getElementById("e3").value);

    document.getElementById("t1").innerHTML = t1;
    document.getElementById("t2").innerHTML = t2;
    document.getElementById("t3").innerHTML = t3;

    if (t1 >= t2 && t1 >= t3) {
        document.getElementById("topper").innerHTML = "Suhan";
    }
    else if (t2 >= t1 && t2 >= t3) {
        document.getElementById("topper").innerHTML = "Rahul";
    }
    else {
        document.getElementById("topper").innerHTML = "Amit";
    }
}