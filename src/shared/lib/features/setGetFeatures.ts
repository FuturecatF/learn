import { FeatureFlags } from '../../types/featureFlags';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  if (!featureFlags) {
    return false;
  }
  console.log('featureFlags', featureFlags);
  return featureFlags[flag];
}
