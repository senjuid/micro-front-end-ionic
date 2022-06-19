import { Injectable } from '@angular/core';
import { BaseStorage, Preference } from '@core/storage/base.storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  private instanceToken: string;
  private instancePath: string;
  private instancePathPayroll: string;
  private instancePathMarketplace: string;
  private instanceGDAuth: LoginResponse;
  private instanceGDSaas: SaasResponse;
  private instanceIsLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  private companySettingAccess: CompanySetting;

  constructor(
    private baseStorageService: BaseStorage
  ) { }

  set token(token: string) {
    this.instanceToken = token;
  }

  get token(): string {
    return this.instanceToken;
  }

  set gdAuth(auth: LoginResponse) {
    this.instanceGDAuth = auth;
  }

  get gdAuth(): LoginResponse {
    return this.instanceGDAuth;
  }

  set gdSaas(saas: SaasResponse) {
    this.instanceGDSaas = saas;
  }

  get gdSaas(): SaasResponse {
    return this.instanceGDSaas;
  }

  set basePath(path: string) {
    this.instancePath = path;
  }

  get basePath(): string {
    return this.instancePath;
  }

  set payrollPath(path: string) {
    this.instancePathPayroll = path;
  }

  get payrollPath(): string {
    return this.instancePathPayroll;
  }

  set marketplacePath(path: string) {
    this.instancePathMarketplace = path;
  }

  get marketplacePath(): string {
    return this.instancePathMarketplace;
  }

  async loadAuth() {
    try {
      const auth = await this.baseStorageService.getGreatdayStorage<LoginResponse>(Preference.Auth);
      const saas = await this.baseStorageService.getGreatdayStorage<SaasResponse>(Preference.Saas);
      if (auth?.id) {
        this.instanceToken = auth.id;
        this.instancePath = saas.storedPrelogin?.GOPATHNEW;
        this.gdAuth = auth;
        this.gdSaas = saas;
        this.instancePathMarketplace = auth?.marketplace;
        this.companySettingAccess = auth?.companySetting;
      }
    } catch (error) { }
  }

  async getAuth() {
    return await this.baseStorageService.getGreatdayStorage<LoginResponse>(Preference.Auth);
  }

  async getSaas() {
    return await this.baseStorageService.getGreatdayStorage<SaasResponse>(Preference.Saas);
  }

  public get isLoggedIn(): Observable<boolean> {
    return this.instanceIsLoggedIn.asObservable();
  }

  public set loggedIn(auth: boolean) {
    this.instanceIsLoggedIn.next(auth);
  }

  get companySetting() {
    return this.companySettingAccess;
  }

  get isAttAdmin() {
    if (this.instanceGDAuth?.isAttAdmin) {
      return true;
    } else if (this.instanceGDAuth?.isHRAdmin) {
      return true;
    }

    return false;
  }

  get isHRAdmin() {
    return this.instanceGDAuth?.isHRAdmin;
  }
}

export interface PreLoginData {
  SFPATH: string;
  MODE: any[];
  ACCOUNT: string;
  IST: string;
  CUSTOM: any[];
  ACCOUNTNAME: string;
  GOPATHNEW: string;
  GOPATH: string;
}

export interface DeviceInfo {
  versionNumber: string;
  versionCode: string;
  Model: string;
  Platform: string;
  Version: string;
  DeviceID: string;
  IMEI: string;
}

export interface VersionApps {
  code: string;
  number: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  pswd: string,
  shareAccount: string;
  tokenPPA: string;
  npwd: string;
  ist: string;
  preLoginData: PreLoginData;
  deviceInfo: DeviceInfo;
  keep: boolean;
  versionApps: VersionApps;
  checkonly: boolean;
  language: string;
  ssoAuthCode: boolean;
  ssoTAM: boolean;
  ssoPayload: any;
}

export interface LoginSharedRequest {
  username: string;
  password: string;
  pswd: string,
  shareAccount: string;
  tokenPPA: string;
  npwd: string;
  ist: string;
  preLoginData: PreLoginData;
  deviceInfo: DeviceInfo;
  keep: boolean;
  versionApps: VersionApps;
  checkonly: boolean;
  language: string;
  ssoAuthCode: boolean;
  ssoTAM: boolean;
  ssoPayload: any;
}

