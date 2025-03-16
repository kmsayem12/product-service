export const mongodbConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/product-service',
  user: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD,
  port: parseInt(process.env.MONGODB_PORT || '27017', 10),
  dbName: process.env.MONGODB_DB_NAME || 'product-service',
  options: {}, // Removed deprecated options
};
