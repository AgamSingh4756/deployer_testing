import { ref, set, getDatabase } from "firebase/database";
import { auth } from "./firebaseConfig";

const db = getDatabase();

export const createUserAccount = (name, email, password) => {
  const userData = {
    name,
    email,
    password
  };

  const user = auth.currentUser;

  if (user) {
    set(ref(db, `users/${user.uid}`), userData)
      .then(() => {
        console.log("User data stored successfully.");
      })
      .catch((error) => {
        console.error("Error storing user data: ", error);
      });
  } else {
    console.error("User is not authenticated.");
  }
};

export const submitData = async (name, email, password) => {
  const data = {
    Name: name,
    Email: email,
    password: password
  };

  const response = await fetch(
    "https://login-tester-cba36-default-rtdb.firebaseio.com/userDataRecords.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }
  );

  if (response.ok) {
    console.log("Data submitted successfully.");
  } else {
    console.error("Error submitting data.");
  }
};
  