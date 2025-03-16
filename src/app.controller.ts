import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { ProductService } from './services/product.service';
import { ProductCreateEvent } from './event/product-create-event';
import { ResponseHelper } from './common/helpers/response.helper';
import { ErrorMessages } from './common/constants/error.constants';

@Controller()
export class AppController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('product_created')
  async handleProductCreated(data: ProductCreateEvent) {
    try {
      return await this.productService.create(data);
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = Object.keys(error.errors).reduce(
          (acc, key) => {
            acc[key] = error.errors[key].message;
            return acc;
          },
          {},
        );

        return ResponseHelper.error(
          ErrorMessages.PRODUCT.CREATE.VALIDATION_FAILED,
          validationErrors,
        );
      }
      return ResponseHelper.error(
        error.message || ErrorMessages.PRODUCT.CREATE.FAILED,
        error.errors,
      );
    }
  }
}
