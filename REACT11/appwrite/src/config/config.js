const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL_ENDPOINT),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteurlCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteurlBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