export interface LoginForms {
  email: string;
  password: string;
  shareAccount: string;
  tokenPPA: string;
  pin: number;
  ist: string;
  keepCheck: boolean;
  checkonly: boolean;
  language: string;
  ssoAuthCode: boolean;
  ssoTAM: boolean;
  ssoPayload: any;
}

export interface LoginResponse {
  id: string;
  refreshToken: string;
  ttl: any;
  created: string;
  userId: number;
  userLdap: string;
  empId: string;
  empNo: string;
  userName: string;
  fullName: string;
  nickname: string;
  photo: string;
  position: string;
  email: string;
  emailVerified: boolean;
  companyId: number;
  companyCode: string;
  company: Company;
  accId: number;
  isdefault: boolean;
  functionAuth: FunctionAuth;
  multiCompany: MultiCompany;
  isSF6: any;
  updateStorage: string;
  ist: Ist;
  loginid: string;
  attWifiCheck: boolean;
  menu: Menu;
  resetPassword: boolean;
  socket: Socket;
  payroll: Payroll;
  marketplace: string;
  greatdayTransfer: string;
  greatdayPPOB: string;
  greatdayMarketplaceApp: string;
  benefitsBusiness: string;
  changePass: boolean;
  currencyCode: string;
  isHRAdmin: boolean;
  companySetting: CompanySetting;
  licenseLists: LicenseList[];
  empphotopath: any;
  companyphotopath: any;
  leavepath: any;
  attcorpath: any;
  elearningpath: any;
  ovtpath: any;
  policypath: any;
  annpath: any;
  ondutypath: any;
  claimpath: any;
  loanpath: any;
  trainingpath: any;
  pollingpath: any;
  emptrainingpath: any;
  empcertificationpath: any;
  elearnimgquizpath: any;
  purchaseorderpath: any;
  purchaseinvoicepath: any;
  purchasecontractpath: any;
  purchaserequestpath: any;
  arapadjpath: any;
  depositsettlementpath: any;
  berpath: any;
  bespath: any;
  bedpath: any;
  betpath: any;
  proformainvoicepath: any;
  salesorderpath: any;
  salesinvoicepath: any;
  trncontentpath: any;
  gipath: any;
  grpath: any;
  clpath: any;
  assettransferpath: any;
  revaluepath: any;
  capitalizationpath: any;
  cspath: any;
  deprepath: any;
  wopath: any;
  disposalpath: any;
  maintenanceorderpath: any;
  medicalhistorypath: any;
  projectstagepath: any;
  documentcontrolpath: any;
  serviceagreementpath: any;
  ohsahistorypath: any;
  psychologicaltestpath: any;
  familypath: any;
  customerpath: any;
  isAttAdmin: boolean;
  empbankpath: any;
  appstepattachpath: any;
  appcertificatepath: any;
  path?: any;
  saasData?: any;
  error?: any;
  rememberMe?: boolean;
  user?: any;
}

export interface Company {
  companyName: string;
  taxcountry: string;
  companyLogo: string;
}

