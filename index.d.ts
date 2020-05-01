declare module 'react-native-exposure-notification' {
  enum Status {
    FailedBluetoothScanningDisabled,
    FailedInsufficentStorage,
    FailedInternal,
    FailedRejectedOptIn,
    FailedServiceDisabled,
    FailedTemporarilyDisabled,
    Success
  }
  enum RiskLevel {
    RiskLevelHigh,
    RiskLevelHighest,
    RiskLevelInvalid,
    RiskLevelLow,
    RiskLevelLowMedium,
    RiskLevelLowest,
    RiskLevelMedium,
    RiskLevelMediumHigh,
    RiskLevelVeryHigh
  }

  interface ExposureConfiguration {
    attenuationScores: number[];
    attenuationWeight: number;
    daysSinceLastExposureScores: number[];
    daysSinceLastExposureWeight: number;
    durationScores: number[];
    durationWeight: number;
    minimumRiskScore: number;
    transmissionRiskScores: RiskLevel[];
    transmissionRiskWeight: number;
  }

  class TemporaryExposureKey {
    keyData: number[];
    rollingDuration: number;
    rollingStartNumber: number;
    transmissionRiskLevel: RiskLevel;
  }

  class ExposureSummary {
    daysSinceLastExposure: number;
    matchedKeyCount: number;
    maximumRiskScore: number;
  }

  class ExposureInformation {
    dateMillisSinceEpoch: number;
    durationMinutes: number;
    attenuationValue: number;
    transmissionRiskLevel: RiskLevel;
    totalRiskScore: number;
  }

  function getExposureInformation(): ExposureInformation[];

  function getExposureSummary(): ExposureSummary;

  function getMaxDiagnosisKeys(): number;

  function getTemporaryExposureKeyHistory(): TemporaryExposureKey[];

  function isEnabled(): boolean;

  function provideDiagnosisKeys(): void;

  function resetAllData(): void;

  function start(exposureConfiguration: ExposureConfiguration): void;

  function stop(): void;
}
