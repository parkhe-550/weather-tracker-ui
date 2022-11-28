import { RestApi } from "./rest_api";
const END_POINT = {
    login: "login/",
    setting:"preference/",
    weatherStatus:"weather/status"
}
const apiClient = RestApi();

export const  loginAction =  async(id) => {
    try  {
        return await apiClient.getData(END_POINT.login, `?email=${id}`);
    } catch (error) {
        console.info(error)
        return errorReader(error);
    }
}
export const  changeSetting =  async(requestBody) => {
    try  {
        return await apiClient.postData(END_POINT.setting, requestBody);
    } catch (error) {
        console.info(error)
        return errorReader(error);
    }
}
export const  fetchWeather =  async(requestBody) => {
    try  {
        return await apiClient.postData(END_POINT.weatherStatus, requestBody);
    } catch (error) {
        console.info(error)
        return errorReader(error);
    }
}
const errorReader = (error) => {
    return { isError: true, error: error };
}