const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const themeToggle = document.getElementById("themeToggle");
const sindiff =document.querySelector(".buttons.sindiff")
const cosdiff =document.querySelector(".buttons.cosdiff")
const tandiff=document.querySelector(".buttons.tandiff")
const secdiff=document.querySelector(".buttons.secdiff")
const cosecdiff=document.querySelector(".buttons.cosecdiff")
const cotdiff=document.querySelector(".buttons.cotdiff")
const sinhdiff=document.querySelector(".buttons.sinhdiff")
const coshdiff=document.querySelector(".buttons.tanhdiff")
const tanhdiff=document.querySelector(".buttons.cosecdiff")
const sinenv=document.querySelector(".buttons.sine-1diff")
const cosenv=document.querySelector(".buttons.cos-1diff")
const tanenv=document.querySelector(".buttons.tan-1diff")
const sinhenv=document.querySelector(".buttons.sinh-1diff")
const coshenv=document.querySelector(".buttons.cosh-1diff")
const tanhenv=document.querySelector(".buttons.tanh-1diff")
function appendCharacter(char) {
  display.value += char;
}
function clearDisplay() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;
    console.log(expression)
    let result;
    if (expression.includes('sin(')) {
      let angle = parseFloat(expression.replace('sin(', '').replace(')', ''));
      let radians = angle * (Math.PI / 180); // تحويل الدرجات إلى راديان
      console.log(radians)
       result = Math.sin(radians);
       console.log(radians)
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
  
   else if (expression.includes('cos(')) {
      let angle = parseFloat(expression.replace('cos(', '').replace(')', ''));
      let radians = angle * (Math.PI / 180); // تحويل الدرجات إلى راديان
     result = Math.cos(radians);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('tan(')) {
      let angle = parseFloat(expression.replace('tan(', '').replace(')', ''));
      let radians = angle * (Math.PI / 180); // تحويل الدرجات إلى راديان
     result = Math.tan(radians);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('log(')) {
     let number= parseFloat(expression.replace('log(', '').replace(')', ''));
       result = Math.tan(number);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('sinh(')) {
     let number= parseFloat(expression.replace('sinh(', '').replace(')', ''));
     let num = number * (180 /Math.PI); 
       result = Math.sinh(num);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('cosh(')) {
     let number= parseFloat(expression.replace('cosh(', '').replace(')', ''));
     let num = number * (180 /Math.PI); 
       result = Math.cosh(num);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('tanh(')) {
     let number= parseFloat(expression.replace('tanh(', '').replace(')', ''));
     let num = number * (180 /Math.PI); 
       result = Math.tanh(num);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('sin-1(')) {
     let number= parseFloat(expression.replace('sin-1(', '').replace(')', ''));
     let num = number * (Math.PI/180); 
       result = Math.asinh(num);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('cos-1(')) {
     let number= parseFloat(expression.replace('cos-1(', '').replace(')', ''));
     let num = number * (Math.PI /180); 
       result = Math.acos(num);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    else if (expression.includes('tan-1(')) {
     let number= parseFloat(expression.replace('tan-1(', '').replace(')', ''));
     let num = number * (Math.PI /180); 
       result = Math.atan(num);
      display.value = result.toFixed(4); // عرض الناتج بـ 4 خانات عشرية
    }
    //تحويلات الكيلو 
    else if (expression.includes('Km : m(')) {
      let number= parseFloat(expression.replace('Km : m(', ''));
       result=(number*1000);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('Km : cm(')) {
      let number= parseFloat(expression.replace('Km : cm(', ''));
       result=(number*100000);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('Km : mm(')) {
      let number= parseFloat(expression.replace('Km : mm(', ''));
       result=(number*1000000);
      display.value = result.toFixed(4);
    }
    // تحويلات المتر 
    else if (expression.includes('m : Km(')) {
      let number= parseFloat(expression.replace('m : Km(', ''));
       result=(number/1000);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('m : cm(')) {
      let number= parseFloat(expression.replace('m : cm(', ''));
       result=(number*100);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('m : mm(')) {
      let number= parseFloat(expression.replace('m : mm(', ''));
       result=(number*1000);
      display.value = result.toFixed(4);
    }
    //تحويلات السنتي 
    else if (expression.includes('cm : km(')) {
      let number= parseFloat(expression.replace('cm : km(', ''));
       result=(number/100000);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('cm : m(')) {
      let number= parseFloat(expression.replace('cm : m(', ''));
       result=(number/100);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('cm : mm(')) {
      let number= parseFloat(expression.replace('cm : mm(', ''));
       result=(number*10);
      display.value = result.toFixed(4);
    }
    //تحويلات الميلي 
    else if (expression.includes('mm : km(')) {
      let number= parseFloat(expression.replace('cm : km(', ''));
       result=(number/1000000);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('mm : m(')) {
      let number= parseFloat(expression.replace('mm : m(', ''));
       result=(number/1000);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('mm : cm(')) {
      let number= parseFloat(expression.replace('mm : cm(', ''));
       result=(number/10);
      display.value = result.toFixed(4);
    }
    //تحولات الوحدات الامريكية
    else if (expression.includes('IN : m(')) {
      let number= parseFloat(expression.replace('IN : m(', ''));
       result=(number*0.0254);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('Ft : m(')) {
      let number= parseFloat(expression.replace('Ft : m(', ''));
       result=(number*0.3048);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('Yd : m(')) {
      let number= parseFloat(expression.replace('Yd : m(', ''));
       result=(number*0.9144);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('MI : m(')) {
      let number= parseFloat(expression.replace('MI : m(', ''));
       result=(number*1609.34);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('M : IN(')) {
      let number= parseFloat(expression.replace('M : IN(', ''));
       result=(number*39.3701);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('M : FT(')) {
      let number= parseFloat(expression.replace('M : FT(', ''));
       result=(number*3.28084);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('M : Yd(')) {
      let number= parseFloat(expression.replace('M : Yd(', ''));
       result=(number*1.09361);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('M : MI(')) {
      let number= parseFloat(expression.replace('M : MI(', ''));
       result=(number*0.000621371);
      display.value = result.toFixed(4);
    }
    //تحويلات درجات الحراره
    else if (expression.includes('C : K(')) {
      let number= parseFloat(expression.replace('C : K(', ''));
       result=(number+273);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('C : F(')) {
      let number= parseFloat(expression.replace('C : F(', ''));
       result=((number * (9/5))+32);
      display.value = result.toFixed(4);
    }
    
    else if (expression.includes('C : R(')) {
      let number= parseFloat(expression.replace('C : R(', ''));
       result=((number + 273)*(9/5));
      display.value = result.toFixed(4);
    }
    else if (expression.includes('K : C(')) {
      let number= parseFloat(expression.replace('K : C(', ''));
       result=(number - 273);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('K : F(')) {
      let number= parseFloat(expression.replace('K : F(', ''));
       result=((number (9/5))-459.67);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('K : R(')) {
      let number= parseFloat(expression.replace('K : R(', ''));
       result=(number*(9/5));
      display.value = result.toFixed(4);
    }
    else if (expression.includes('F : C(')) {
      let number= parseFloat(expression.replace('F : C(', ''));
       result=(number-32)*(5/9);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('F : K(')) {
      let number= parseFloat(expression.replace('F : K(', ''));
       result=(number+459.67)*(5/9);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('F : R(')) {
      let number= parseFloat(expression.replace('F : R(', ''));
       result=(number +459.67);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('R : C(')) {
      let number= parseFloat(expression.replace('R : C(', ''));
       result=(number-491.67)*(5/9);
      display.value = result.toFixed(4);
    }
    else if (expression.includes('R : F(')) {
      let number= parseFloat(expression.replace('R : F(', ''));
       result=(number*(5/9));
      display.value = result.toFixed(4);
    }
    else if (expression.includes('R : K(')) {
      let number= parseFloat(expression.replace('R : K(', ''));
       result=(number-459.67);
      display.value = result.toFixed(4);
    }
    //تحولات الانظمة العدديه
    else if (expression.includes('BIN : OCT(')) {
      let number= parseInt(expression.replace('BIN : OCT(', ''));
  
      display.value = number.toFixed(4);
    }
  
    else if (expression.includes('sqrt(')) {
      let number= parseInt(expression.replace('sqrt(', ''));
  let num=Math.sqrt(number)
      display.value = num.toFixed(4);
    }
    else if (expression.includes('Ln(')) {
      let number= parseInt(expression.replace('Ln(', ''));
  let num=Math.log(number)
      display.value = num.toFixed(4);
    }
  
    else if (expression.endsWith('!')) {
      var number= parseFloat(expression.slice(0 ,-1));
      if( isNaN(number)|| number<0||!Number.isInteger(number)){
        document.getElementById("display").value="Erorr";
      }
      else{
        var fact =1;
        for(var i=1;i<=number;i++){
          fact*=i;
        }
        document.getElementById("display").value=fact;
        display.value = fact.toFixed(4);
      }
     
    }
    else if (expression.includes('^')) {
      var parts = expression.split('^');
  
      // لو المستخدم كتب أكتر من ^ مثلا 2^3^4 الكود هيبوز، فنتأكد فيه بس 2 أرقام
      if (parts.length == 2) {
          var base = parseFloat(parts[0]);
          var exponent = parseFloat(parts[1]);
  
          if (isNaN(base) || isNaN(exponent)) {
              document.getElementById("display").value = "Error";
          } else {
              var power = Math.pow(base, exponent);
              document.getElementById("display").value = power;
          }
      } else {
          document.getElementById("display").value = "Error";
      }
  }
 
     result = eval(display.value);
    display.value = result;   
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;  
  } catch {
    display.value = "Error";
  }
}

