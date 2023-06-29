

//this take cares of user authentication as soon as user hits login this will come into action
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "ef4be1c97b204221845404db9d534aa9";

//this says that the screen we are  going to show user will contain these things ,we are taking some of the CRUD operations from API
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

//getting the access token form reponse when the users hits login button
export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

//we are going to create an url using above info

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;