export interface FunctionAuth {
  'hrm.employee': string;
  'hrm.employee.employmentdata': string;
  'hrm.employee.personal': string;
  'hrm.payroll': string;
  'hrm.attendance': string;
  'hrm.attendance.leave': string;
  'hrm.reimbursement': string;
  'hrm.loan': string;
  'hrm.performance': string;
  'hrm.orgstruct': string;
  'hrm.career': string;
  'hrm.preference': string;
  'hrm.orgstruct.position': string;
  'hrm.employee.family': string;
  'hrm.employee.education': string;
  'hrm.employee.emergency': string;
  'hrm.employee.skill': string;
  'hrm.employee.address': string;
  'hrm.orgstruct.compolicy': string;
  'hrm.employee.facility': string;
  'hrm.employee.medical': string;
  'hrm.orgstruct.announcement': string;
  'hrm.employee.achievement': string;
  'hrm.employee.disciplinary': string;
  'hrm.employee.contact': string;
  'hrm.employee.serviceagreement': string;
  'hrm.employee.insurance': string;
  'hrm.employee.empadditional': string;
  'hrm.preference.dashboard': string;
  'hrm.attendance.myattendancedata': string;
  'hrm.attendance.todayattendancelist': string;
  'hrm.attendance.attentryform': string;
  'hrm.attendance.overtime': string;
  'hrm.attendance.overtime.ovtrequest': string;
  'hrm.employee.empbank': string;
  'hrm.employee.interest': string;
  'hrm.attendance.attcorrectionreq': string;
  'hrm.attendance.leave.leaverequest': string;
  'hrm.attendance.leave.leavecancellreq': string;
  'hrm.payroll.payslip': string;
  'hrm.employee.skill.empskill': string;
  'hrm.attendance.shiftschedule': string;
  'hrm.attendance.onduty': string;
  'hrm.attendance.onduty.ondutyreq': string;
  'hrm.payroll.salaryhistory': string;
  'hrm.reimbursement.hospital': string;
  'hrm.attendance.onduty.declaration': string;
  'hrm.reimbursement.reimrequest': string;
  'hrm.reimbursement.myreimbalance': string;
  'hrm.employee.medicalhistory': string;
  'hrm.employee.report': string;
  'hrm.attendance.report': string;
  'hrm.performance.simpleperformance': string;
  'hrm.attendance.leave.myleavebalance': string;
  'hrm.performance.dashboard.simpleperformance': string;
  'hrm.loan.loanrequest': string;
  'hrm.recruitment': string;
  'hrm.recruitment.manpowerplanrequest': string;
  'hrm.employee.survey': string;
  'hrm.employee.course': string;
  'hrm.employee.orgactiv': string;
  'hrm.employee.leavebalance': string;
  'hrm.employee.jobexp': string;
  'hrm.employee.reference': string;
  'hrm.employee.psychotest': string;
  'hrm.employee.ohsahistory': string;
  'hrm.preference.ticketing': string;
  'hrm.employee.trainingrecord': string;
  'hrm.employee.competency': string;
  'hrm.attendance.timesheet': string;
  'hrm.employee.checklist': string;
  'hrm.myoffboarding': string;
  'hrm.employee.myonboarding': string;
  'hrm.attendance.overtime.ovtcancelrequest': string;
  'hrm.attendance.onduty.ondutycancelreq': string;
  'hrm.career.careerrequest': string;
  'hrm.performance.dashboard': string;
  'hrm.reimbursement.claimrequest': string;
  'hrm.greatday.tracking': string;
}

export interface MultiCompany {
  companyList: CompanyList[];
  mainCompany: number;
  mainCompanyCode: string;
  mainCurrencyCode: string;
  company_list?: any[]; // optional , harus cek kondisi kalau panggil obj ini
  main_company: any; // optional , harus cek kondisi kalau panggil obj ini
  main_company_code: any; // optional , harus cek kondisi kalau panggil obj ini
}

export interface CompanyList {
  companyId: number;
  companyName: string;
  companyCode: string;
  currencyCode: string;
  selected?: boolean;
}

export interface Ist {
  coname: string;
  coid: number;
  accid: number;
  isSF6: number;
  cocode: string;
  PNUMBER: string;
  LNUMBER: string;
  GOPATH: string;
  GOPATHNEW: string;
  SFPATH: string;
  loginid: string;
  deviceInfo: DeviceInfo;
}

export interface ResponseSwitchCompanyDto {
  position: string;
  functionAuth: FunctionAuth;
  menu: Menu;
  currencyCode: string;
}


