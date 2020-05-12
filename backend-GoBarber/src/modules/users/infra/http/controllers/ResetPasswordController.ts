import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPassawordService from '@modules/users/services/ResetPasswordService';

export default class ResetPassawordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassawordService = container.resolve(ResetPassawordService);

    await resetPassawordService.execute({
      token,
      password,
    });

    return response.status(204).json();
  }
}
