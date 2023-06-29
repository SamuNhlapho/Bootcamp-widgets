function totalPhoneBill(phoneBill){
  var total = 0;
  const callAndSms = phoneBill.split(",");
  for ( var i=0; i<callAndSms.length; i++){
    let callOrSms = callAndSms[i].trim();
    if (callOrSms === "call"){
      total = total + 2.75;
        }
    else if (callOrSms==="sms"){
      total = total + 0.65;
}
else {return "Error: Invalid entry";
}
  }
  return "R" + total.toFixed(2);
}

console.log(totalPhoneBill('call, sms, call, sms, sms'));

document.addEventListener('alpine:init', () => {
  
  Alpine.data('totalPhoneBill', function(){

      return {
          phoneString : '',
          totalBill : '',
          calculateTotalUsage() {
             this.totalBill = totalPhoneBill(this.phoneString);

             setTimeout(() => {
              this.totalBill = '',
              this.phoneString = ''
             }, 3000);
          }
      }
  });
})