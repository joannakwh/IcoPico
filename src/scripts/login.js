firebase.auth().onAuthStateChanged(function (user) {
    database.ref("userlist/" + user.uid).update({
        "userName": user.displayName,
        "email": user.email
    });
    sessionStorage.setItem("uid", user.uid);
    sessionStorage.setItem("name", user.displayName);
});

// database.ref("icopico-89023").update({"name" : "nic"});

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            return true;
        },
        uiShown: function () {
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '../icopico/icopico.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '../icopico/icopico.html',

    // Privacy policy url.
    privacyPolicyUrl: '../icopico/icopico.html'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);