class Houses {
  constructor(data) {
    this.name = data.name
    this.region = data.region
    this.coatOfArms = data.coatOfArms
    this.words = data.words
    this.titles = data.titles.filter(item => item)
    this.seats = data.seats.filter(item => item)
    this.currentLord = data.currentLord
    this.heir = data.heir
    this.overlord = data.overlord
    this.founded = data.founded
    this.founder = data.founder
    this.diedOut = data.diedOut
    this.ancestralWeapons = data.ancestralWeapons.filter(item => item)
    this.cadetBranches = data.cadetBranches.filter(item => item)
    this.swornMembers = data.swornMembers.filter(item => item)
  }

  static JsonTo(data) {
    return new Houses(data)
  }
}

export {
  Houses,
}