export interface Menu {
  home: boolean;
  company: boolean;
  'request-menu': boolean;
  att: boolean;
  'att-offline': boolean;
  'att-barcode': boolean;
  'att-entry': boolean;
  'att-list': boolean;
  'att-correction': boolean;
  'att-correction-listing': boolean;
  'att-correction-add': boolean;
  'att-correction-buttondraft': boolean;
  'att-correction-buttonrevise': boolean;
  'att-correction-buttoncancel': boolean;
  'att-leave': boolean;
  'att-leave-balance': boolean;
  'att-leave-listing': boolean;
  'att-leave-add': boolean;
  'att-leave-buttondraft': boolean;
  'att-leave-buttonrevise': boolean;
  'att-leave-buttoncancel': boolean;
  'att-leave-setting': boolean;
  'att-leave-calendar': boolean;
  'att-onduty-add': boolean;
  'att-onduty-buttondraft': boolean;
  'att-onduty-buttonrevise': boolean;
  'att-onduty-buttoncancel': boolean;
  'att-overtime': boolean;
  'att-overtime-listing': boolean;
  'att-overtime-add': boolean;
  'att-overtime-buttondraft': boolean;
  'att-overtime-buttonrevise': boolean;
  'att-overtime-buttoncancel': boolean;
  'att-shift': boolean;
  'att-shift-table': boolean;
  'att-shift-table-edit': boolean;
  'att-shift-setting': boolean;
  'att-validation': boolean;
  calendar: boolean;
  chat: boolean;
  report: boolean;
  'report-att': boolean;
  'report-att-facesuspect': boolean;
  'report-attsum': boolean;
  'report-att-correction': boolean;
  'report-career': boolean;
  'report-claim': boolean;
  'report-emplist': boolean;
  'report-empreq': boolean;
  'report-empcount': boolean;
  'report-leave': boolean;
  'report-consultation': boolean;
  'report-leavebalance': boolean;
  'report-overtime': boolean;
  'report-shift': boolean;
  'report-payroll': boolean;
  'report-bpjs': boolean;
  'report-spt': boolean;
  'subscription-manager': boolean;
  claim: boolean;
  'claim-claim': boolean;
  'claim-claim-add': boolean;
  'claim-claim-edit': boolean;
  'claim-claim-setting': boolean;
  'claim-claimform': boolean;
  'claim-claimform-add': boolean;
  'claim-claimform-buttondraft': boolean;
  'claim-claimform-buttonrevise': boolean;
  'claim-claimform-buttoncancel': boolean;
  payroll: boolean;
  'payroll-payslip': boolean;
  'payroll-payprocess': boolean;
  transfer: boolean;
  yesdok: boolean;
  'whistle-blower': boolean;
  'transfer-bankaccount': boolean;
  'file-attachment': boolean;
  'payroll-empdata': boolean;
  'payroll-schedule': boolean;
  'payroll-component': boolean;
  'payroll-setting': boolean;
  'setting-notification': boolean;
  'setting-changespv': boolean;
  'setting-changehr': boolean;
  'setting-subscription': boolean;
  marketplace: boolean;
  benefit: boolean;
  'show-button-shiftschedule': boolean;
  'setting-shiftschedule': boolean;
  'setting-changeprivacy': boolean;
  'setting-configdata': boolean;
  'com-profile': boolean;
  'com-profile-edit': boolean;
  'com-announcement': boolean;
  'com-announcement-add': boolean;
  'com-announcement-edit': boolean;
  'com-policy': boolean;
  'com-policy-add': boolean;
  'com-policy-edit': boolean;
  'com-orgstruct': boolean;
  'user-delete': boolean;
  'career-add': boolean;
  'setting-businesstrip': boolean;
  'report-bst': boolean;
  'bst-request': boolean;
  'sales-customer-listing': boolean;
  'sales-customer-add': boolean;
  'sales-customer-edit': boolean;
  'sales-customer-delete': boolean;
  'sales-salesorder-listing': boolean;
  'sales-salesorder-add': boolean;
  'sales-salesorder-buttondraft': boolean;
  'sales-salesorder-buttonrevise': boolean;
  'sales-salesorder-buttoncancel': boolean;
  'sales-salesorder-delete': boolean;
  'purchase-purchaserequisition-listing': boolean;
  'purchase-purchaserequisition-add': boolean;
  'purchase-purchaserequisition-buttondraft': boolean;
  'purchase-purchaserequisition-buttonrevise': boolean;
  'purchase-purchaserequisition-buttoncancel': boolean;
  'purchase-purchaserequisition-delete': boolean;
  post: boolean;
  'report-dailysales': boolean;
  'report-minimumstocklevelinventory': boolean;
  task: boolean;
  'task-button-add': boolean;
  'report-taskfeedback': boolean;
  elearning: boolean;
  'save-userprofile': boolean;
  'setting-smartfeed': boolean;
  'elearning-video': boolean;
  'claim-button-balance': boolean;
  'report-elearning': boolean;
  budget: boolean;
  activityrecording: boolean;
  'activityrecording-tracking': boolean;
  survey: boolean;
  'survey-add': boolean;
  'survey-edit': boolean;
  'survey-delete': boolean;
  'social-media': boolean;
  ppob: boolean;
  'orgstruct-menu': boolean;
  appraisal: boolean;
  'appraisal-setting': boolean;
  birthday: boolean;
  'payroll-old': boolean;
  'setting-holiday': boolean;
  'report-activityrecording': boolean;
  'payslip-printer': boolean;
  'report-empovertime': boolean;
  'mass-leave': boolean;
  'setting-overtime': boolean;
  'report-payslip': boolean;
  'make-id-card': boolean;
  'setting-authenticator': boolean;
  'setting-leave-entitlement': boolean;
  'report-personal': boolean;
  'button-declaration': boolean;
  'employee-career': boolean;
  'profile-bank-account': boolean;
  'profile-insurance': boolean;
  'profile-government-tax': boolean;
  'setting-reqapproval': boolean;
  'setting-rehired': boolean;
  'btn-del-emppersonal': boolean;
  'btn-upd-emppersonal': boolean;
  'btn-upd-contact': boolean;
  'btn-add-address': boolean;
  'btn-upd-address': boolean;
  'btn-del-address': boolean;
  'btn-add-emergency': boolean;
  'btn-upd-emergency': boolean;
  'btn-del-emergency': boolean;
  'btn-add-family': boolean;
  'btn-upd-family': boolean;
  'btn-del-family': boolean;
  'btn-add-education': boolean;
  'btn-upd-education': boolean;
  'btn-del-education': boolean;
  'btn-upd-medical': boolean;
  'btn-add-jobexp': boolean;
  'btn-upd-jobexp': boolean;
  'btn-del-jobexp': boolean;
  'btn-add-empbank': boolean;
  'btn-upd-empbank': boolean;
  'btn-del-empbank': boolean;
  'btn-add-insurance': boolean;
  'btn-upd-insurance': boolean;
  'btn-del-insurance': boolean;
  'btn-profile-detail': boolean;
  'team-mates': boolean;
  'team-mates-favorite': boolean;
  'profile-emppersonal': boolean;
  'profile-contact': boolean;
  'profile-address': boolean;
  'profile-emergency': boolean;
  'profile-family': boolean;
  'profile-education': boolean;
  'profile-medical': boolean;
  'profile-jobexp': boolean;
  loan: boolean;
  'loan-add': boolean;
  training: boolean;
  'profile-competency': boolean;
  'btn-upd-competency': boolean;
  'btn-del-competency': boolean;
  'profile-disciplinary': boolean;
  panicbutton: boolean;
  'panicbutton-report': boolean;
  'panicbutton-admin': boolean;
  'panicbutton-web': boolean;
  'profile-awards': boolean;
  'profile-trainrecord': boolean;
  'btn-add-trainrecord': boolean;
  'btn-edit-trainrecord': boolean;
  'btn-delete-trainrecord': boolean;
  'qrcode-menu': boolean;
  'qrcode-vcard': boolean;
  'profile-career': boolean;
  gamification: boolean;
  'custom-payslip': boolean;
  'activityrecording-setting': boolean;
  'timesheet-request': boolean;
  'timesheet-report': boolean;
  patrol: boolean;
  'patrol-settings': boolean;
  'new-patrol': boolean;
  'new-patrol-settings': boolean;
  'activityrecording-tracking-report': boolean;
  performance: boolean;
  'performance-report': boolean;
  'performance-settings': boolean;
  'periodic-survey': boolean;
  'btn-training-att': boolean;
  'alert-menu': boolean;
  'report-tracking': boolean;
  'report-patrol': boolean;
  'att-onduty-cancellation': boolean;
  'btn-employees-loan': boolean;
  'activityrecording-setting-dropdown': boolean;
  itcs: boolean;
  tracking: boolean;
  'tracking-report': boolean;
  'profile-performance': boolean;
  'gd-event': boolean;
  'hr-buddy': boolean;
  'hr-dashboard': boolean;
  'profile-certification': boolean;
  'btn-add-certification': boolean;
  'btn-upd-certification': boolean;
  'btn-del-certification': boolean;
  'profile-bankdistribution': boolean;
  'profile-companyfacility': boolean;
  'btn-add-companyfacility': boolean;
  'btn-upd-companyfacility': boolean;
  'btn-del-companyfacility': boolean;
  recruitment: boolean;
  letterrequest: boolean;
  'btn-add-letterrequest': boolean;
  'btn-upd-letterrequest': boolean;
  'btn-del-letterrequest': boolean;
  'profile-letters': boolean;
  'company-mood': boolean;
  'company-mood-dashboard': boolean;
  'profile-skill': boolean;
  'btn-upd-skill': boolean;
  'profile-interest': boolean;
  'btn-upd-interest': boolean;
  'multi-account': boolean;
  'profile-course': boolean;
  'btn-add-course': boolean;
  'btn-upd-course': boolean;
  'btn-del-course': boolean;
  'profile-langskill': boolean;
  'btn-add-langskill': boolean;
  'btn-upd-langskill': boolean;
  'btn-del-langskill': boolean;
  'profile-medicalhistory': boolean;
  'btn-add-medicalhistory': boolean;
  'btn-upd-medicalhistory': boolean;
  'btn-del-medicalhistory': boolean;
  'profile-documentcontrol': boolean;
  'btn-upd-documentcontrol': boolean;
  'profile-reference': boolean;
  'btn-add-reference': boolean;
  'btn-upd-reference': boolean;
  'btn-del-reference': boolean;
  'profile-employmentinfo': boolean;
  'profile-companygroup': boolean;
  'profile-empchecklist': boolean;
  'btn-upd-empchecklist': boolean;
  'btn-del-empchecklist': boolean;
  'profile-serviceagreement': boolean;
  'btn-add-serviceagreement': boolean;
  'btn-upd-serviceagreement': boolean;
  'btn-del-serviceagreement': boolean;
  'profile-ohsahistory': boolean;
  'profile-customfield': boolean;
  'btn-upd-customfield': boolean;
  'btn-del-customfield': boolean;
  'profile-psychologicaltest': boolean;
  'btn-add-psychologicaltest': boolean;
  'btn-upd-psychologicaltest': boolean;
  'btn-del-psychologicaltest': boolean;
  'profile-orgactiv': boolean;
  'btn-add-orgactiv': boolean;
  'btn-upd-orgactiv': boolean;
  'btn-del-orgactiv': boolean;
  'att-base-photo': boolean;
  'report-loanrequest': boolean;
  'report-emploan': boolean;
  'my-onboarding': boolean;
  'company-onboarding': boolean;
  'imei-management': boolean;
  'performance-plan-sf6': boolean;
  'performance-eval-sf6': boolean;
  question360: boolean;
  'performance-monitor-sf6': boolean;
  'applicant-sf6': boolean;
  'asaren-menu': boolean;
  'qrs-request': boolean;
  'qrs-active-case': boolean;
  'qrs-management': boolean;
  'dashboard': boolean;
  'dashboard-employee-admin': boolean;
  'dashboard-employee-manager': boolean;
  'dashboard-employee-spv': boolean;
  'dashboard-attendance-admin': boolean;
  'dashboard-attendance-manager': boolean;
  'dashboard-attendance-spv': boolean;
  'dashboard-payroll-admin': boolean;
  'dashboard-payroll-manager': boolean;
  'dashboard-payroll-spv': boolean;
}

