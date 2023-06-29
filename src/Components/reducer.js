//Defining intialState and Reducer for useReducer Hook

//const [state, dispatch] = useReducer(reducer, intialState);


//Defining initialState
export const initialState = {
    user: null,
    playlists: [],
    // this logs in the user and keeps him logged in if not null
    // token: "BQD9rnddXgmnN4jBTAr-yAu9pYJ3UgiwBuO79tAQ4eH0m3rMZVJbY3sYzEmXtl1PT9rjPWvY6pafQmXiP8QFthE2baUQ8C08LCMhbyi3C-7TwXpFX518OV0ipXiMATZEkAxvs_zC4cIw4-hu-XQm91LtFLmct-liIn2Wt4Wl2cSknqteK3r197jnWhwDUSRsMhqxoLLx8x2zUpFn",
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,

};


//handling state for the action Dispatched 
const reducer = (state, action) => {
    console.log("this is action 👇👇👇👇\n", action);
    switch (action.type) {
        //this is like listener to the dispatch in app.js the dispatch shoots data into the context and then this listener changes the data accordingly
        case "SET_USER":
            // if action.type=="SET_USER" then change user to action.user
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            // if action.type=="SET_TOKEN" then change token to action.token
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
    }
}

//exporting reducer 
export default reducer;