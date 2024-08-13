import app from "./app"

import config from "./app/config"



app.listen(config.port, ()=>{
    console.log('khadija is bemaning at 00 port' , config)
})