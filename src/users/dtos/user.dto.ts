/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsInt, IsBoolean, IsOptional, IsEmail } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly lastName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly docType: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly docNumber: string;

    @IsEmail() // Mejor usar IsEmail para validar el formato
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    readonly password?: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    readonly isActive: boolean;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    readonly telephone?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    readonly FamTelephone?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false, default: 'activo' })
    readonly state?: string;

    // Campos opcionales para registro dual de vehículo
    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    readonly placa?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    readonly marca?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    readonly modelo?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    readonly color?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    readonly tipoVehiculo?: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @Type(() => Number)
    @ApiProperty({ type: [Number] })
    readonly roleIds: number[];

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    @ApiProperty({ required: false })
    readonly fichasId?: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }