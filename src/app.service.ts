import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';
@Injectable()
export class AppService {
  getHello<T>(success: boolean, data: any = null, message:string): ApiResponse<T> {
    return {
      success,
      message,
      data,
  }
}
}
