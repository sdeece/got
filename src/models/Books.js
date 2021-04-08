class Books {
  constructor(data) {
    this.name = data.name
    this.author = data.author
    this.publiser = data.publiser
    this.country = data.country
    this.numberOfPages = data.numberOfPages
    this.url = data.url
  }

  static JsonTo(data) {
    return new Books(data)
  }
}

export {
  Books,
}