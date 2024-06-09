import axios from "axios";

export default class ApoImoApi {
    constructor() {
        this.serverURL = process.env.REACT_APP_SERVER_URL;
    }
    async getFeaturedContent() {
        return axios.get(this.serverURL + "/api/featuredContent");
    }
    async getCategories() {
        return axios.get(this.serverURL + "/api/categories");
    }
    async getCategory(categoryID) {
        return axios.get(this.serverURL + "/api/categories/" + categoryID);
    }
    async getCategoryContent(categoryID) {
        return axios.get(this.serverURL + "/api/categories/" + categoryID + "/content");
    }
    async getContentDetails(contentID) {
        return axios.get(this.serverURL + "/api/content/" + contentID);
    }
}