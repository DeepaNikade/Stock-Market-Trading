export function validateReq(schema,data){
    return schema.validate(data,{abortEarly:false,allowUnkown:true});
}