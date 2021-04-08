// import { makeObservable, action, reaction, observable } from 'mobx'
import { makeAutoObservable, reaction } from 'mobx'
import axios from 'axios'
import { Characters } from './models/Characters'
import { Books } from './models/Books'
import { Houses } from './models/Houses'
import { filterType } from './common/filterType'

class ViewStore {
  currentFilter = filterType.CHARACTERS
  data = []
  isLoading = false
  isFailure = false

  constructor() {
    makeAutoObservable(this)
    this.getData()
    reaction(() => this.currentFilter, () => this.getData())
  }

  getData = () => {
    this.isLoading = true
    this.data = []
    const url = `https://www.anapioficeandfire.com/api/${this.currentFilter}`
    axios
      .get(url)
      .then(({data}) => {
        switch (this.currentFilter) {
          case filterType.BOOKS:
            return data.map(item => Books.JsonTo(item))
          case filterType.HOUSES:
            return data.map(item => Houses.JsonTo(item))
        
          default:
            return data.map(item => Characters.JsonTo(item));
        }
      })
      .then((response) => {
        this.isLoading = false
        this.data = response
      })
      .catch(() => {
        this.isLoading = false
        this.isFailure = true
      })
  }

  setFilter = (filter) => {
    this.currentFilter = filter
  }

}

const store = new ViewStore()

export {
  store,
}