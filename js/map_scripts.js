const routes = {
  base: {
    florig: 6,
    primega: 5,
    kwod: 10,
  },
  primega: {
    tennay: 5,
    kwod: 6,
  },
  florig: {
    kwod: 6,
    baldoc: 17,
    nomrid: 16,
  },
  kwod: {
    nomrid: 10,
    allagad: 12,
    cremmin: 11,
    porlog: 10,
  },
  tennay: {
    porlog: 8,
    cremmin: 18,
  },
  porlog: {
    cremmin: 11,
    gormint: 15,
  },
  cremmin: {
    allagad: 3,
    gormint: 15,
    enernova: 11,
  },
  nomrid: {
    baldoc: 5,
    allagad: 5,
    tensal: 15,
  },
  baldoc: {
    tensal: 6,
    allagad: 12,
  },
  allagad: {
    tensal: 6,
    enernova: 12,
  },
  tensal: {
    enernova: 10,
  },
  gormint: {
    enernova: 9,
  }
};


const galaxyMapDOM = {
  basePlanetElement: document.querySelector(".glx-map_base"),
  flyToButtons: document.getElementsByClassName("glx-map_fly-to-btn"),
  landButtons: document.getElementsByClassName("glx-map_land-btn"),
  starshipElement: document.querySelector(".main_glx-map_starship"),
  planetsElements: document.getElementsByClassName("glx-map_planet"),
  planetsInterfaceDOM: {
    wrapper: document.querySelector(".map_planet-view_wrapper"),
    planetName: document.querySelector(".planet-view_form_planet-name"),
    foodInput: document.querySelector(".planet-view_food_input"),
    foodBuyButton: document.querySelector(".planet-view_food_buy-btn"),
    fuelInput: document.querySelector(".planet-view_fuel_input"),
    fuelBuyButton: document.querySelector(".planet-view_fuel_buy-btn"),
    repair: document.querySelector(".planet-view_form_repair-button"),
    takeoff: document.querySelector(".planet-view_form_takeoff-button"),
    heal: document.querySelector(".planet-view_form_heal-button"),
  },
  healInSpaceElements: {
    wrapper: document.querySelector(".heal-in-space_wrapper"),
    crewWrapper: document.querySelector(".heal-in-space_crew-wrapper"),
    confirmButton: document.querySelector(".heal-in-space_conf-btn"),
  },
  customAlertWindowElements: {
    wrapper: document.querySelector(".custom-alert_wrapper"),
    message: document.querySelector(".custom-alert_message"),
    confirmButton: document.querySelector(".custom-alert_conf-btn"),
  },
  customConfirmWindowElements: {
    wrapper: document.querySelector(".custom-confirm_wrapper"),
    message: document.querySelector(".custom-confirm_message"),
    confirmButton: document.querySelector(".custom-confirm_conf-btn"),
    cancelButton: document.querySelector(".custom-confirm_cancel-btn"),
  },
  renderPossibleFlyToButtons() {
    if (starship.currentLocation === "enernova") {
      const flyToButtonsElementsArray = Array.from(this.flyToButtons);
      flyToButtonsElementsArray.forEach(item => item.style.display = "none");
      return;
    }

    const possibleDestinations = Object.keys(routes[starship.currentLocation]);
    const flyToButtonsElementsArray = Array.from(this.flyToButtons);
    flyToButtonsElementsArray.forEach((item) => {
      if (!possibleDestinations.includes(item.dataset.planetName)) {
        item.style.display = "none";
        item.parentElement.style.borderColor = "lightskyblue";
      } else {
        item.style.display = "inline-block";
        item.parentElement.style.borderColor = "#7eff7e";
      }
    });
  },
  renderPossibleLandButton() {
    const landButtonsElementsArray = Array.from(this.landButtons);
    landButtonsElementsArray.forEach(item => {
      if (item.dataset.planetName !== starship.currentLocation) {
        item.style.display = "none";
      } else {
        item.style.display = "inline-block";
        item.parentElement.style.borderColor = "#7eff7e";
      }
    });
  },
  currentLocationElement() {
    return Array.from(this.planetsElements).find(item => item.dataset.planetName === starship.currentLocation);
  },
  renderFlyToCase(destinationElement) {
    const currentLocationElement = this.currentLocationElement();
    const galaxyMapGridComputedStyles = window.getComputedStyle(destinationElement.parentElement);
    const [currentX, currentY] = [
      currentLocationElement.offsetLeft - this.basePlanetElement.offsetLeft + parseInt(galaxyMapGridComputedStyles.gridTemplateColumns) / 2 - this.starshipElement.offsetWidth / 2, 
      currentLocationElement.offsetTop - this.basePlanetElement.offsetTop + parseInt(galaxyMapGridComputedStyles.gridTemplateRows) / 2 - this.starshipElement.offsetHeight / 2
    ];
    const [destinationX, destinationY] = [
      destinationElement.offsetLeft - this.basePlanetElement.offsetLeft + this.basePlanetElement.offsetWidth / 2 - this.starshipElement.offsetWidth / 2,
      destinationElement.offsetTop - this.basePlanetElement.offsetTop + this.basePlanetElement.offsetWidth / 2 - this.starshipElement.offsetHeight / 2
    ];
    this.starshipElement.style.transform = `translate(${(currentX + destinationX) / 2}px, ${(currentY + destinationY) / 2}px)`;
  },
  renderFlyToDestination(destinationElement) {
    const galaxyMapGridComputedStyles = window.getComputedStyle(destinationElement.parentElement);
    const [destinationX, destinationY] = [
      destinationElement.offsetLeft + parseInt(galaxyMapGridComputedStyles.gridTemplateColumns) / 2 - (this.starshipElement.offsetWidth / 2) - this.basePlanetElement.offsetLeft,
      destinationElement.offsetTop + parseInt(galaxyMapGridComputedStyles.gridTemplateRows) / 2 - this.starshipElement.offsetHeight - (this.basePlanetElement.offsetHeight / 2) - this.basePlanetElement.offsetTop
    ];
    this.starshipElement.style.transform = `translate(${destinationX}px, ${destinationY}px)`;
  },
  renderLandOnPlanet(destinationElement) {
    this.planetsInterfaceDOM.wrapper.style.display = "flex";
    this.planetsInterfaceDOM.planetName.textContent = `Welcome to ${destinationElement.dataset.planetName}`;
  },
  renderTakeoffFromPlanet() {
    this.planetsInterfaceDOM.wrapper.style.display = "none";
  },
  renderCustomAlertWithClosure: function() {
    const alertMessages = [];
    const customAlertConfirmButtomCallback = () => {
      alertMessages.pop();
      if (alertMessages.length > 0) {
        this.customAlertWindowElements.message.textContent = alertMessages[alertMessages.length - 1];
      } else {
        this.customAlertWindowElements.wrapper.style.display = "none";
      }
    };
    this.customAlertWindowElements.confirmButton.addEventListener("click", customAlertConfirmButtomCallback);

    return (alertMessage) => {
      alertMessages.unshift(alertMessage);
      this.customAlertWindowElements.message.textContent = alertMessages[alertMessages.length - 1];
      this.customAlertWindowElements.wrapper.style.display = "flex";
    }
  },
  renderCustomConfirm(confirmMessage) {
    return new Promise((resolve, reject) => {
      this.customConfirmWindowElements.message.textContent = confirmMessage;
      this.customConfirmWindowElements.wrapper.style.display = "flex";
      this.customConfirmWindowElements.confirmButton.addEventListener("click", () => {
        resolve(true);
        this.customConfirmWindowElements.wrapper.style.display = "none";
      }, {once: true});

      this.customConfirmWindowElements.cancelButton.addEventListener("click", () => {
        resolve(false);
        this.customConfirmWindowElements.wrapper.style.display = "none";
      }, {once: true});
    });
  },
  renderHealInSpaceWindow() {
    this.healInSpaceElements.crewWrapper.innerHTML = "";
    this.healInSpaceElements.wrapper.style.display = "flex";
    for (const sickCrewMember of starship.sickCrewMembers) {
      const crewMemberWrapper = document.createElement("div");
      this.healInSpaceElements.crewWrapper.appendChild(crewMemberWrapper);
      crewMemberWrapper.classList.add("crew-member-wrapper");
      crewMemberWrapper.setAttribute("data-crew-member-name", sickCrewMember);

      const crewMemberNameElement = document.createElement("span");
      crewMemberWrapper.appendChild(crewMemberNameElement);
      crewMemberNameElement.classList.add("crew-member-name");
      crewMemberNameElement.textContent = (sickCrewMember ? sickCrewMember : "Player") + ": ";

      if (starship.aidkitsA > 0) {
        const crewMemberAidkitAButton = document.createElement("button");
        crewMemberWrapper.appendChild(crewMemberAidkitAButton);
        crewMemberAidkitAButton.setAttribute("type", "button");
        crewMemberAidkitAButton.setAttribute("data-crew-member-name", sickCrewMember);
        crewMemberAidkitAButton.classList.add("crew-member-use-a");
        crewMemberAidkitAButton.textContent = "use a";
        crewMemberAidkitAButton.addEventListener("click", function(e) {
          starship.sickCrewMembers.splice(starship.sickCrewMembers.indexOf(e.target.dataset.crewMemberName), 1);
          starship.aidkitsA--;
          starshipStatsPanelElements.statsRender();
          crewMemberWrapper.remove();
          if (starship.sickCrewMembers.length === 0) {
            galaxyMapDOM.renderCustomAlert("You're healed all your crew members.");
            galaxyMapDOM.healInSpaceElements.wrapper.style.display = "none";
          }
        });
      }

      if (starship.aidkitsB > 0 && starship.specialists.includes("medic")) {
        const crewMemberAidkitBButton = document.createElement("button");
        crewMemberWrapper.appendChild(crewMemberAidkitBButton);
        crewMemberAidkitBButton.setAttribute("type", "button");
        crewMemberAidkitBButton.setAttribute("data-crew-member-name", sickCrewMember);
        crewMemberAidkitBButton.classList.add("crew-member-use-b");
        crewMemberAidkitBButton.textContent = "use b";
        crewMemberAidkitBButton.addEventListener("click", function(e) {
          starship.sickCrewMembers.splice(starship.sickCrewMembers.indexOf(e.target.dataset.crewMemberName), 1);
          starship.aidkitsB--;
          starshipStatsPanelElements.statsRender();
          crewMemberWrapper.remove();
          if (starship.sickCrewMembers.length === 0) {
            galaxyMapDOM.renderCustomAlert("You're healed all your crew members.");
            galaxyMapDOM.healInSpaceElements.wrapper.style.display = "none";
          }
        });
      }
    }

    starshipStatsPanelElements.statsRender();
  },
  
}

