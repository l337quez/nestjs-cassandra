import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { CassandraOrmModule } from 'cassandra-orm4nest';
import Device from './device/entities/device.entity';
import { auth } from "cassandra-driver";

@Module({
  imports: [
    CassandraOrmModule.forRoot({ // database configuration
        contactPoints: ['localhost'],
        authProvider: new auth.PlainTextAuthProvider('username', 'password'),
        localDataCenter: 'datacenter1'
    }),

    DeviceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




