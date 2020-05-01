declare module 'react-native-exposure-notification' {
  function getExposureInformation(): string[];
  function getExposureSummary(): string;
  function getMaxDiagnosisKeys(): number;
  function getTemporaryExposureKeyHistory(): string[];
  function isEnabled(): boolean;
  function provideDiagnosisKeys(): void;
  function resetAllData(): void;
  function start(): void;
  function stop(): void;
}
