import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').Action} */
export const POST = async ({ url, request }:any) => {
    // console.log(request);
    const bodyData = await request.formData();
    const data = [...bodyData];
    const email = formData(data, 0);
    const password = formData(data, 1);

    let errors:any = null;
    if(!email) errors = errors ? {...errors, email: 'Email field is requied'} : {email: 'Email field is requied'}
    if(!password) errors = errors ? {...errors, password: 'Password field is requied'} : {password: 'Password field is requied'};

    if(errors)
    return {
        status: 401,
        errors
    }

    return {
        status: 302,
        location: url.searchParams.get('redirectTo') ?? '/'
    }
}

const formData = (data:any[], index: any) : any => {
    return data[index][1];
}