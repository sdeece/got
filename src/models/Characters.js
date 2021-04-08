class Characters {
  constructor(data) {
    this.aliases = data.aliases.filter(alias => alias)
    this.allegiances = data.allegiances.filter(allegiance => allegiance)
    this.born = data.born
    this.culture = data.culture
    this.died = data.died
    this.father = data.father
    this.mother = data.mother
    this.gender = data.gender
    this.name = data.name
    this.titles = data.titles.filter(title => title)
    this.url = data.url
  }

  static JsonTo(data) {
    return new Characters(data)
  }
}

export {
  Characters,
}