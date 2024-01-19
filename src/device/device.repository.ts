import { Injectable } from "@nestjs/common";
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Client } from "cassandra-driver";

import { InjectClient, InjectMapper, BaseService } from "cassandra-orm4nest";
import Device from './entities/device.entity';



@Injectable()
export class DeviceRepository extends BaseService<Device> {
    constructor(
        @InjectMapper(Device) private readonly mapper, // inject mapper object
        @InjectClient() client: Client // inject cassandra connection client
    ) {
        super(client, mapper, Device); // inherit the parent class constructor
    }

}


