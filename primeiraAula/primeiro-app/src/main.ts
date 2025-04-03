import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

/*
  app.module.ts       ->    É o modulo principal do aplicativo.
  app.controller.ts   ->    Define quais são as rotas e lida com as requisições.
  app.service         ->    Contêm a lógica do negócio, separado do controlador.
*/

//Método que inicia o projeto (como um Main)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true //Se o usuário enviar algum parâmentro inesistente no DTO ele ignora
  })); //Trabalha com validação global
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
