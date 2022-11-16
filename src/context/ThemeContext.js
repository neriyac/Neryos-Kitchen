import { createContext, useReducer } from "react"


export const ThemeContext = createContext()


const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGED_COLOR':
            return { ...state, color: action.payload}
        default:
            return state
    }
}


export function ThemeProvider({ children }){
    const [state,dispatch] = useReducer(themeReducer, {
        color: '#58249c'
    })

    const changeColor = (color) => {
        dispatch({ type: 'CHANGED_COLOR', payload: color})
    }

    return(
        <ThemeContext.Provider value={{...state, changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}
