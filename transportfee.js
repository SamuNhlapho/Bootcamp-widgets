function transportFee (shift) {
  console.log(shift);
    switch(shift) {
      case "morning":
        return "R20";
        break;
      case "afternoon":
        return "R10";
        break;
      case "nightshift":
        return "free";
        break;
      default:
        return "The price is   " + shift;
              }
  }

  document.addEventListener('alpine:init', () => {
    Alpine.data('transportFeeWidget', () => ({
        shift: '',
        fee: '',


        calculateFee(e) {
            const selectedShift = transportFee(e.target.value)
            console.log(selectedShift);
            this.fee = selectedShift;

        }
    }))
})
  