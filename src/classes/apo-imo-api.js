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
    async likeContent(contentID) {
        return axios.patch(this.serverURL + "/api/content/" + contentID + "/like")
    }
    async getComments(contentID) {
        return axios.get(this.serverURL + "/api/content/" + contentID + "/comments")
    }
    async postComments(contentID, newComment) {
        return axios.post(this.serverURL + "/api/content/" + contentID + "/comments", newComment)
    }
    async likeComment(contentID, commentID) {
        return axios.patch(this.serverURL + "/api/content/" + contentID + "/comments/" + commentID + "/like")
    }
    async deleteComment(contentID, commentID) {
        return axios.delete(this.serverURL + "/api/content/" + contentID + "/comments/" + commentID)
    }
    async signUp(user) {
        return axios.post(this.serverURL + "/api/user/register", user)
    }
    async login(user) {
        return axios.post(this.serverURL + "/api/user/login", user)
    }
    async getUserProfile() {
        return axios.get(this.serverURL + "/api/user/profile")
    }
}