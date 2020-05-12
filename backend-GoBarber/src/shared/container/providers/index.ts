import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStoragerProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProveider/models/IMailProvider';
import EtherealMailProvider from './MailProveider/implementations/EtherealMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStoragerProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealMailProvider(),
);
