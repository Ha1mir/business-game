const incedentsFunctions = {
  base_kwod: [
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA") && this.specialists.includes("engineer")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysForRepair = 1;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. Shield A partically protect. Your engineer additionally spend on repair ${this.daysForRepair} days.`);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + this.daysForRepair));
        this.daysPass(normalTimeForFly);
        this.repairShip();
        return true;
      } else if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(3);
        this.spendFuel(this.fuelDayConsume * 3);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. Shield A partically protect. Return to ${this.currentLocation.toUpperCase()} for repair duration ${this.daysForRepair} days.`);
        return false;
      } else if (this.ammos.find(item => item.name === "shieldB")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. Shield B almost not protect. Return to ${this.currentLocation.toUpperCase()} for repair duration ${this.daysForRepair} days.`);
        return false;
      } else {
        this.daysPass(7);
        this.spendFuel(this.fuelDayConsume * 7);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} for repair duration ${this.daysForRepair} days.`);
        return false;
      }
    },
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 2);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
        galaxyMapDOM.renderCustomAlert("Your starship get into spacestorm. Shield A protect your starship.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. Shield B almost not protect. Return to ${this.currentLocation.toUpperCase()} for repair duration ${this.daysForRepair} days.`);
        return false;
      } else {
        this.daysPass(7);
        this.spendFuel(this.fuelDayConsume * 7);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} for repair duration ${this.daysForRepair} days.`);
        return false;
      }
    },
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship get into spacestorm. Shield A protect your starship.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. Shield B almost not protect. Return to ${this.currentLocation.toUpperCase()} for repair duration ${this.daysForRepair} days.`);
        return false;
      } else {
        this.daysPass(7);
        this.spendFuel(this.fuelDayConsume * 7);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into spacestorm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} for repair duration ${this.daysForRepair} days.`);
        return false;
      }
    },
  ],
  base_primega: [
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship get into asteroid storm. Shield A protect your starship.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB") && this.specialists.includes("engineer")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysForRepair = 1;
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. Shield B partically protect. Your engineer additionally spend on repair ${this.daysForRepair} days.`);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + this.daysForRepair));
        this.repairShip();
        return true;
      } else {
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} spent 5 days.`);
        return false;
      }
    },
  ],
  base_florig: [
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship get into asteroid storm. Shield A protect your starship.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB") && this.specialists.includes("engineer")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysForRepair = 1;
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. Shield B partically protect. Your engineer additionally spend on repair ${this.daysForRepair} days.`);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + this.daysForRepair));
        this.repairShip();
        return true;
      } else {
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} spent 5 days.`);
        return false;
      }
    },
  ],
  primega_tennay: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("Your journey continue as planned.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysForRepair = 1;
      this.daysPass(normalTimeForFly + 2);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
      galaxyMapDOM.renderCustomAlert("Your starship was damaged by the shooting star.");
      return true;
    },
  ],
  primega_kwod: [
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);galaxyMapDOM.renderCustomAlert("Your starship get into asteroid storm. Shield A protect your starship.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB") && this.specialists.includes("engineer")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysForRepair = 1;
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. Shield B partically protect. Your engineer additionally spend on repair ${this.daysForRepair} days.`);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        this.repairShip();
        return true;
      } else {
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} spent 5 days.`);
        return false;
      }
    }
  ],
  kwod_allagad: [
    function() {
      if (this.specialists.includes("navigator")) {
        this.daysPass(25);
        this.spendFuel(this.fuelDayConsume * 25);
        galaxyMapDOM.renderCustomAlert("Your starship lost in space triangle, but navigator's skills save you.");
        return false;
      } else {
        this.runLoseGameActions("You lost in space triangle.");
      }
    }
  ],
  kwod_cremmin: [
    function() {
      if (this.specialists.includes("navigator")) {
        this.daysPass(25);
        this.spendFuel(this.fuelDayConsume * 25);
        galaxyMapDOM.renderCustomAlert("Your starship lost in space triangle, but navigator's skills save you.");
        return false;
      } else {
        this.runLoseGameActions("You lost in space triangle.");
      }
    }
  ],
  kwod_nomrid: [
    function(normalTimeForFly) {
      if (this.specialists.includes("navigator")) {
        this.daysPass(normalTimeForFly + 6);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 6));
        galaxyMapDOM.renderCustomAlert("By navigator's skills, you escape from space triangle.");
        return true;
      } else {
        this.daysPass(20);
        this.spendFuel(this.fuelDayConsume * 20);
        galaxyMapDOM.renderCustomAlert("Your starship lost in space triangle, but navigator's skills save you.");
        return false;
      }
    }
  ],
  kwod_porlog: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("You're sucessful arrived to Porlog orbit.");
      return true;
    },
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA") || this.ammos.find(item => item.name === "shieldB")) {
        this.useAmmo(this.ammos.find(item => item.name === "shieldB") || this.ammos.find(item => item.name === "shieldA"));
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Shield protects your starship from spacetrash.");
        return true;
      } else {
        this.daysForRepair = 3;
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship was damaged by spacetrash.");
        return true;
      }
    },
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA") || this.specialists.includes("navigator")) {
        if (this.specialists.includes("navigator")) {
          galaxyMapDOM.renderCustomAlert("Navigator lead your starship from spacetrash.");
        } else {
          this.useAmmo(this.ammosStats.shieldA);
          galaxyMapDOM.renderCustomAlert("ShieldA protects your starship from spacetrash.");
        }
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        return true;
      } else {
        this.daysForRepair = 3;
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship was damaged by spacetrash.");
        return true;
      }
    }
  ],
  florig_baldoc: [
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun"))) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Using laser weapon, armourer defend starship from corsars.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Shield A protects, but you lost 1 additional day for fly.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("You spend 3 more days for dodging from pirates.");
        return true;
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun")) && this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("Using laser weapon and shield A, armourer defence starship from corsars.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 5);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 5));
        galaxyMapDOM.renderCustomAlert("Shield A protects, but you lost 5 additional days for fly.");
        return true;
      } else {
        this.daysForRepair = 2;
        this.daysPass(10);
        this.spendFuel(this.fuelDayConsume * 10);
        galaxyMapDOM.renderCustomAlert("Pirates damaged your starship.");
        return false;
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name === "laserGunA")) {
        this.useAmmo(this.ammosStats.laserGunA);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Using laser weapon A, armourer defence starship from corsars.");
        return true;
      } else if (this.specialists.includes("armourer") && this.ammos.find(item => item.name === "laserGunB")) {
        this.daysForRepair = 2;
        this.useAmmo(this.ammosStats.laserGunB);
        this.daysPass(8);
        this.spendFuel(this.fuelDayConsume * 8);
        galaxyMapDOM.renderCustomAlert("Using laser weapon B, armourer cannot fully defence starship from corsars.");
        return false;
      } else {
        this.daysForRepair = 3;
        this.daysPass(20);
        this.spendFuel(this.fuelDayConsume * 20);
        galaxyMapDOM.renderCustomAlert("Fly to Nomrid");
        const destinationElement = Array.from(galaxyMapDOM.planetsElements).find(item => item.dataset.planetName === "nomrid");
        galaxyMapDOM.renderFlyToDestination(destinationElement);
        this.currentLocation = destinationElement.dataset.planetName;
        galaxyMapDOM.renderPossibleFlyToButtons();
        galaxyMapDOM.renderPossibleLandButton();
        galaxyMapDOM.renderCustomAlert("Without armourer help, you cannot defence starship from pirates. You forced fly to Nomrid.");
      }
    },
  ],
  florig_kwod: [
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship get into asteroid storm. Shield A protect your starship.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB") && this.specialists.includes("engineer")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysForRepair = 1;
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. Shield B partically protect. Your engineer additionally spend on repair ${this.daysForRepair} days.`);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        this.repairShip();
        return true;
      } else {
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} spent 5 days.`);
        return false;
      }
    },
  ],
  florig_nomrid: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("You didn't met any pirates on your way.");
      return true;
    },
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Shield A protects you from pirates.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB")) {
        this.useAmmo(this.ammosStats.shieldB);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        this.daysForRepair = 1;
        galaxyMapDOM.renderCustomAlert("Shield B particulary protects, but you lost 1 additional day for fly.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("You spend 3 more days for dodging from pirates.");
        return false;
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun"))) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Using laser weapon, armourer defend starship from corsars.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Shield A protects, but you lost 1 additional day for fly.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 2);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        this.daysForRepair = 2;
        galaxyMapDOM.renderCustomAlert("You spend 3 more days for dodging from pirates.");
        return true;
      }
    },
  ],
  tennay_cremmin: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("You're successful arrived to Cremmin orbit.");
      return true;
    },
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA") || this.ammos.find(item => item.name === "shieldB")) {
        this.useAmmo(this.ammos.find(item => item.name === "shieldB") || this.ammos.find(item => item.name === "shieldA"));
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Shield protects your starship from spacetrash.");
        return true;
      } else {
        this.daysForRepair = 4;
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship was damaged by spacetrash.");
        return true;
      }
    },
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA") || this.specialists.includes("navigator")) {
        if (this.specialists.includes("navigator")) {
          galaxyMapDOM.renderCustomAlert("Navigator lead your starship from spacetrash.");
        } else {
          this.useAmmo(this.ammosStats.shieldA);
          galaxyMapDOM.renderCustomAlert("ShieldA protects your starship from spacetrash.");
        }
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        return true;
      } else {
        this.daysForRepair = 3;
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Your starship was damaged by spacetrash.");
        return true;
      }
    }
  ],
  tennay_porlog: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("Time shift is absent.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly + 2);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
      galaxyMapDOM.renderCustomAlert("Time shift slows down your starship for 2 days.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly + 4);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 4));
      galaxyMapDOM.renderCustomAlert("Time shift slows down your starship for 4 days.");
      return true;
    }
  ],
  baldoc_allagad: [
    function(normalTimeForFly) {
      if (this.specialists.includes("medic")) {
        this.daysPass(normalTimeForFly + 2);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
        galaxyMapDOM.renderCustomAlert("Medic heal your team, but you spend 2 more days for fly.");
        return true;
      } else {
        this.daysPass(6);
        this.spendFuel(this.fuelDayConsume * 6);
        galaxyMapDOM.renderCustomAlert("You spend 6 days for return to baldoc for medical cure.");
        return false;
      }
    },
    function(normalTimeForFly) {
        this.daysPass(normalTimeForFly);
        this.sickedCrewRandomizer(6);
        this.daysForHeal = 3;
        this.healPriceOnPlanet = 3000;
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Land on Allagad for medical cure.");
        return true;
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("navigator")) {
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("Navigator leads your ship through atmospheric pollution.");
        return true;
      } else {
        this.daysPass(10);
        this.spendFuel(this.fuelDayConsume * 10);
        galaxyMapDOM.renderCustomAlert("Without navigator, you forced return to Baldoc.");
        return false;
      }
    },
  ],
  baldoc_tensal: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("No problems with gravity.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly + 2);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
      galaxyMapDOM.renderCustomAlert("Unexceptable gravity.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly + 3);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
      galaxyMapDOM.renderCustomAlert("Unexceptable gravity.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly + 6);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 6));
      galaxyMapDOM.renderCustomAlert("Unexceptable gravity.");
      return true;
    },
  ],
  porlog_cremmin: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("No pirates in sight.");
      return true;
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun"))) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Using laser weapon, armourer defend starship from corsars.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 5);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 5));
        galaxyMapDOM.renderCustomAlert("You spend 5 more days for dodging from pirates.");
        return true;
      }
    },
  ],
  porlog_gormint: [
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun"))) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Using laser weapon, armourer defend starship from corsars.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Shield A protects, but you lost 1 additional day for fly.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("You spend 3 more days for dodging from pirates.");
        return true;
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name === "laserGunA")) {
        this.useAmmo(this.ammosStats.laserGunA);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Using laser weapon A, armourer defence starship from corsars.");
        return true;
      } else if (this.specialists.includes("armourer") && this.ammos.find(item => item.name === "laserGunB")) {
        this.useAmmo(this.ammosStats.laserGunB);
        this.daysPass(4);
        this.spendFuel(this.fuelDayConsume * 4);
        galaxyMapDOM.renderCustomAlert("Using laser weapon B, armourer cannot fully defence starship from corsars.");
        return false;
      } else {
        this.daysPass(5);
        this.spendFuel(this.fuelDayConsume * 5);
        galaxyMapDOM.renderCustomAlert("Fly to Cremmin");
        const destinationElement = Array.from(galaxyMapDOM.planetsElements).find(item => item.dataset.planetName === "cremmin");
        galaxyMapDOM.renderFlyToDestination(destinationElement);
        this.currentLocation = destinationElement.dataset.planetName;
        galaxyMapDOM.renderPossibleFlyToButtons();
        galaxyMapDOM.renderPossibleLandButton();
        galaxyMapDOM.renderCustomAlert("Without armourer help, you cannot defence starship from pirates. You forced fly to Cremmin.");
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun"))) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.daysPass(normalTimeForFly + 2);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
        galaxyMapDOM.renderCustomAlert("Using laser weapon, armourer defence starship from corsars.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("Shield A protects, but you lost 3 additional days for fly.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 5);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 5));
        galaxyMapDOM.renderCustomAlert("You spend 5 more days for dodging from pirates.");
        return true;
      }
    },
  ],
  cremmin_allagad: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("Fly continues as planned.");
      return true;
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("engineer")) {
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Engineer solve all problems after fly through pollution without latency.");
        return true;
      } else {
        this.daysPass(2);
        this.spendFuel(this.fuelDayConsume * 2);
        this.daysForRepair = 1;
        galaxyMapDOM.renderCustomAlert("Without engineer, you forced return to Cremmin.");
        return false;
      }
    },
  ],
  cremmin_enernova: [
    function(normalTimeForFly) {
      if (this.specialists.includes("medic")) {
        this.daysPass(normalTimeForFly + 5);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Doctor heals your creew after saddenly illness and you're reached Enernova.");
        return true;
      } else {
        this.daysPass(3);
        this.spendFuel(this.fuelDayConsume * 3);
        this.daysForHeal = 6;
        this.healPriceOnPlanet = 0;
        galaxyMapDOM.renderCustomAlert("Without doctor, you forced return to Cremmin for medical cure.");
        return false;
      }
    },
  ],
  cremmin_gormint: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("Fly continues as planned.");
      return true;
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("medic")) {
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("With doctor on your starship, you're not afraid of death ills on Gormint. Fly continues as planned.");
        return true;
      } else {
        this.daysPass(1);
        this.spendFuel(this.fuelDayConsume * 1);
        galaxyMapDOM.renderCustomAlert("Without doctor, you can't fly through Gormint, because of death ills on it. Return to Cremmin and choose another route for travel.");
        return false;
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun"))) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Using laser weapon, armourer defend starship from corsars.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Shield A protects, but you lost 1 additional day for fly.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("You spend 3 more days for dodging from pirates.");
        return true;
      }
    },
  ],
  allagad_enernova: [
    function(normalTimeForFly) {
      if (this.specialists.includes("medic")) {
        this.daysPass(normalTimeForFly + 4);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 4));
        galaxyMapDOM.renderCustomAlert("Doctor heals your creew after saddenly illness and you're reached Enernova.");
        return true;
      } else {
        this.daysPass(4);
        this.spendFuel(this.fuelDayConsume * 4);
        this.daysForHeal = 6;
        this.healPriceOnPlanet = 0;
        galaxyMapDOM.renderCustomAlert("Without doctor, you forced return to Allagad for medical cure.");
        return false;
      }
    },
  ],
  nomrid_allagad: [
    function(normalTimeForFly) {
      if (this.specialists.includes("navigator")) {
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("Navigator leads your ship through atmospheric pollution.");
        return true;
      } else {
        this.daysPass(10);
        this.spendFuel(this.fuelDayConsume * 10);
        galaxyMapDOM.renderCustomAlert("Without navigator, you forced return to Nomrid.");
        return false;
      }
    },
    function(normalTimeForFly) {
      this.runHealCrewInSpace(3);
      if (this.specialists.includes("navigator")) {
        this.daysPass(normalTimeForFly + 4);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 4));
        galaxyMapDOM.renderCustomAlert("Navigator leads your ship through atmospheric pollution.");
        return true;
      } else {
        this.daysPass(12);
        this.spendFuel(this.fuelDayConsume * 12);
        galaxyMapDOM.renderCustomAlert("Without navigator, you forced return to Nomrid.");
        return false;
      }
    },
  ],
  nomrid_baldoc: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("No pirates in sight.");
      return true;
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("armourer") && this.ammos.find(item => item.name.includes("laserGun"))) {
        this.useAmmo(this.ammos.find(item => item.name === "laserGunB") || this.ammos.find(item => item.name === "laserGunA"));
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Using laser weapon, armourer defend starship from corsars.");
        return true;
      } else {
        this.daysPass(normalTimeForFly + 2);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
        galaxyMapDOM.renderCustomAlert("You spend 2 more days for dodging from pirates.");
        return true;
      }
    },
  ],
  nomrid_tensal: [
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      galaxyMapDOM.renderCustomAlert("No problems with gravity.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly + 1);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
      galaxyMapDOM.renderCustomAlert("Delay for 1 day because of atmospheric pollution.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly + 2);
      this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 2));
      galaxyMapDOM.renderCustomAlert("Delay for 2 day because of atmospheric pollution.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      this.sickedCrewRandomizer(this.crew);
      this.daysForHeal = 2;
      this.healPriceOnPlanet = 2000;
      galaxyMapDOM.renderCustomAlert("Because of atmospheric pollution, you're need to heal your team.");
      return true;
    },
    function(normalTimeForFly) {
      this.daysPass(normalTimeForFly);
      this.spendFuel(this.fuelDayConsume * normalTimeForFly);
      this.sickedCrewRandomizer(this.crew);
      this.daysForHeal = 2;
      this.healPriceOnPlanet = 3500;
      galaxyMapDOM.renderCustomAlert("Because of atmospheric pollution, you're need to heal your team.");
      return true;
    },
  ],
  gormint_enernova: [
    function(normalTimeForFly) {
      if (this.ammos.find(item => item.name === "shieldA")) {
        this.useAmmo(this.ammosStats.shieldA);
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Your starship get into asteroid storm. Shield A protect your starship.");
        return true;
      } else if (this.ammos.find(item => item.name === "shieldB") && this.specialists.includes("engineer")) {
        this.useAmmo(this.ammosStats.shieldB);
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. Shield B partically protect.`);
        this.daysPass(normalTimeForFly + 4);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 4));
        return true;
      } else {
        this.daysPass(4);
        this.spendFuel(this.fuelDayConsume * 4);
        this.daysForRepair = 3;
        galaxyMapDOM.renderCustomAlert(`Your starship get into asteroid storm. You have no protect from it. Return to ${this.currentLocation.toUpperCase()} spent 4 days.`);
        return false;
      }
    },
  ],
  tensal_allagad: [
    function(normalTimeForFly) {
      if (this.specialists.includes("engineer")) {
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Engineer repairs your ship after unexpectable");
        return true;
      } else {
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        this.daysForRepair = 2;
        galaxyMapDOM.renderCustomAlert("You're forced to landing on Allagad for repair.");
        return true;
      }
    },
  ],
  tensal_enernova: [
    function(normalTimeForFly) {
      if (this.specialists.includes("navigator")) {
        this.daysPass(normalTimeForFly);
        this.spendFuel(this.fuelDayConsume * normalTimeForFly);
        galaxyMapDOM.renderCustomAlert("Navigator leads your ship through greyhole without problems.");
        return true;
      } else {
        this.daysPass(20);
        this.spendFuel(this.fuelDayConsume * 20);
        galaxyMapDOM.renderCustomAlert("Without navigator, you spent additional 20 days for fly.");
        return true;
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("navigator")) {
        this.daysPass(normalTimeForFly + 1);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 1));
        galaxyMapDOM.renderCustomAlert("Navigator leads your ship through greyhole with 1 additional day for fly.");
        return true;
      } else {
        this.daysPass(20);
        this.spendFuel(this.fuelDayConsume * 20);
        galaxyMapDOM.renderCustomAlert("Without navigator, you spent additional 20 days for fly.");
        return true;
      }
    },
    function(normalTimeForFly) {
      if (this.specialists.includes("navigator")) {
        this.daysPass(normalTimeForFly + 3);
        this.spendFuel(this.fuelDayConsume * (normalTimeForFly + 3));
        galaxyMapDOM.renderCustomAlert("Navigator leads your ship through greyhole with 3 additional days for fly.");
        return true;
      } else {
        this.daysPass(20);
        this.spendFuel(this.fuelDayConsume * 20);
        galaxyMapDOM.renderCustomAlert("Without navigator, you spent additional 20 days for fly.");
        return true;
      }
    },
  ],
};
const casesCount = {
  base_kwod: [
    incedentsFunctions.base_kwod[0],
    incedentsFunctions.base_kwod[1],
    incedentsFunctions.base_kwod[2]
  ],
  base_primega: [
    incedentsFunctions.base_primega[0],
  ],
  base_florig: [
    incedentsFunctions.base_florig[0],
  ],
  primega_tennay: [
    incedentsFunctions.primega_tennay[0],
    incedentsFunctions.primega_tennay[0],
    incedentsFunctions.primega_tennay[1],
  ],
  primega_kwod: [
    incedentsFunctions.primega_kwod[0],
  ],
  kwod_allagad: [
    incedentsFunctions.kwod_allagad[0],
  ],
  kwod_cremmin: [
    incedentsFunctions.kwod_cremmin[0],
  ],
  kwod_nomrid: [
    incedentsFunctions.kwod_nomrid[0],
  ],
  kwod_porlog: [
    incedentsFunctions.kwod_porlog[0],
    incedentsFunctions.kwod_porlog[1],
    incedentsFunctions.kwod_porlog[2],
  ],
  florig_kwod: [
    incedentsFunctions.florig_kwod[0],
  ],
  florig_baldoc: [
    incedentsFunctions.florig_baldoc[0],
    incedentsFunctions.florig_baldoc[0],
    incedentsFunctions.florig_baldoc[0],
    incedentsFunctions.florig_baldoc[1],
    incedentsFunctions.florig_baldoc[2],
    incedentsFunctions.florig_baldoc[2],
  ],
  florig_nomrid: [
    incedentsFunctions.florig_nomrid[0],
    incedentsFunctions.florig_nomrid[1],
    incedentsFunctions.florig_nomrid[2],
  ],
  tennay_cremmin: [
    incedentsFunctions.tennay_cremmin[0],
    incedentsFunctions.tennay_cremmin[1],
    incedentsFunctions.tennay_cremmin[2],
  ],
  tennay_porlog: [
    incedentsFunctions.tennay_porlog[0],
    incedentsFunctions.tennay_porlog[1],
    incedentsFunctions.tennay_porlog[2],
  ],
  baldoc_allagad: [
    incedentsFunctions.baldoc_allagad[0],
    incedentsFunctions.baldoc_allagad[1],
    incedentsFunctions.baldoc_allagad[2],
  ],
  baldoc_tensal: [
    incedentsFunctions.baldoc_tensal[0],
    incedentsFunctions.baldoc_tensal[1],
    incedentsFunctions.baldoc_tensal[2],
    incedentsFunctions.baldoc_tensal[2],
    incedentsFunctions.baldoc_tensal[3],
    incedentsFunctions.baldoc_tensal[3],
  ],
  porlog_cremmin: [
    incedentsFunctions.porlog_cremmin[0],
    incedentsFunctions.porlog_cremmin[0],
    incedentsFunctions.porlog_cremmin[1],
  ],
  porlog_gormint: [
    incedentsFunctions.porlog_gormint[0],
    incedentsFunctions.porlog_gormint[1],
    incedentsFunctions.porlog_gormint[1],
    incedentsFunctions.porlog_gormint[2],
    incedentsFunctions.porlog_gormint[2],
  ],
  cremmin_allagad: [
    incedentsFunctions.cremmin_allagad[0],
    incedentsFunctions.cremmin_allagad[0],
    incedentsFunctions.cremmin_allagad[1],
  ],
  cremmin_enernova: [
    incedentsFunctions.cremmin_enernova[0],
  ],
  cremmin_gormint: [
    incedentsFunctions.cremmin_gormint[0],
    incedentsFunctions.cremmin_gormint[0],
    incedentsFunctions.cremmin_gormint[1],
    incedentsFunctions.cremmin_gormint[1],
    incedentsFunctions.cremmin_gormint[1],
    incedentsFunctions.cremmin_gormint[2],
    incedentsFunctions.cremmin_gormint[2],
  ],
  allagad_enernova: [
    incedentsFunctions.allagad_enernova[0],
  ],
  nomrid_allagad: [
    incedentsFunctions.nomrid_allagad[0],
    incedentsFunctions.nomrid_allagad[1],
  ],
  nomrid_baldoc: [
    incedentsFunctions.nomrid_baldoc[0],
    incedentsFunctions.nomrid_baldoc[0],
    incedentsFunctions.nomrid_baldoc[1],
  ],
  nomrid_tensal: [
    incedentsFunctions.nomrid_tensal[0],
    incedentsFunctions.nomrid_tensal[1],
    incedentsFunctions.nomrid_tensal[2],
    incedentsFunctions.nomrid_tensal[3],
    incedentsFunctions.nomrid_tensal[3],
    incedentsFunctions.nomrid_tensal[4],
  ],
  gormint_enernova: [
    incedentsFunctions.gormint_enernova[0],
  ],
  tensal_allagad: [
    incedentsFunctions.tensal_allagad[0],
  ],
  tensal_enernova: [
    incedentsFunctions.tensal_enernova[0],
    incedentsFunctions.tensal_enernova[1],
    incedentsFunctions.tensal_enernova[2],
  ],
};

for (const flyButton of galaxyMapDOM.flyToButtons) {
  flyButton.addEventListener("click", function(e) {
    starship.runRandomCase(e.target.parentElement, casesCount[`${starship.currentLocation}_${e.target.dataset.planetName}`]);
  })
}

galaxyMapDOM.renderPossibleFlyToButtons();
galaxyMapDOM.renderPossibleLandButton();