import http from "@/config/http-common";

class SteamAPIService {
    getProfile(id: string): Promise<any> {
        return http.get(`${process.env.VUE_APP_AXIOS_BASE_URL}${process.env.VUE_APP_PROFILE_API}/${id}`);
    }
    getWishlist(id: string): Promise<any> {
        return http.get(`${process.env.VUE_APP_AXIOS_BASE_URL}${process.env.VUE_APP_WISHLIST_API}/${id}`);
    }
}

export default new SteamAPIService();