function calcular(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let sol = parseFloat(num1)*parseFloat(num2);

    document.getElementById("sol").textContent = sol;
}