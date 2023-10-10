import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    // _id: string;

    @Prop({ required: true })
    name: string;
    
    @Prop({ unique: true, required: true })
    email: string;
    
    @Prop({ minlength: 6, required: true })
    password?: string;
    
    @Prop({ default: true })
    active: boolean;
    
    @Prop({ type: [String], default: ['user'] })
    roles: string;
}

export const UserSchema = SchemaFactory.createForClass( User );