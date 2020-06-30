const express=require('express');
const server=express();
const middleware=require('./middleware/middleware')
server.use(middleware);

const userRoute=require('./router/user');
const config=require('./config/config.json');

server.use('/user',userRoute); 


server.listen(process.env.PORT || config.app.port, () => {
	console.log(`Service is listening to ${config.app.port}`);
});