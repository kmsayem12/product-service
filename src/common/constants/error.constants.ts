export const ErrorMessages = {
  PRODUCT: {
    CREATE: {
      FAILED: 'Failed to create product',
      VALIDATION_FAILED: 'Validation failed',
    },
    FETCH: {
      FAILED: 'Failed to fetch product',
      NOT_FOUND: (id: string) => `product with id ${id} not found`,
    },
  },
};
