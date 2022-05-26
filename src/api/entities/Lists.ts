import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('lists')
export class Lists extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  listName: string;

  @Column({
    type: 'simple-array',
  })
  release_dates: string[];

  @Column({
    type: 'simple-array',
  })
  titles: string[];

  @Column({
    type: 'simple-array',
  })
  characters: string[];
}
