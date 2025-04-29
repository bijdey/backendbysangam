function delayFn(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    });
}
async function delayedGreet(name){
    await delayFn(2000) 
    console.log(name)
}

delayedGreet("bijay")

async function division(a,b){
    try{
        if(b==0) throw new Error(`can't divide by zero`)
            return a/b

    }catch(err){
        console.log(err)
    }
}
async function main(){
    console.log(await division(10,3))
    console.log(await division(10,0))
}
main()