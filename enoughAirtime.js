function enoughAirtime(projectedUsage, airtimeAvailable){
  var projectedUsageList = projectedUsage.split(",");
  var totalCost = 0;
  for (let i=0; i<projectedUsageList.length; i++){
    var projectedUsageTrimmed = projectedUsageList[i].trim();
    if(projectedUsageTrimmed.startsWith("call")){
      totalCost += 1.88
    }
    else if (projectedUsageTrimmed.startsWith("data")){
      totalCost += 12;
    }
     else if (projectedUsageTrimmed.startsWith("sms")){
      totalCost += 0.75;
     }
    else {return "Error: Invalid entry"
    }
  }
    var airtimeLeft = airtimeAvailable-totalCost;
    if(airtimeLeft > 0){
      return "R" + (airtimeLeft).toFixed(2);
    }
    else{
     
      return "R0.00";
  }
}

console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50));


document.addEventListener('alpine:init', () => {
    
  Alpine.data('enoughAirtime', function(){

      return {
          projectedUsage : '',
          airtimeAvailable : '',
          airtimeMessage : '',
          calculate() {
              const price = enoughAirtime(this.projectedUsage, this.airtimeAvailable)
              this.airtimeMessage = price

              setTimeout(() => {
                  this.projectedUsage = '',
                  this.airtimeAvailable = '',
                  this.airtimeMessage = ''
                 }, 5000);

          }
      }
  });
})