export interface Socket {
  api: string;
  socketUrl: string;
  socketPath: any;
}

export interface Payroll {
  url: string;
}

export interface CompanySetting {
  checkRoot: boolean;
  checkFakeGPS: boolean;
  webAbsent: boolean;
  attendanceLock: boolean;
  attendanceLockPrompt: boolean;
  cameraLock: boolean;
  showPosting: boolean;
  attUpload: boolean;
  attendanceFace: boolean;
  checkAutoTime: boolean;
  offlineMode: boolean;
  showEmpNo: boolean;
  takePhoto: boolean;
  intervalTracker: number;
  socialMedia: boolean;
  changePhotoProfile: boolean;
  flexibleTracking: boolean;
  covid19Zone: boolean;
  isOnboardingNewCompany: boolean;
  actualBreak: boolean;
  imeiLock: boolean;
  previewPayslip: boolean;
  confirmClaimItem: boolean;
  remremarkisrequired: boolean;
  skipErrorLocation: boolean;
  developerOptions: boolean;
  remarkisrequiredAttcorr: boolean;
  remarkisrequiredOvt: boolean;
  remarkisrequiredOnduty: boolean;
  remarkisrequiredDeclaration: boolean;
  remarkisrequiredLeave: boolean;
  actualtimeAttcorr: boolean;
  shiftAttcorr: boolean;
  shiftfutureAttcorr: boolean;
  pnipnoAttcorr: boolean;
  ovtreason: boolean;
  ovttype: any;
  resubmitOndutyDeclaration: boolean;
  futureonlyshiftchange: boolean;
  preventScreenshotPayslip: boolean;
  showAddress: boolean;
  attendanceFaceBlock?: boolean;
  attendanceFaceTreshold?: number;
  attendanceFaceLiveness?: boolean;
  attendanceFaceLivenessBlocking?: boolean;
  attendanceFaceLivenessTreshold?: number;
  attendanceFaceLivenessAttempt?: number;
  ssoSetting?: any;
}

