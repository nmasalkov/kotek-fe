import axios from "axios";
import EnvUrl from "../EnvUrl";
import {message} from "antd";

export const submitAnswer = (mark, id) => {
    axios.post(EnvUrl() + `cards/study`, {
       mark: mark,
        id: id
    },
        { headers: {
                'Authorization': localStorage.getItem('authToken')
            } })
        .then(res => {
            window.location.reload()
    });
}
