import { Controller, Get, Response } from '@nestjs/common';
import { Response as expResponse } from 'express';

@Controller()
export class AppController {
  @Get('hello')
  getHello(@Response() res: expResponse): expResponse {
    return res.json('Hello World');
  }
}