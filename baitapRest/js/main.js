
calcAverage = (...pointList) => {
    console.log(...pointList);
    let total = 0;
    pointList.map(point => {
        total += parseFloat(point);
    });
    return (total / pointList.length).toFixed(2);
}

document.getElementById("btnKhoi1").onclick = () => {
    let t = document.getElementById("inpToan").value;
    let l = document.getElementById("inpLy").value;
    let h = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = calcAverage(t, l, h);
}


document.getElementById("btnKhoi2").onclick = () => {
    let v = document.getElementById("inpVan").value;
    let s = document.getElementById("inpSu").value;
    let d = document.getElementById("inpDia").value;
    let e = document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = calcAverage(v,s,d,e);
}
