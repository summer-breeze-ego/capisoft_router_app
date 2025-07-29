import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXAKTPXV83NIbZp-1JJfL_xncqp1455iM",
    authDomain: "todolist-6847c.firebaseapp.com",
    projectId: "todolist-6847c",
    storageBucket: "todolist-6847c.firebasestorage.app",
    messagingSenderId: "413795459499",
    appId: "1:413795459499:web:659451394aaf34ea19f2ee",
};

// init firebase
const app = initializeApp(firebaseConfig);

// export auth instance
export const auth = getAuth(app);
