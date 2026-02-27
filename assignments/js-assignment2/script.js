
//import firebase
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    // import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

    //firebase config 
        const firebaseConfig = {
            apiKey: "AIzaSyBHHdxpaxR4gABX3ernu9tfOj4Oi9dfrLw",
            authDomain: "updatepassword-7055e.firebaseapp.com",
            databaseURL: "https://updatepassword-7055e-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "updatepassword-7055e",
            storageBucket: "updatepassword-7055e.firebasestorage.app",
            messagingSenderId: "886541520866",
            appId: "1:886541520866:web:ae0134da5ab1a1f28373bb"
        };

    // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

    //get all the elements we need
        let newPassword = document.getElementById("newPassword");
        let newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
        let confirmPassword = document.getElementById("confirmPassword");
        let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");
        let updatePasswordForm = document.getElementById("updatePasswordForm");
        const userIdInput = document.getElementById("userIdInput");
        

    // validate new password func
        function validateNewPassword() {
           newPasswordErrMsg.textContent = ""; //to clear previous error
           //show if the password input is empty
           if(newPassword.value === "") {
            newPasswordErrMsg.textContent = "Required*";
            return false;
           }
           return true;
        }

    // validate func for confirm password
        function validateConfirmPassword() {
            confirmPasswordErrMsg.textContent = ""; // to clear prevoius error
        // shows both the feild is filled or not 
            if(confirmPassword.value ==="") {
                confirmPasswordErrMsg.textContent = "Required*";
                return false;
            }
                if(newPassword.value !== confirmPassword.value) {
                    confirmPasswordErrMsg.textContent = "Password must be same*";
                    return false;
                }
                return true;
        }
    //submit update button
        updatePasswordForm.addEventListener("submit", async function(event){
            event.preventDefault();
            const isNewValid = validateNewPassword();
            const isConfirmValid = validateConfirmPassword();
            const userId = userIdInput.value.trim();

            if (!isNewValid || !isConfirmValid) return;
    if(userId === "") {
        alert("Please enter a User ID");
        return;
    }

    try {
        await set(ref(database, "users/" + userId), {
           userId: userId,
           password: newPassword.value
        });

        alert(`Password updated successfully for ${userId} ✅`);
        updatePasswordForm.reset();

    } catch (error) {
        alert("Error: " + error.message);
    }
});