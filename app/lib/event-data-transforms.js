import approximateNumber from 'approximate-number';

const jobAcronymToJobNameMapping = {
  ARC: 'Archer',
  GLA: 'Gladiator',
  LNC: 'Lancer',
  MRD: 'Marauder',
  PGL: 'Pugilist',
  ACN: 'Arcanist',
  CNJ: 'Conjurer',
  THM: 'Thaumaturge',
  ROG: 'Rogue',
  //
  BRD: 'Bard',
  DRG: 'Dragoon',
  MNK: 'Monk',
  PLD: 'Paladin',
  WAR: 'Warrior',
  BLM: 'Black Mage',
  WHM: 'White Mage',
  SCH: 'Scholar',
  SMN: 'Summoner',
  NIN: 'Ninja',
  AST: 'Astrologian',
  DRK: 'Dark Knight',
  MCH: 'Machinist',
  RDM: 'Red Mage',
  SAM: 'Samurai',
  BLU: 'Blue Mage',
  GNB: 'Gunbreaker',
  DNC: 'Dancer',
  //
  LB: 'Limit Break',
};

const jobAcronymToJobName = (jobAcronym) => {
  return jobAcronymToJobNameMapping[jobAcronym.toUpperCase()];
};

const jobAcronymToIconFilepath = (jobAcronym) => {
  const jobName = jobAcronymToJobName(jobAcronym);
  return `/images/job-icons/10/${jobName.replace(' ', '_')}_Icon_10.png`;
};

const toHumanReadable = (num) => {
  const parsedNum = Number(num);
  if (isNaN(parsedNum)) return '';
  return approximateNumber(parsedNum);
};

const enrichCombatant = (combatant, maxDamage, maxHealed) => {
  if (combatant.Job === '') combatant.Job = 'LB';
  const jobName = jobAcronymToJobName(combatant.Job);
  combatant.jobName = jobName;
  combatant.jobNameNoSpace = jobName.replace(' ', '');
  combatant.jobIconFilepath = jobAcronymToIconFilepath(combatant.Job);
  combatant.humanReadableDamage = `[${toHumanReadable(combatant.damage)}]`;
  combatant.humanReadableDps = toHumanReadable(combatant.DPS);
  combatant.humanReadableHealed = `[${toHumanReadable(combatant.healed)}]`;
  combatant.humanReadableHps = toHumanReadable(combatant.ENCHPS);
  combatant.isYou = combatant.name === 'YOU';
  combatant.percentageOfMaxDamage = Math.floor(
    (combatant.damage / maxDamage) * 100
  );
  combatant.percentageOfMaxHealed = Math.floor(
    (combatant.healed / maxHealed) * 100
  );
  return combatant;
};

export const enrichCombatants = (combatants) => {
  const maxDamage = Math.max(...combatants.map((c) => c.damage), 0);
  const maxHealed = Math.max(...combatants.map((c) => c.healed), 0);
  return combatants.map((combatant) =>
    enrichCombatant(combatant, maxDamage, maxHealed)
  );
};
