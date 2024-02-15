class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        aReturn.push("Welcome to Fratello's.");
        aReturn.push("What size of the best pizza in Waterloo would you like? Small, Medium and Large");
        return aReturn;
      },
      SIZE: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.SELL;
        aReturn.push("What toppings would you like?"); 
        aReturn.push("We have Canadian, Vegitarian, 3 Cheese and Custom(please list items desired)");
        return aReturn;
      },
      SELL: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.CONFIRM;
        aReturn.push("Would you like to add anything else?"); 
        aReturn.push("You can add any soda for $1.50 or make it a meal deal with a box of cookies");
        return aReturn;
      },
      CONFIRM: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;
        aReturn.push("Would you like to confirm and place your order now?"); 
        return aReturn;
      },
      RESERVING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your pizza is reserved under the number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., around ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }