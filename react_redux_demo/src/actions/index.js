export const increment=(nu)=>{
    return{
        type:'INCREMENT',
        payload:nu
    };
};

export const decrement=(nu)=>{
    return{
        type:'DECREMENT',
        payload:nu
    }
}