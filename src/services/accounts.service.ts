import axios from "axios"
import { LoignModel, RegisterModel } from "../models/accounts.model";
import { TokenModel } from "../models/tokens.model";
import { tokensService } from "./tokens.service";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}accounts`
});

// ----- put service methods to one object
export const accountsService = {

    register: function (model: RegisterModel) {
        return api.post("register", model);
    },

    login: function (model: LoignModel) {
        return api.post<TokenModel>("login", model);
    },
    logout: async function () {
        const refreshToken = tokensService.getRefreshToken();
        tokensService.clear();

        if (refreshToken) {
            await api.post("logout", { refreshToken });
        }
    }
}
