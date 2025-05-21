
class StarshipConsts {
  constructor() {
    this.maxShipWeight = 80000;
    this.landingOrTakeoffDays = 1;
    this.baseCrew = 7;
    this.maxCrew = 12;
    this.oneCrMmWeight = 100;
    this.crewSalaryPerDay = 30;
    this.foodPrice = 0.5;
    this.foodWeight = 0.1;
    this.foodConsByCrewMemByDay = 4;
    this.fuelDayConsume = 1000;
    this.landingOrTakeoffFuelConsume = 250;
    this.fuelPrice = 1;
    this.fuelPriceNotAtBase = 2;
    this.fuelWeight = 1;
    this.aidkitAPrice = 200;
    this.aidkitBPrice = 25;
    this.repairCost = 2000;
    this.engineerRepairCost = 1500;
    this.ammosStats = {
      laserGunA: {
        name: "laserGunA",
        weight: 600,
        price: 1000,
        fuelCons: 600,
      },
      laserGunB: {
        name: "laserGunB",
        weight: 600,
        price: 2000,
        fuelCons: 100,
      },
      shieldA: {
        name: "shieldA",
        price: 3000,
        fuelCons: 1000,
      },
      shieldB: {
        name: "shieldB",
        price: 1000,
        fuelCons: 100,
      }
    };
    // this.shuttlesStats = {
    //   shuttleA: {
    //     name: "shuttleA",
    //     weight: 15000,
    //     price: 10000,
    //     cons: 100,
    //     maxCrewForLand: 12,
    //     driverSpec: false,
    //     cargoWeight: 40000,
    //     landingOrTakeoffDays: 0.5,
    //   },
    //   shuttleB: {
    //     name: "shuttleB",
    //     weight: 8000,
    //     price: 6000,
    //     cons: 50,
    //     maxCrewForLand: 6,
    //     driverSpec: true,
    //     cargoWeight: 10000,
    //     landingOrTakeoffDays: 0.5,
    //   },
    //   shuttleC: {
    //     name: "shuttleC",
    //     weight: 5000,
    //     price: 3000,
    //     cons: 25,
    //     maxCrewForLand: 1,
    //     driverSpec: ["engineer", "scout", "armourer"],
    //     cargoWeight: 0,
    //   }
    // }
  }
}

class Starship extends StarshipConsts {
  constructor() {
    super(StarshipConsts);
    this._shipWeight = 40700;
    this.teamName = "Voyager";
    this.bank = 100000;
    this.crew = 7;
    this.days = 0;
    this.food = 5000;
    this.fuel = 5000;
    this.aidkitsA = 7;
    this.aidkitsB = 0;
    // this.shuttles = [];
    this.ammos = [];
    this._specialists = [];
    this.currentLocation = "base";
    this.shipInSpace = true;
    this.daysForRepair = 0;
    this.daysForHeal = 0;
    this.healPriceOnPlanet = 0;
    this.sickCrewMembers = [];
  }

  get shipWeight() {
    return this._shipWeight;
  }
  set shipWeight(value) {
    this._shipWeight = Math.round(value);
  }

  get specialists() {return this._specialists}
  set specialists(value) {
    this.shipWeight -= (this._specialists.length - value.length) * 100;
    this.crew -= (this._specialists.length - value.length);
    this.aidkitsA -= (this._specialists.length - value.length);
    this._specialists = value;
  }

  buyOrSellFoodAtInitialForm(newValue) {
    this.shipWeight += (newValue - this.food) * this.foodWeight;
    this.bank -= (newValue - this.food) * this.foodPrice;
    this.food = newValue;
  }

  buyFood(value) {
    const errorMessages = [];
    if ((value * this.foodWeight + this.shipWeight) > this.maxShipWeight) {
      errorMessages.push("You don't have enough space for this amount of food");
    }

    if ((value * this.foodPrice) > this.bank) {
      errorMessages.push("You don't have enough money for this amount of food");
    }

    if (errorMessages.length > 0) {
      return galaxyMapDOM.renderCustomAlert(errorMessages.join("\n"));
    }

    this.shipWeight += value * this.foodWeight;
    this.bank -= value * this.foodPrice;
    this.food += value;
  }

