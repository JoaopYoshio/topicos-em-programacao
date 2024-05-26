import { AppService } from './app.service';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CreaturesModule } from './creatures/creatures.module';
import { LogModel } from './common/interceptor/log.model';
import { Log, LogSchema } from './common/interceptor/log.schema';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    UsersModule,
    AuthModule,
    CreaturesModule
  ],
  controllers: [],
  providers: [AppService, LoggingInterceptor, LogModel],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: '*', method: RequestMethod.POST },
      );
  }
}
