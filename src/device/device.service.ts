import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { DeviceRepository } from './device.repository';

@Injectable()
export default class DeviceService {
  constructor(
    private readonly deviceRepository: DeviceRepository,

  ) {}

  create(createDeviceDto: CreateDeviceDto) {
    return 'This action adds a new device';
  }

  async findAll() {
    return `This action returns all device`;
  }


}