  spendFood(value) {
    this.shipWeight -= value * this.foodWeight;
    this.food -= value;
  }

  buyOrSellFuelAtInitialForm(newValue) {
    this.shipWeight += (newValue - this.fuel) * this.fuelWeight;
    this.bank -= (newValue - this.fuel) * this.fuelPrice;
    this.fuel = newValue;
  }

  buyFuel(value) {
    const errorMessages = [];
    if ((value * this.fuelWeight + this.shipWeight) > this.maxShipWeight) {
      errorMessages.push("You don't have enough space for this amount of fuel");
    }

    if ((value * this.fuelPrice) > this.bank) {
      errorMessages.push("You don't have enough money for this amount of fuel");
    }

    if (errorMessages.length > 0) {
      return galaxyMapDOM.renderCustomAlert(errorMessages.join("\n"));
    }

    this.shipWeight += value * this.fuelWeight;
    this.bank -= value * this.fuelPrice;
    this.fuel += value;
  }

  spendFuel(value) {
    this.shipWeight -= value * this.fuelWeight;
    this.fuel -= value;
  }

  buyOrSellAidkitA(value) {
    this.bank += (this.aidkitsA - this.crew - value * 3) * this.aidkitAPrice / 3;
    this.aidkitsA = (value * 3) + this.crew;
  }

  spendAidkitA(value) {
    this.aidkitsA -= value;
  }

  buyOrSellAidkitB(value) {
    this.bank += (this.aidkitsB - value * 3) * this.aidkitBPrice / 3;
    this.aidkitsB = value * 3;
  }

  spendAidkitB(value) {
    this.aidkitsB -= value;
  }

  buyAmmo(value) {
    this.bank -= value.price;
    if (value.weight) {
      this.shipWeight += value.weight;
    }
  }

  sellAmmo(value) {
    this.bank += value.price;
    if (value.weight) {
      this.shipWeight -= value.weight;
    }
  }

  useAmmo(ammoStatsObj) {
    this.spendFuel(ammoStatsObj.fuelCons);
  }

  // buyShuttle(value) {
  //   this.bank -= value.price;
  //   if (value.weight) {
  //     this.shipWeight += value.weight;
  //   }
  // }

  // sellShuttle(value) {
  //   this.bank += value.price;
  //   if (value.weight) {
  //     this.shipWeight -= value.weight;
  //   }
  // }

  // useShuttle(shuttleStatsObject) {
  //   this.spendFuel(shuttleStatsObject.cons);
  //   this.daysPass(shuttleStatsObject.landingOrTakeoffDays);
  // }

  daysPass(value) {
    this.spendFood(this.crew * value * this.foodConsByCrewMemByDay);
    this.bank -= value * this.crew * this.crewSalaryPerDay;
    this.days += value;
  }

  repairShip() {
    let loseCheckResult = this.checkLoseCondition(
      this.checkLoseFromShipState()
    );
    if (loseCheckResult !== undefined) {
      return this.runLoseGameActions(loseCheckResult);
    }

    const warningCheckResults = this.checkWarnings(
      this.checkFoodWarning(this.daysForRepair * this.crew * this.foodConsByCrewMemByDay)
    );
    if (warningCheckResults !== undefined) {
      return galaxyMapDOM.renderCustomAlert(warningCheckResults);
    }

    let repairCost;
    if (this.specialists.includes("engineer")) {
      repairCost = this.daysForRepair * this.engineerRepairCost;
    } else {
      repairCost = this.daysForRepair * this.repairCost;
    }

    this.bank -= repairCost;
    this.daysPass(this.daysForRepair);
    this.daysForRepair = 0;

    loseCheckResult = this.checkLoseCondition(
      this.checkLoseFromDays()
    );
    if (loseCheckResult !== undefined) {
      return this.runLoseGameActions(loseCheckResult);
    }
  }

