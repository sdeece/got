import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { Characters } from '../../models/Characters'

class ViewStore {
  data = []
  isLoading = false
  isFailure = false

  constructor() {
    makeAutoObservable(this)
    this.getData()
  }

  getData() {
    this.isLoading = true
    const url = 'https://www.anapioficeandfire.com/api/characters'
    axios
      .get(url)
      .then(({data}) => data.map(item => Characters.JsonTo(item)))
      .then((response) => {
        this.isLoading = false
        this.data = response
      })
      .catch(() => {
        this.isLoading = false
        this.isFailure = true
      })
  }

}

const store = new ViewStore()

export {
  store,
}