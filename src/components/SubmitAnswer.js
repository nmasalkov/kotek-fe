import axios from 'axios'
import EnvUrl from '../EnvUrl'

export const submitAnswer = (mark, id) => {
  axios
    .post(
      EnvUrl() + `cards/study`,
      {
        mark: mark,
        id: id,
      },
      {
        headers: {
          Authorization: localStorage.getItem('authToken'),
        },
      },
    )
    .then(() => {
      window.location.reload()
    })
}