  sickedCrewRandomizer(sickCrewCount) {
    const crewMembersArray = (new Array(this.crew - this.specialists.length)).fill("player").concat(...Array.from(this.specialists));
    this.sickCrewMembers = [];
    for (let i = 1; i <= sickCrewCount; i++) {
      const crewMemberRandomIndex = Math.floor(Math.random() * crewMembersArray.length);
      this.sickCrewMembers.push(...crewMembersArray.splice(crewMemberRandomIndex, 1));
    }
  }

  loseTeamMemberFromDisease() {
    const lostPlayers = this.sickCrewMembers.filter(item => item === "player");
    const lostSpecs = this.sickCrewMembers.filter(item => item !== "player");
    galaxyMapDOM.renderCustomAlert(`Your team losts: \n${lostPlayers.length} players\n${lostSpecs.join(" ")}`);
    this.crew -= lostPlayers.length;
    this.specialists = this.specialists.filter(item => !lostSpecs.includes(item));
    this.sickCrewMembers = [];
    starshipStatsPanelElements.statsRender();

    const checkLoseResult = this.checkLoseCondition(
      this.checkLoseFromCrewLose()
    );
    if (checkLoseResult !== undefined) {
      return this.runLoseGameActions(checkLoseResult);
    }
  }

  runHealCrewOnPlanet() {
    if (this.healPriceOnPlanet > this.bank) {
      galaxyMapDOM.renderCustomAlert("You don't have enough money for medical care. You lost part of your crew.");
      this.sickCrewMembers.forEach((item, index, array) => {
        if (!item) {
          this.crew--;
        } else {
          this.specialists.splice(this.specialists.indexOf(item), 1);
          this.crew--;
        }

        if (index === array.length - 1) {
          this.sickCrewMembers = [];
        }
      });
      this.daysForHeal = 0;

      let loseCheckResult = this.checkLoseCondition(
        this.checkLoseFromCrewLose()
      );
      if (loseCheckResult !== undefined) {
        return this.runLoseGameActions(loseCheckResult);
      }
    } else {
      this.bank -= this.healPriceOnPlanet;
      this.sickCrewMembers = [];
      this.days += this.daysForHeal;
      this.daysForHeal = 0;
      let loseCheckResult = this.checkLoseCondition(
        this.checkLoseFromDays()
      );
      if (loseCheckResult !== undefined) {
        return this.runLoseGameActions(loseCheckResult);
      }
    }

    starshipStatsPanelElements.statsRender();
  }

  runHealCrewInSpace(sickCrewCount) {
    this.sickedCrewRandomizer(sickCrewCount);
    const warningCheckResults = starship.checkWarnings(
      starship.checkHealPossibilityWarning()
    );
    if (warningCheckResults !== undefined) {
      const loseCheckResult = this.checkLoseCondition(
        this.checkLoseFromCrewLose()
      );
      if (loseCheckResult !== undefined) {
        return this.runLoseGameActions(loseCheckResult);
      }

      return galaxyMapDOM.renderCustomAlert(warningCheckResults);
    }

    galaxyMapDOM.renderHealInSpaceWindow();
  }

  runTakeoffFromPlanet() {
    const warningCheckResults = this.checkWarnings(
      this.checkShipStateWarning(),
      this.checkCrewStateWarning(),
      this.checkFuelWarning(this.landingOrTakeoffFuelConsume),
      this.checkFoodWarning(this.landingOrTakeoffDays * this.crew * this.foodConsByCrewMemByDay)
    );
    if (warningCheckResults !== undefined) {
      return galaxyMapDOM.renderCustomAlert(warningCheckResults);
    }

    this.shipInSpace = true;
    this.daysPass(this.landingOrTakeoffDays);
    this.spendFuel(this.landingOrTakeoffFuelConsume);
    galaxyMapDOM.renderTakeoffFromPlanet();

    const loseCheckResult = this.checkLoseCondition(
      this.checkLoseFromFuel(),
      this.checkLoseFromFood(),
      this.checkLoseFromDays()
    );
    if (loseCheckResult !== undefined) {
      return this.runLoseGameActions(loseCheckResult);
    }
  }

