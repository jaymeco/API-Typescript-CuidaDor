import {} from 'typeorm';
import { v4 as uuid } from 'uuid';

export class Goal {
  public readonly id: string;

  public content: string;

  public checked: boolean;

  public created_at: Date;

  constructor () {
    if(!this.id){
      this.id = uuid();
    }
  }
}
