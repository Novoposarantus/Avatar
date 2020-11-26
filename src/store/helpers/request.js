import axios from 'axios';
import {apiDefault} from '@/constants';

export async function sendRequest(url, type, data) {
    const currentURL = `${apiDefault}${url}`;
    let requestData = null;
    let params = null;
    let headers = {};
    headers['Authorization'] = "Bearer KY6EqQa5wE56G43Tf-aEBjw1x3TDjUNgAwHgYq16jXY"

    if (type.toUpperCase() == 'GET' || type.toUpperCase() == 'DELETE') {
        params = data;
    } else {
        headers['Content-Type'] = 'application/json'
        requestData = data;
    }

    const response = await axios({
        url: currentURL,
        method: type,
        params: params,
        data: requestData,
        headers
    })
    return {response, json: response.data};

}