  runLandingOnPlanet(destinationElement) {
    let loseCheckResult = this.checkLoseCondition(
      this.checkLoseFromFuel(),
      this.checkLoseFromFood(),
    );
    if (loseCheckResult !== undefined) {
      return this.runLoseGameActions(loseCheckResult);
    }

    this.shipInSpace = false;
    this.daysPass(this.landingOrTakeoffDays);
    this.spendFuel(this.landingOrTakeoffFuelConsume);
    galaxyMapDOM.renderLandOnPlanet(destinationElement);
    if (this.currentLocation === "enernova") {
      return this.runWinActions();
    }

    loseCheckResult = this.checkLoseCondition(
      this.checkLoseFromFuel(),
      this.checkLoseFromFood(),
      this.checkLoseFromDays()
    );
    if (loseCheckResult !== undefined) {
      return this.runLoseGameActions(loseCheckResult);
    }
  }

  runRandomCase(destinationElement, incedentsFunctions) {
    const travelDistance = routes[this.currentLocation][destinationElement.dataset.planetName]
    const warningCheckResults = this.checkWarnings(
      this.checkShipStateWarning(),
      this.checkCrewStateWarning(),
      this.checkFuelWarning(travelDistance * this.fuelDayConsume),
      this.checkFoodWarning(travelDistance * this.foodConsByCrewMemByDay * this.crew),
    );
    if (warningCheckResults !== undefined) {
      return galaxyMapDOM.renderCustomAlert(warningCheckResults);
    }

    const currentLocationName = this.currentLocation;
    const destinationName = destinationElement.dataset.planetName;
    const normalTimeToFly = routes[currentLocationName][destinationName];
    galaxyMapDOM.renderFlyToCase(destinationElement);
    setTimeout(() => {
      const travelResult = incedentsFunctions[Math.floor(Math.random() * incedentsFunctions.length)].call(starship, normalTimeToFly);
      const loseCheckResult = this.checkLoseCondition(
        this.checkLoseFromCrewLose(),
        this.checkLoseFromDays(),
        this.checkLoseFromFood(),
        this.checkLoseFromFuel()
      );
      if (loseCheckResult) {
        return this.runLoseGameActions(loseCheckResult);
      }

      if (travelResult === true) {
        galaxyMapDOM.renderFlyToDestination(destinationElement);
        this.currentLocation = destinationElement.dataset.planetName;
        galaxyMapDOM.renderPossibleFlyToButtons();
        galaxyMapDOM.renderPossibleLandButton();
      } else if (travelResult === false) {
        galaxyMapDOM.renderFlyToDestination(galaxyMapDOM.currentLocationElement());
      }

      starshipStatsPanelElements.statsRender();
    }, 2000);
  }

  runLoseGameActions(loseConditionsMessages) {
    galaxyMapDOM.renderCustomAlert(`${loseConditionsMessages}\nYou lose!`);
    this.resetGame();
  }

  runWinActions() {
    galaxyMapDOM.renderCustomAlert("You have reached Enernova! You won!");
    this.resetGame();
  }

  resetGame() {
    starship = new Starship();
    starshipStatsPanelElements.statsRender();
    galaxyMapDOM.renderFlyToDestination(galaxyMapDOM.currentLocationElement());
    galaxyMapDOM.renderPossibleFlyToButtons();
    galaxyMapDOM.renderPossibleLandButton();
    initFormInputs.initFormWrapper.style.display = "flex";
    galaxyMapDOM.renderTakeoffFromPlanet();
    initFormInputs.initForm.reset();
  }

