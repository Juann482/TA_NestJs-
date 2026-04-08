/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsInt, IsBoolean, IsOptional } from "class-validator"; // Agregado IsOptional
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

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly telephone: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly FamTelephone: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly state: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    readonly isActive: boolean;

    // --- NUEVOS CAMPOS AGREGADOS ---
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

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @Type(() => Number)
    @ApiProperty({ type: [Number] })
    readonly roleIds: number[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }