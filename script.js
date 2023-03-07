const endDate= "13 July 2023 12:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs= document.querySelectorAll("input")
 function clock(){
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
     const Diff = (end-now)/1000;
      console.log(Diff);
      inputs[0].value = Math.floor(Diff/3600/24);
      inputs[1].value=Math.floor(Diff/3600)%24;
      inputs[2].value=Math.floor(Diff/60)%60;
      inputs[3].value=Math.floor(Diff)%60;
 }
 clock();
 setInterval(clock,1000);