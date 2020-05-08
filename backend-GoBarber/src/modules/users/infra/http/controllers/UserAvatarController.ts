import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateServiceAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async upate(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateServiceAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}
