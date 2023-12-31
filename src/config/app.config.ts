interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own user data', 'View company data', 'Update own user data', 'View own user data'],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Edit personal information',
    'Oversee company operations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9c1f732c-a3cc-48d8-9b2b-0fdb8cda0cbe',
};
