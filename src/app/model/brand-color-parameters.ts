import { Params } from 'dc-extensions-sdk';

interface BrandColorParameters extends Params {
  title?: string;
  contentID?: string;
  deliveryKey?: string;
  account?: string;
  useNames?: boolean;
  groups?: string[];
  hubName?: string;
}

export { BrandColorParameters };
