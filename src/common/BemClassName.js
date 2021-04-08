class BemClassName {
  constructor(rootName) {
    this.rootName = rootName
  }

  get(postfix) {
    if (!postfix) return this.rootName
    return `${this.rootName}__${postfix}`
  }
}

const bemClass = (rootName) => {
  const bemClass = new BemClassName(rootName)
  return postfix => bemClass.get(postfix)
}

export {
  bemClass,
}