  checkShipStateWarning() {
    if (this.daysForRepair > 0) return "You need to repair your ship first";
  }

  checkCrewStateWarning() {
    if (this.sickCrewMembers.length > 0) return "You need to heal your crew members first";
  }

  checkWeightMaxLimitWarning(additionalWeight) {
    if (this.shipWeight + additionalWeight > this.maxShipWeight) return "Your ship will be to heavy.";
  }

  checkFuelWarning(needsFuel) {
    if (needsFuel > this.fuel) return "You don't have enough fuel for this action.";
  }

  checkFoodWarning(needsFood) {
    if (needsFood > this.food) return "You can't do this with your food amount.";
  }

  checkBankWarning(needsMoney) {
    if (needsMoney > this.bank) return "You don't have enough money.";
  }

  checkDaysWarning(needDays) {
    if (needDays + this.days > 50) return "You don't have enough time for this action.";
  }

  checkHealPossibilityWarning() {
    if (starship.sickCrewMembers.length > 0 && starship.aidkitsA === 0 && starship.aidkitsB === 0 && !starship.specialists.includes("medic")) {
      starship.loseTeamMemberFromDisease();
      return "You doesn't have enough medkits for heal your team.";
    }
  }

  checkWarnings(...checkFunctions) {
    const checkFunctionsResults = checkFunctions.filter(item => item);
    if (checkFunctionsResults.length > 0) {
      return checkFunctionsResults.join("\n");
    }
  }

  checkLoseFromFuel() {
    if (
      (this.fuel <= 0 && this.shipInSpace === true) || 
      (this.fuel <= 0 && this.bank <= this.landingOrTakeoffFuelConsume * this.fuelPrice && this.shipInSpace === false)
    ) {
      return "Your starship out of fuel.";
    }
  }

  checkLoseFromFood() {
    if (
      (this.food <= 0 && this.shipInSpace === true) || 
      (this.food <= 0 && this.bank <= this.crew * this.foodPrice * this.landingOrTakeoffDays && this.shipInSpace === false)
    ) {
      return "Your food storage is empty.";
    }
  }

  checkLoseFromDays() {
    if (this.days >= 50) {
      return "You late to Enernova.";
    }
  }

  checkLoseFromCrewLose() {
    if (this.crew - this.specialists.length <= 0) {
      return "You lost all your team members.";
    }
  }

  checkLoseFromShipState() {
    let repairCost;
    if (this.specialists.includes("engineer")) {
      repairCost = this.daysForRepair * this.engineerRepairCost;
    } else {
      repairCost = this.daysForRepair * this.repairCost;
    }

    if (this.daysForRepair > 0 && this.bank < this.repairCost) {
      return "You don't have enough money for starship repair.";
    }
  }

  checkLoseCondition(...checkLoseFunctions) {
    const checkFunctionsResults = checkLoseFunctions.filter(item => item);
    if (checkFunctionsResults.length > 0) {
      return checkFunctionsResults.join("\n");
    }
  }

  checkStatsAtStart() {
    const errorMessages = [];
    this.checkWeightMaxLimitWarning() && errorMessages.push(this.checkWeightMaxLimitWarning());
    if (this.bank <= 0) {
      errorMessages.push("You don't have enough money for this amount of supplies.");
    }

    if (this.shipWeight > this.maxShipWeight) {
      errorMessages.push("Your ship is to heavy.");
    }

    if (this.food <= 0) {
      errorMessages.push("Your food supplies is empty. Add some food.");
    }

    if (this.fuel <= 0) {
      errorMessages.push("Your fuel tank is empty. Add some fuel.");
    }

    if (this.teamName === "") {
      errorMessages.push("You didn't insert team name.");
    }

    if (this.crew > this.maxCrew) {
      errorMessages.push("You can hire not more than 5 specialists.");
    }

    if (errorMessages.length > 0) {
      return errorMessages.join("\n");
    }
  }
}

let starship = new Starship();