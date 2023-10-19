import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';


const DATABASE_NAME = process.env.FIREBASE_DATABASE_NAME;

export const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,

	databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
};

export const app = firebase.initializeApp(config);
export const db = getDatabase(app);
