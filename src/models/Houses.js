class Houses {
  constructor(data) {
    this.name = data.name
    this.region = data.region
    this.coatOfArms = data.coatOfArms
    this.words = data.words
    this.titles = data.titles
    this.seats = data.seats
    this.currentLord = data.currentLord
    this.heir = data.heir
    this.overlord = data.overlord
    this.founded = data.founded
    this.founder = data.founder
    this.diedOut = data.diedOut
    this.ancestralWeapons = data.ancestralWeapons
    this.cadetBranches = data.cadetBranches
    this.swornMembers = data.swornMembers
  }

  static JsonTo(data) {
    return new Houses(data)
  }
}

export {
  Houses,
}