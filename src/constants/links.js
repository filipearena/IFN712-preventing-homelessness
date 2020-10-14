const links = [
  'https://www.redcross.org.au/get-help/community-services/homelessness-services',
  'https://www.redcross.org.au/get-help/community-services/telecross',
  'https://www.redcross.org.au/get-help/community-services/companionship-social-support',
  'https://ladymusgravetrust.org.au/the-handy-guide/',
  'https://www.salvationarmy.org.au/need-help/positive-lifestyle-program/',
  'https://www.salvationarmy.org.au/need-help/family-and-domestic-violence/',
  'https://www.salvationarmy.org.au/need-help/financial-assistance/financial-counselling/#youretheboss',
  'https://www.salvationarmy.org.au/need-help/financial-assistance/no-interest-loan-scheme/',
  'https://www.missionaustralia.com.au/servicedirectory/189-family-domestic-violence',
  'https://www.missionaustralia.com.au/servicedirectory/190-financial-support',
  'https://www.missionaustralia.com.au/servicedirectory/191-housing-homelessness',
  'https://www.missionaustralia.com.au/servicedirectory/194-strengthening-communities',
  'https://griefline.org.au/',
  'http://www.1800respect.org.au/',
  'https://moneysmart.gov.au/managing-debt/financial-counselling',
  'https://moneysmart.gov.au/managing-debt/free-legal-advice',
  'https://moneysmart.gov.au/managing-debt/financial-hardship',
  'https://www.servicesaustralia.gov.au/individuals/services/social-work-services',
  'https://www.facebook.com/groups/203272480265341/',
  'https://www.facebook.com/groups/2143787252331906/',
  'https://www.facebook.com/groups/474720916046306/',
  'https://www.facebook.com/groups/440714653344343/',
  'https://www.facebook.com/groups/366342180941739/',
  'https://www.facebook.com/groups/1495677953858136/',
  'https://adf.org.au/help-support/',
  'https://moneysmart.gov.au/dealing-with-illness',
  'https://askizzy.org.au/health/personalise',
];

const getLink = (index) => {
  return links[index - 1];
};

export const valueToLink = {
  housing: {
    2: [getLink(10), getLink(11)],
    3: [getLink(8), getLink(10), getLink(11)],
    4: [getLink(8), getLink(10), getLink(11)],
    5: [getLink(8), getLink(10), getLink(11)],
  },
  partnerHelps: {
    0: [getLink(7)],
  },
  haveWork: {
    0: [getLink(7), getLink(8), getLink(10), getLink(15)],
  },
  haveSuper: {
    0: [getLink(7), getLink(8), getLink(10), getLink(15)],
  },
  haveAgedPension: {
    0: [getLink(7), getLink(8), getLink(10), getLink(15)],
  },
  haveFamilySupport: {
    0: [getLink(7), getLink(3), getLink(2)],
  },
  haveDependants: {
    1: [getLink(7), getLink(10), getLink(15)],
  },
  inDebt: {
    1: [getLink(16), getLink(17)],
  },
  incomePercentageSpentOnRent: {
    1: [getLink(1), getLink(7), getLink(15), getLink(16), getLink(17), getLink(24)],
  },
  incomePercentageSpentOnMortgage: {
    1: [getLink(1), getLink(7), getLink(15), getLink(16), getLink(17), getLink(24)],
  },
  isVictim: {
    1: [getLink(6), getLink(14), getLink(9), getLink(20), getLink(21), getLink(22), getLink(23)],
  },
  forceOfWorked: {
    1: [getLink(16)],
  },
  housingDiscrimination: {
    1: [getLink(16)],
  },
  deathOfIncomeEarningPartner: {
    1: [getLink(13), getLink(1), getLink(7), getLink(15), getLink(16), getLink(17), getLink(24)],
  },
  facingDivorce: {
    1: [getLink(16)],
  },
  illness: {
    1: [getLink(26)],
  },
  drugAbuse: {
    1: [getLink(25)],
  },
  loneliness: {
    1: [getLink(3)],
  },
};
