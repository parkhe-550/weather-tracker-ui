import axios from "axios";
const baseURL = "http://localhost:8080/WeatherInformation/";
const RestApiClient = axios.create({ baseURL: baseURL })
const isFunction = (fn) => typeof fn === "function";
export const RestApi = () => {
    return {
        getData: (url, params, successCallBack, errorCallBack) => {
            const process = url + `${params ? params : ''}`;
            return RestApiClient.get(process)
                .then(res => {
                    if (isFunction(successCallBack)) {
                        successCallBack(res.data);
                        return;
                    }
                    return res.data;
                })
                .catch(error => {
                    const customError = new Error();
                    customError.stack = error.response;
                    if (isFunction(errorCallBack)) {
                        errorCallBack(customError);
                        return;
                    }
                    throw customError;
                })
        },
        postData: (url, body, successCallBack, errorCallBack) => {
            return RestApiClient.post(url, body)
                .then(res => {
                    if (isFunction(successCallBack)) {
                        successCallBack(res.data);
                        return;
                    }
                    return res.data;
                })
                .catch(error => {
                    const customError = new Error();
                    customError.stack = error.response;
                    if (isFunction(errorCallBack)) {
                        errorCallBack(customError);
                        return;
                    }
                    throw customError;
                })
        }
    };
};