import app from "./app"
import mongoose from "mongoose"
import config from "./app/config"

main().catch(err=>console.log(err));

async function main() {
    try{
        await  mongoose.connect(config.DATABASE_URL as string)
        app.listen(config.port, ()=>{
            console.log('server is ruungit att' , config.port)
        })
    }catch(err){
        console.log(err);
    }
    
}



