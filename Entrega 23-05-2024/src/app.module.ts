import { AppService } from './app.service';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CreaturesModule } from './creatures/creatures.module';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/elden-ring'),
    UsersModule,
    AuthModule,
    CreaturesModule
  ],
  controllers: [],
  providers: [AppService, LoggingInterceptor],
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
