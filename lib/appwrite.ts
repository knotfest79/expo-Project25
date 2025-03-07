import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67c0eb1a00105d9a93fb")
  .setPlatform("au.edu.nsw.ait.testapp");

export const account = new Account(client);
export const databases = new Databases(client);
