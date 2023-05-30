import { ConfigService as NestConfigService } from '@nestjs/config';

interface EnvironmentVariables {
    NODE_ENV: 'development' | 'production';
    DATABASE_URL: string;
    JWT_SECRET: string;
}

export class ConfigService extends NestConfigService<EnvironmentVariables> { }