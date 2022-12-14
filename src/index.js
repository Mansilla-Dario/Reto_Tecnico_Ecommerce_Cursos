import app from './app.js';
import {sequelize} from './database/courses_db.js' ;


async function main(){
  try {
    await sequelize.sync({force:false});//Pasar a True para reconstruir las tabla al iniciar el servidor
    console.log("'I´m Alive!!!!' - Connection has ben established successfully.");
    app.listen(4000);
    console.log("Servert is listening on port", 4000);
  } catch (error) {
    console.log("Unable to connect to the database", error);
    
  }
}main();