import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('64167ff267803eb4ef51');


export const account = new Account(client)

//Database

export const databases = new Databases(client, "6416815259cca1b16abb") 