galaxyMapDOM.renderCustomAlert = galaxyMapDOM.renderCustomAlertWithClosure();

galaxyMapDOM.healInSpaceElements.confirmButton.addEventListener("click", function() {
  if (starship.sickCrewMembers.length > 0) {
    galaxyMapDOM.renderCustomConfirm("You're not heal all members of your crew. If you continue, you lost part of your team.").then(decisionResult => {
      if (decisionResult) {
        galaxyMapDOM.healInSpaceElements.wrapper.style.display = "none";
        starship.loseTeamMemberFromDisease();
      }
    }).catch((err) => {
      console.log(err);
    });
  } else {
    galaxyMapDOM.healInSpaceElements.wrapper.style.display = "none";
  }
});

const flyAndLandActionButtons = Array.from(galaxyMapDOM.flyToButtons).concat(Array.from(galaxyMapDOM.landButtons));
galaxyMapDOM.starshipElement.addEventListener("transitionstart", () => {
  for (const actionButton of flyAndLandActionButtons) {
    actionButton.disabled = "disabled";
    actionButton.style.opacity = "0";
  }
});
galaxyMapDOM.starshipElement.addEventListener("transitionend", () => {
  for (const actionButton of flyAndLandActionButtons) {
    actionButton.disabled = "";
    actionButton.style.opacity = "1";
  }
});

