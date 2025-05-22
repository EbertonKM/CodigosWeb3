import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntregadoresModule } from 'src/entregadores/entregadores.module';
import { EncomendaModule } from 'src/encomendas/encomendas.module';

@Module({
  imports: [EntregadoresModule, EncomendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
