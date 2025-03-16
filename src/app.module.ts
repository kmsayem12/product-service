import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { mongodbConfig } from './config/mongodb.config';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    MongooseModule.forRoot(mongodbConfig.uri, {
      ...mongodbConfig.options,
      user: mongodbConfig.user,
      pass: mongodbConfig.password,
      dbName: mongodbConfig.dbName,
    }),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
