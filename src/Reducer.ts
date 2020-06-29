import axios from 'axios';

export interface Action {
    type: string;
    payload?: any;
}

export interface QuoteModel {
    _id: string;
    en: string;
    author: string;
    rating: number;
    id: string;
}

export const initialState = {
    loading: true,
    data: [] as QuoteModel[], //defining empty array of object
    error: ''
}

/*Obtain type/interface from object */
export type QuoteState = Readonly<typeof initialState>;

/** The reducer function */
export default (initState: QuoteState = initialState, action: Action): QuoteState => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case "FETCH_ERROR":
            return {
                loading: false,
                data: [] as QuoteModel[],
                error: 'Something went wrong!'
            }
        default:
            return initState
    }
}

export const loadData = (dispatch: React.Dispatch<Action>) => {
    const url = "https://programming-quotes-api.herokuapp.com/quotes/lang/en";
    axios
        .get(url)
        .then((res) => {
            console.log("Data fetched successfully.", res);
            // in place of setting state call dispatch method
            // this will update the state in the useReducer
            dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: "FETCH_ERROR" });
        });
};