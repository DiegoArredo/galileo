import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.USERS_DATABASE_HOST || 'pg-2ccdd4ab-galileo.f.aivencloud.com',
      port: parseInt(process.env.USERS_DATABASE_PORT || '25064'),
      username: process.env.USERS_DATABASE_USER || 'avnadmin',
      password: process.env.USERS_DATABASE_PASSWORD || '',
      database: process.env.USERS_DATABASE_NAME || 'defaultdb',
      entities: [User],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
        ca: process.env.USERS_DATABASE_CA_CERT,
      },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
