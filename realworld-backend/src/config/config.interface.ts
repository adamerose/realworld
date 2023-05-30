// Import this wherever ConfigService is injected and use it like so:
// constructor(private configService: ConfigService<EnvironmentVariables>) {}
export interface EnvironmentVariables {
  NODE_ENV: 'development' | 'production';
  DATABASE_URL: string;
  JWT_SECRET: string;
}
