import { pick } from 'lodash'

export default function () {
  return {
    user: {},
    userData: (data) => {
      if (!data) { return { role: {} } }
      let { role } = data
      let result = {}
      console.log('%c-data', 'color: yellow;', data)
      result = {
        ...data,
        role: pick(role, ['name', 'type', 'description'])
      }
      return result
    }
  }
}
