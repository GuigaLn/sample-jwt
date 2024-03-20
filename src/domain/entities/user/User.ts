import { BadRequest } from '../../../@core/application/errors/BadRequest';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  props: IUser;

  constructor(props: IUser) {
    this.props = props;
    this.validate();
  }

  validate() {
    /* Poderia e seria recomendado usar um lib para validar - Exem.: zod */
    if(!this.props.id) {
      throw new BadRequest('Id is required');
    }
    if(!this.props.name) {
      throw new BadRequest('Name is required');
    }
    if(!this.props.email) {
      throw new BadRequest('E-mail is required');
    }
    if(!this.props.password) {
      throw new BadRequest('Password is required');
    }
  }
}
