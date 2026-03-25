import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAll(): string {
    return 'Hello World!';
  }
}
