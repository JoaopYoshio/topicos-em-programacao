import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LogModel } from './log.model';
export declare class LoggingInterceptor implements NestInterceptor {
    private readonly logModel;
    constructor(logModel: LogModel);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
