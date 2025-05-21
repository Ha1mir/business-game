const starshipStatsPanelElements = {
  teamNameElement: document.querySelector(".header_team-name"),
  hideStatsPanelButton: document.querySelector(".game-rules_hide-stats"),
  statListElement: document.querySelector(".header_stat-list"),
  equipmentWrapperElement: document.querySelector(".header_equip"),
  statListElements: {
    yonkelsElement: document.querySelector(".stat-list_yonkels"),
    foodElement: document.querySelector(".stat-list_food"),
    fuelElement: document.querySelector(".stat-list_fuel"),
    crewElement: document.querySelector(".stat-list_crew"),
    daysElement: document.querySelector(".stat-list_days"),
    weightElement: document.querySelector(".stat-list_weight"),
    stateElement: document.querySelector(".stat-list_state"),
    aidkitAElement: document.querySelector(".stat-list_aidkit-a"),
    aidkitBElement: document.querySelector(".stat-list_aidkit-b"),
    daysForHealElement: document.querySelector(".stat-list_crew-state"),
  },
  equipmentWrapperElements: {
    medsElement: document.querySelector(".equip_meds-wrapper"),
    shuttlesElement: document.querySelector(".equip_shuttles-wrapper"),
    ammoElement: document.querySelector(".equip_ammo-wrapper"),
    specsElement: document.querySelector(".equip_specs-wrapper"),
    sickCrewElement: document.querySelector(".equip_sick-crew-wrapper"),
  },
  statsRender() {
    this.teamNameElement.textContent = starship.teamName || "Team Name";
    // this.equipmentWrapperElements.shuttlesElement.innerHTML = "";
    this.equipmentWrapperElements.ammoElement.innerHTML = "";
    this.equipmentWrapperElements.specsElement.innerHTML = "";
    this.equipmentWrapperElements.sickCrewElement.innerHTML = "";
    this.statListElements.yonkelsElement.textContent = starship.bank;
    this.statListElements.foodElement.textContent = starship.food;
    this.statListElements.fuelElement.textContent = starship.fuel;
    this.statListElements.crewElement.textContent = starship.crew;
    this.statListElements.daysElement.textContent = starship.days;
    this.statListElements.weightElement.textContent = starship.shipWeight;
    this.statListElements.aidkitAElement.textContent = starship.aidkitsA;
    this.statListElements.aidkitBElement.textContent = starship.aidkitsB;
    this.statListElements.stateElement.textContent = starship.daysForRepair > 0 ? `${starship.daysForRepair} days for` : "good";
    this.statListElements.daysForHealElement.textContent = starship.daysForHeal > 0 ? `${starship.daysForHeal} days for` : "good";
    for (const ammo of starship.ammos) {
      const specElement = document.createElement("img");
      this.equipmentWrapperElements.ammoElement.appendChild(specElement);
      specElement.classList.add("equip_specs-wrapper_ammo-img");
      specElement.setAttribute("src", `svg/ammos/${ammo.name}.svg`);
      specElement.setAttribute("alt", `${ammo.name} image`);
      specElement.setAttribute("title", ammo.name);
    }

    // for (const shuttle of starship.shuttles) {
    //   const newShuttle = document.createElement("span");
    //   starshipStatsPanelElements.equipmentWrapperElements.shuttlesElement.appendChild(newShuttle);
    //   newShuttle.textContent = shuttle.name;
    // }

    for (const spec of starship.specialists) {
      const specElement = document.createElement("img");
      this.equipmentWrapperElements.specsElement.appendChild(specElement);
      specElement.classList.add("equip_specs-wrapper_spec-img");
      specElement.setAttribute("src", `svg/specs/${spec}.svg`);
      specElement.setAttribute("alt", `${spec} image`);
      specElement.setAttribute("title", spec);
    }

    for (const crewMember of starship.sickCrewMembers) {
      const crewMemberName = crewMember ? crewMember : "player";
      const crewMemberElement = document.createElement("img");
      this.equipmentWrapperElements.sickCrewElement.appendChild(crewMemberElement);
      crewMemberElement.classList.add("equip_sick-crew-wrapper_crew-img");
      crewMemberElement.setAttribute("src", `svg/specs/${crewMemberName}.svg`);
      crewMemberElement.setAttribute("alt", `${crewMemberName} image`);
      crewMemberElement.setAttribute("title", crewMemberName);
    }
  },
  hideStatsPanelButtonCallback(e) {
    starshipStatsPanelElements.statListElement.classList.toggle("header_hide-stats");
    starshipStatsPanelElements.equipmentWrapperElement.classList.toggle("header_hide-stats");
    e.target.classList.toggle("game-rules_hide-stats_closed");
  },
}

