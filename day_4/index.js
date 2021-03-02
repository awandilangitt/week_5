const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('binaracademy', 'awan24', 'Kurniawan123!', {
    host: 'localhost',
    dialect: 'mysql',
  });

  const testConnection = async() => {
//check database connection
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const getAllStudents = async() => {
const data = await sequelize.query
("select * from binaracademy.tbl_students where id = 3")
return data;
};

  testConnection();

  console.log(getAllStudents());

  getAllStudents().then((data) => console.log(data[0][0].birthday));