// Toggle dark/light theme
themeToggle.addEventListener("themeToggle", () => {
  document.body.classList.toggle("dark");
});
const triangleButton = document.getElementsByClassName(".triangle")
console.log(display)
function diff_sin(params) {
  display.value ="cos( ) "
}
function diff_cos(params) {
  display.value ="sin( ) "
}
function diff_tan(params) {
  display.value ="sec ^2  "
}
function diff_sec(params) {
  display.value ="1 / cos"} 
  function cosec_diff (params) {
    display.value ="1 / sin  "
  }
  function cot_diff(params) {
 display.value =" 1 / tan   or  cos /* sin "
  }
  function sinh_diff(params) {
 display.value ="cosh "
  }
  function cosh_diff(params) {
 display.value =" sinh "
  }
  function tanh_diff(params) {
  display.value =" sech ^2 "
  }
  function sinenv_diff(params) {
 display.value =" 1 / sqrt(1-x^2) "
  }
  function cosenv_diff(params) {
  display.value =" -1 / sqrt(1- x^2) "
  }
  function tanenv_diff(params) {
    display.value ="  1 / 1+x^2"
 
  }
  function sinhenv_diff(params) {
 display.value ="  1 / sqrt( x^2  + 1)"
  }
  function coshenv_diff(params) {
 display.value ="  1 / sqrt( x^2  - 1)"
  }
  function tanhenv_diff(params) {
 display.value ="  1 / 1 - x^2 "
  }
  function showInputs() {
    // الحصول على نوع المعادلة
    const type = document.getElementById('equationType').value;
    const inputsArea = document.getElementById('inputsArea');
    const solveButtonArea = document.getElementById('solveButtonArea');

    // مسح المدخلات والزرار
    inputsArea.innerHTML = '';
    solveButtonArea.innerHTML = '';

    if (type === 'linear') {
      // لو المعادلة خطية
      inputsArea.innerHTML = `
        <input type="number" id="a" placeholder="Enter a">
        <input type="number" id="b" placeholder="Enter b">
      `;
      solveButtonArea.innerHTML = `<button onclick="solveLinear()">Solve Linear</button>`;
    } else if (type === 'quadratic') {
      // لو المعادلة تربيعية
      inputsArea.innerHTML = `
        <input type="number" id="a" placeholder="Enter a">
        <input type="number" id="b" placeholder="Enter b">
        <input type="number" id="c" placeholder="Enter c">
      `;
      solveButtonArea.innerHTML = `<button onclick="solveQuadratic()">Solve Quadratic</button>`;
    }
  }

  function solveLinear() {
    // قراءة قيم a و b
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    // تحقق من صحة الأرقام
    if (isNaN(a) || isNaN(b)) {
      document.getElementById('result').value = "Please enter valid numbers.";
      return;
    }

    if (a === 0) {
      document.getElementById('result').value = "No solution (a cannot be zero).";
      return;
    }

    // حساب x
    const x = -b / a;
    document.getElementById('result').value = `Solution: x = ${x}`;
  }

  function solveQuadratic() {
    // قراءة قيم a, b, c
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // تحقق من صحة الأرقام
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      document.getElementById('result').value = "Please enter valid numbers.";
      return;
    }

    if (a === 0) {
      document.getElementById('result').value = "Not a quadratic equation (a cannot be zero).";
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      document.getElementById('result').value = "No real solutions.";
    } else if (delta === 0) {
      const x = -b / (2 * a);
      document.getElementById('result').value = `One solution: x = ${x}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById('result').value = `Solutions: x1 = ${x1}, x2 = ${x2}`;
    }
  }
  themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});