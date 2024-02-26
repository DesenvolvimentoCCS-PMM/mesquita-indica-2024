import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { User } from "../types/user";
import { firestore } from "../services/firebase";

export const createNewUser = async (user: User) => {
  try {
    const doc = await addDoc(collection(firestore, "users"), user);

    if (doc) {
      localStorage.setItem("voteId", user.voteId);
    }

    return doc;
  } catch (error) {
    console.log(error);
  }
};

export const findUser = async (email: string) => {
  try {
    const q = query(
      collection(firestore, "users"),
      where("email", "==", email)
    );

    let user = {} as User;

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data() as User;
      user = { ...data };
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const users: User[] = [];

    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const data = doc.data() as User;
      users.push({ id: doc.id, ...data });
    });

    return users;
  } catch (error) {
    console.log(error);
  }
};
