import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import DeviceService from './device.service';
import { DeviceRepository } from './device.repository';
import { CassandraOrmModule } from 'cassandra-orm4nest';
import Device from './entities/device.entity';

@Module({
  imports:[
    CassandraOrmModule.forFeature([ 
      Device
  ]),
  ],
  controllers: [DeviceController],
  providers: [
    DeviceService,
    DeviceRepository
  ]
})
export class DeviceModule {}