for (const landButton of galaxyMapDOM.landButtons) {
  landButton.addEventListener("click", function(e) {
    starship.runLandingOnPlanet(e.target);
    starshipStatsPanelElements.statsRender();
  })
}

galaxyMapDOM.planetsInterfaceDOM.takeoff.addEventListener("click", () => {
  starship.runTakeoffFromPlanet();
  starshipStatsPanelElements.statsRender();
});

galaxyMapDOM.planetsInterfaceDOM.heal.addEventListener("click", () => {
  starship.runHealCrewOnPlanet();
  starshipStatsPanelElements.statsRender();
});

galaxyMapDOM.planetsInterfaceDOM.repair.addEventListener("click", (e) => {
  starship.repairShip() && galaxyMapDOM.renderCustomAlert(starship.repairShip());
  starshipStatsPanelElements.statsRender();
});

galaxyMapDOM.planetsInterfaceDOM.foodBuyButton.addEventListener("click", () => {
  starship.buyFood(Number(galaxyMapDOM.planetsInterfaceDOM.foodInput.value));
  starshipStatsPanelElements.statsRender();
});

galaxyMapDOM.planetsInterfaceDOM.fuelBuyButton.addEventListener("click", () => {
  starship.buyFuel(Number(galaxyMapDOM.planetsInterfaceDOM.fuelInput.value));
  starshipStatsPanelElements.statsRender();
});