import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { appointment} from "./appointment"
import { role } from "./role"

@Entity('user')
export class user extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:'first_name'})
    firstName!: string

    @Column({name:'last_name'})
    lastName!: string

    @Column({name:'email'})
    email!:string

    @Column({name:'password_hash'}) 
    passwordHash!:string

    @Column({name:'role_id'})
    roleId!:number

    @ManyToOne (() => role, (role) => role.users, {onUpdate: 'CASCADE' })
    @JoinColumn ({ name: "role_id"})
    role!: role;
    
    @OneToMany(() => appointment, (appointment) => appointment.client , {onDelete: 'CASCADE' })
    clientAppointments!: appointment[];

    @OneToMany(() => appointment, (appointment) => appointment.artist, {onDelete: 'CASCADE' })
    artistAppointments!: appointment[];
}
