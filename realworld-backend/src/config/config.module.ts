import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';

@Module({
    exports: [ConfigService],
    imports: [NestConfigModule.forRoot()],
    providers: [ConfigService],
})
export class ConfigModule { }