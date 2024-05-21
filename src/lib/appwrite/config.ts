import { Client, Account, Databases, Storage, Avatars } from "appwrite";


export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    databseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTIONS_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTIONS_ID,
    saveCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTIONS_ID
}


export const client = new Client();

client.setProject(appwriteConfig.projectId!);
client.setEndpoint(appwriteConfig.endpoint!);

export const account = new Account(client);

export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);