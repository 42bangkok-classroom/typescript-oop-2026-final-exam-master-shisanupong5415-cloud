import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { IUser } from './product.interface';

@Injectable()
export class ProductService {
  findAll() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as IUser[];
  }
}
