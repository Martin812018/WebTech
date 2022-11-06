function SLWfunc() {
    var str = document.getElementById("SLW").value;
    var strarray = str.split(' ');
    var min = 999999;
    var max = 0;
    var minstr = [];
    var maxstr = [];

    for (var i = 0; i < strarray.length; i++) {
        if (strarray[i].length < min) {
            min = strarray[i].length;
        }
        if (strarray[i].length > max) {
            max = strarray[i].length;
        }
    }
    for (var j = 0; j < strarray.length; j++) {
        if (strarray[j].length == min) {
            minstr.push(strarray[j]);
        }
        if (strarray[j].length == max) {
            maxstr.push(strarray[j]);
        }

    }
    document.getElementById("outputmin").innerHTML = minstr.toString();
    document.getElementById("outputmax").innerHTML = maxstr.toString();

}
function BMI() {
    var h = parseFloat(document.getElementById("BMIh").value);
    var w = parseFloat(document.getElementById("BMIw").value);
    var metric = document.getElementById("metrics").value;
    var result = 0;
    if (metric.toString() == "m") {
        result = w / (h * h);
    }
    else {
        result = 10000 * w / (h * h);
    }
    document.getElementById("outputBMI").innerHTML = result;
    if (result < 18) {
        document.getElementById("oBMI").innerHTML = "😑Underweight";
    }
    else if (result > 18 && result < 25) {
        document.getElementById("oBMI").innerHTML = "🤩Normal";
    }
    else if (result > 25 && result < 30.1) {
        document.getElementById("oBMI").innerHTML = "😫Overweight";
    }
    else if (result > 30.1) {
        document.getElementById("oBMI").innerHTML = "🤐Obese";
    }
}
function grow() {
    var r = parseInt(document.getElementById("row").value);
    var c = parseInt(document.getElementById("column").value);
    var list = ["https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8=", "https://www.collinsdictionary.com/images/full/orange_342874121.jpg", "https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg"];
    document.getElementById("garden").innerHTML = null;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            var rand = Math.floor(Math.random() * 3);
            var im = "<img src=" + list[rand] + " width = 150 height = 150 ></img>";
            document.getElementById("garden").innerHTML += im;
        }document.getElementById("garden").innerHTML += "<br>";
    }
}
function convert() {
    var x = parseFloat(document.getElementById("currA").value);

    var s1 = document.getElementById("curr1").value;
    var s2 = document.getElementById("curr2").value;

    if (s1 == "u" && s2 == "c") {
        document.getElementById("currB").innerHTML = x * 100;
    }
    else if (s1 == "u" && s2 == "r") {
        document.getElementById("currB").innerHTML = x * 79.97;
    }
    else if (s1 == "u" && s2 == "p") {
        document.getElementById("currB").innerHTML = x * 7997;
    }
    else if (s1 == "c" && s2 == "u") {
        document.getElementById("currB").innerHTML = x * 0.01;
    }
    else if (s1 == "c" && s2 == "r") {
        document.getElementById("currB").innerHTML = x * 0.01 * 79.97;
    }
    else if (s1 == "c" && s2 == "p") {
        document.getElementById("currB").innerHTML = x * 79.97;
    }
    else if (s1 == "r" && s2 == "u") {
        document.getElementById("currB").innerHTML = x * 0.013;
    }
    else if (s1 == "r" && s2 == "c") {
        document.getElementById("currB").innerHTML = x * 1.3;
    }
    else if (s1 == "r" && s2 == "p") {
        document.getElementById("currB").innerHTML = x * 100;
    }
    else if (s1 == "p" && s2 == "u") {
        document.getElementById("currB").innerHTML = x * 0.01 * 79.97;
    }
    else if (s1 == "p" && s2 == "c") {
        document.getElementById("currB").innerHTML = x * 79.97;
    }
    else if (s1 == "p" && s2 == "r") {
        document.getElementById("currB").innerHTML = x * 0.01 * 79.97;
    }
    else {
        document.getElementById("currB").innerHTML = x;
    }
}

function flip() {
    var img = document.getElementById("coin");
    var head = document.getElementById("tc");
    var tail = document.getElementById("hc");
    var h = parseInt(head.innerHTML);
    var t = parseInt(tail.innerHTML);

    var l = ["https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coins-isolated-white_1017-31520.jpg?w=2000", "https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?k=20&m=476142091&s=612x612&w=0&h=mX2-F4WTLslfOBnUrkOrp6noMqUyzAO1Iq8aHF_EGkY="];
    var s = Math.floor(Math.random()*2);
    if (l[s]==l[0]) {
        head.innerHTML = h+1;
    } else {
        tail.innerHTML = t+1;
    };
    img.src = l[s];
}
function reset(){
    var head = document.getElementById("tc");
    var tail = document.getElementById("hc");
    head.innerHTML = 0;
    tail.innerHTML = 0;

}
function TotalBill() {
    let winput = parseFloat(document.getElementById("weight").value);
    let cinput = document.getElementById("cake").value;
    let tipinput = parseInt(document.getElementById("tip").value);
    let c = 100;
    let Cost = c * winput;
    let tax = 9;
    let costwtax = Cost + ((tax * Cost) / 100);
    let TotalCost = costwtax + ((tipinput * costwtax) / 100);
    if (cinput == "True") {
        document.getElementById("invalid").innerHTML = "=>Please select your preference !!"
    }
    else {
        document.getElementById("bill").textContent = "Name = " + `${cinput}` + "\nWeight = " + `${winput}`
            + "\nTip =" + `${tipinput}` + "\nTax = " + `${tax}` + "\n\n Total Cost = " + `${TotalCost}`;
        document.getElementById("bill").innerHTML = document.getElementById("bill").innerHTML.replace(/\n\r?/g, '<br />');
    }
}


