const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

calculatebtn.addEventListener("click",() => {
    if(inputbtn.value === ""){
        alert("Please enter Your date of birth");
}else{
    console.log("input",inputbtn.value);
    const dob = new Date (inputbtn.value);
    console.log("dob",dob)
    const dob_Year = dob.getFullYear();
    console.log("dob_Year",dob_Year);

    //current
    const now = new Date ();
    console.log("now", now);
    const now_Year = now.getFullYear();
    console.log("now_Year",now_Year);
    const age= now_Year - dob_Year;
    console.log("age",age);

    ageresult.innerHTML = `Your age is ${age}`;


}
});