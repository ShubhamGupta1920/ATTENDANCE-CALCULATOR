let present1 = document.querySelector(".present");
let total1 = document.querySelector(".total");
let btn = document.querySelector("button");
let atten = document.querySelector(".atten");
let para = document.querySelector(".para");
let rper = document.querySelector(".rper");




//calculate attendance
let calc = (present,total)=>{
  let per = Math.round(present/total*100);
  return per;
}


let reqDays = (present, total,rperr)=>{
  let req = (rperr*total - 100*present)/(100-rperr);
  return req;
}


//claculate rest days
let restDays = (present,total,rperr)=>{
  let rest = (100*present-rperr*total)/rperr;
  return rest;
}

btn.addEventListener("click",()=>{
  
  let present = present1.value;
  let total = total1.value;
  let rperr = rper.value;
  let perr = calc(present,total);
  atten.innerText = `Current : ${perr}%`;
  
  if(perr<rperr){
    let reqq = Math.ceil(reqDays(present, total,rperr));
    para.innerText = `You need to come ${reqq} days continuously to achieve ${rperr}%`;
  }else{
    let restd = Math.floor(restDays(present,total,rperr));
    para.innerText=`Chill ! You don't need to worry You can rest ${restd} days`;
  }
})