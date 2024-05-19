import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../config/config";

export class Services {
  client = new Client();
  databases;
  storageBuket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.setProject);
    this.databases = new Databases(this.client);
    this.storageBuket = new Storage(this.client);
  }

  async createPost({ Title, Content, FeatureImage, Status, UserId, Slug }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteurlCollectionID,
        Slug,
        { Title, Content, FeatureImage, Status, UserId }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(Slug, { Title, Content, FeatureImage, Status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseID,
        conf.appwriteurlCollectionID,
        Slug,
        { Title, Content, FeatureImage, Status }
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost(Slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseID,
        conf.appwriteurlCollectionID,
        Slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(Slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteurlCollectionID,
        Slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getAllPost(queries = Query.equal("Status", "active")) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteurlCollectionID,
        queries
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  //   File Upload Service

  async uploadFile(file) {
    try {
      return await this.storageBuket.createFile(
        conf.appwriteurlBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storageBuket.deleteFile(conf.appwriteurlBucketID, fileId);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storageBuket.getFilePreview(conf.appwriteurlBucketID, fileId);
    } catch (error) {
      throw error;
    }
  }
}

export const services = new Services();

export default services;
