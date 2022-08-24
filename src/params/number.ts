// import type { ParamMatcher } from "@sveltejs/kit";

/** @type {import('./$types').ParamsMatcher} */
export const match = (param: any) => {
    // if(typeof parseInt(param) === typeof 0) 
    // return true
    
    // return false

    return /^\d+$/.test(param)
}