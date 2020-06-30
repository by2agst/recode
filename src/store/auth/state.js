import { pick } from 'lodash'

export default function () {
  return {
    user: {},
    userData: (data) => {
      if (!data) { return { role: {} } }
      let { role } = data
      let result = {}
      result = {
        ...pick(data, ['id', 'email', 'username', 'confirmed', 'blocked']),
        role: pick(role, ['name', 'type', 'description'])
      }
      return result
    }
  }
}
