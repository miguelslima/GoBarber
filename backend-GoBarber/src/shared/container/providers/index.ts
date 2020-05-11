import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStoragerProvider from './StorageProvider/implementations/DiskStorageProvider';

// import IMailProvider from './MailProveider/models/IMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStoragerProvider,
);