starshipStatsPanelElements.hideStatsPanelButton.addEventListener("click", starshipStatsPanelElements.hideStatsPanelButtonCallback);

const initFormInputs = {
  initFormWrapper: document.querySelector(".main_init-form-wrapper"),
  initForm: document.querySelector(".main_init-form"),
  initFormSubmitter: document.querySelector(".init-form_submit"),
  teamName: document.querySelector(".init-form_team-name"),
  specialists: document.getElementsByClassName("specs-block_add-spec"),
  ammo: document.getElementsByClassName("ammo-block_add-ammo"),
  shuttles: document.getElementsByClassName("shuttles-block_add-shuttle"),
  meds: document.getElementsByClassName("meds-block_add-meds"),
  food: document.querySelector(".food-block_input"),
  fuel: document.querySelector(".fuel-block_input"),
  specailistsCallback(e) {
    if (e.target.checked && !starship.specialists.includes(e.target.value)) {
      if (starship.crew >= starship.maxCrew) {
        e.target.checked = false;
        galaxyMapDOM.renderCustomAlert("You can't hire more than 5 specialists.");
        return;
      }

      starship.specialists = starship.specialists.concat(e.target.value);
    } else if (!(e.target.checked && !starship.specialists.includes(e.target.value))) {
      starship.specialists = starship.specialists.filter((item) => e.target.value !== item);
    }

    starshipStatsPanelElements.statsRender();
  },
  medsCallback(e) {
    if (e.target.name === "aidkitsA") {
      starship.buyOrSellAidkitA(e.target.value);
    } else {
      starship.buyOrSellAidkitB(e.target.value);
    }

    starshipStatsPanelElements.statsRender();
  },
  foodCallback(e) {
    starship.buyOrSellFoodAtInitialForm(e.target.value);
    starshipStatsPanelElements.statsRender();
  },
  fuelCalback(e) {
    starship.buyOrSellFuelAtInitialForm(e.target.value);
    starshipStatsPanelElements.statsRender();
  },
  ammoCallback(e) {
    const addedAmmo = starship.ammosStats[e.target.value];
    if (e.target.checked && !starship.ammos.includes(addedAmmo)) {
      starship.ammos = starship.ammos.concat(addedAmmo);
      starship.buyAmmo(addedAmmo);
    } else if (!(e.target.checked && !starship.ammos.includes(addedAmmo))) {
      starship.ammos = starship.ammos.filter((item) => e.target.value !== item.name);
      starship.sellAmmo(addedAmmo);
    }

    starshipStatsPanelElements.statsRender();
  },
  // shuttlesCallback(e) {
  //   const addedShuttle = starship.shuttlesStats[e.target.value];

  //   if (e.target.checked && !starship.shuttles.includes(addedShuttle)) {
  //     starship.shuttles = starship.shuttles.concat(addedShuttle);
  //     starship.buyShuttle(addedShuttle);
  //   } else if (!(e.target.checked && !starship.shuttles.includes(addedShuttle))) {
  //     starship.shuttles = starship.shuttles.filter((item) => e.target.value !== item.name);
  //     starship.sellShuttle(addedShuttle);
  //   }

  //   starshipStatsPanelElements.statsRender();
  // }
};

initFormInputs.initializeFormListeners = (function () {
  this.initFormSubmitter.addEventListener("click", () => {
    const checkStatsAtStart = starship.checkStatsAtStart();
    if (checkStatsAtStart) {
      galaxyMapDOM.renderCustomAlert(checkStatsAtStart);
      return;
    }

    this.initFormWrapper.style.display = "none";
  });

  this.teamName.addEventListener("input", function(e) {
    starship.teamName = e.target.value;
    starshipStatsPanelElements.statsRender();
  });

  for (let medElement of this.meds) {
    medElement.addEventListener("input", this.medsCallback);
  }

  for (let specElement of this.specialists) {
    specElement.addEventListener("change", this.specailistsCallback);
  }

  for (let ammoElement of this.ammo) {
    ammoElement.addEventListener("change", this.ammoCallback);
  }

  // for (let shuttleElement of this.shuttles) {
  //   shuttleElement.addEventListener("change", this.shuttlesCallback);
  // }

  this.food.addEventListener("change", this.foodCallback);
  this.fuel.addEventListener("change", this.fuelCalback);
  this.food.addEventListener("load", this.foodCallback);
  this.fuel.addEventListener("load", this.fuelCalback);
}).call(initFormInputs);


starshipStatsPanelElements.statsRender();