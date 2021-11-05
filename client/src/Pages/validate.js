export const validate = (user) =>{
    const err = {}

    if(!user.email.trim()){
        err.email = "Email is required"
    }

    if(!user.password){
        err.password = "Password is required"
    }

    return err;
}

export const registerValidate = (user) =>{
    const err = {}

    if(!user.name.trim()){
        err.name = "Name is required"
    }

    if(!user.email.trim()){
        err.email = "Email is required"
    }

    if(!user.password){
        err.password = "Password is required"
    }

    if(!user.cf_password){
        err.cf_password = "Confirm Password is required"
    }

     else if(user.cf_password !== user.password){
        err.cf_password = "Confirm Password does not match"

     }

    return err;
}