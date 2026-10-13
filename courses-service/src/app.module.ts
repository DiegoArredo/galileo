import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './cursos/entities/curso.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.COURSES_DATABASE_HOST || 'pg-1febce65-alumnos-c0a9.f.aivencloud.com',
      port: parseInt(process.env.COURSES_DATABASE_PORT || '26339'),
      username: process.env.COURSES_DATABASE_USER || 'avnadmin',
      password: process.env.COURSES_DATABASE_PASSWORD || '',
      database: process.env.COURSES_DATABASE_NAME || 'defaultdb',
      entities: [Curso],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
        ca: process.env.COURSES_DATABASE_CA_CERT,
      },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema
    }),
    CursosModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
