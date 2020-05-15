export class PatientRequest {
  id: number;
  patient_email: string;
  patient_id: number;
  doctorComment: string;
  isPositive: boolean;
  isClosed: boolean;
  isSuspect: boolean;
  hasRecommendation: boolean;
  temperature: number;
  hasCough: boolean;
  hasFever: boolean;
  hasShortnessOfBreath: boolean;
  hasMusclePain: boolean;
  hasSoreThroat: boolean;
  hasLossOfTasteOrSmell: boolean;
  hasContactWithCoronaCase: boolean;
  simulate: boolean;

}