export interface LicenseList {
  code: number;
  description: string;
}
export interface StoredPrelogin {
  SFPATH: string;
  MODE: any[];
  ACCOUNT: string;
  IST: string;
  IMGPATH?: string;
  CUSTOM: any[];
  ACCOUNTNAME: string;
  GOPATHNEW?: string;
  GOPATH: string;
  PAYROLLPATH: string;
}

export interface SaasResponse {
  storedPrelogin: StoredPrelogin;
  storedPIN: string;
}

export interface PasswordSettingData {
  passwordLength: number;
  passwordStrong: boolean;
  passwordExpiry: number;
  concurrentUser: number;
  sessionTimeout: string;
  onloginFailed: number;
  loginAttempt: number;
}

export interface ResponsePasswordSetting {
  message: string;
  data: PasswordSettingData;
}

export interface RequestResetPassword {
  cocode: string;
  code: string;
  datreq: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResponseProfile {
  accountName: string;
  companyCode: string;
  companyId: number;
  userId: number;
  username: string;
  empId: string;
  empNo: string;
  fullname: string;
  photo: string;
  position: string;
  positionId: number;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  isSF6: number;
}

export interface ResponseTokenListsDto {
  id: string;
  ttl: number;
  created: string;
  conf: any;
}

export interface RequestLogoutByTokenDto {
  token: string;
}

export interface RequestChangePasswordDto {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
  isEncrypted: boolean;
}

export interface RequestSwitchLanguageDto {
  language: string;
}

export interface ResponseChangePasswordDto {
  message: string;
  data?: any;
}

export interface Item {
  menuId: number;
  title: string;
  pageBuilderId?: any;
  pageBuilderTitle?: any;
  pageBuilderType?: any;
  pageBuilderSchema?: any;
  pageStatic: string;
  badgeText?: any;
  externalUrl?: any;
  iconUrl: string;
}

export interface Data {
  categoryId: number;
  categoryColor: string;
  categoryName: string;
  items: Item[];
}

export interface ResponseMenuV2Dto {
  message: string;
  data: Data[];
  menu: Menu;
}


