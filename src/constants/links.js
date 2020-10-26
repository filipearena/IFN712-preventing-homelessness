const links = [
  // 1
  {
    url: 'https://www.redcross.org.au/get-help/community-services/homelessness-services',
    name: 'Redcross - Assistance with Care and Housing',
  },
  // 2
  {
    url: 'https://www.redcross.org.au/get-help/community-services/telecross',
    name: 'Redcross - A daily check-up phone call (Telecross)',
  },
  // 3
  {
    url: 'https://www.redcross.org.au/get-help/community-services/companionship-social-support',
    name: 'Redcross - Companionship and social support',
  },
  // 4
  {
    url: 'https://ladymusgravetrust.org.au/the-handy-guide/',
    name: 'Lady Musgrave Trust - Then Handy Guide',
  },
  // 5
  {
    url: 'https://www.salvationarmy.org.au/need-help/positive-lifestyle-program/',
    name: 'Salvation Army - Positive Lifestyle Program',
  },
  // 6
  {
    url: 'https://www.salvationarmy.org.au/need-help/family-and-domestic-violence/',
    name: 'Salvation Army - Family and Domestic Violence Support',
  },
  // 7
  {
    url:
      'https://www.salvationarmy.org.au/need-help/financial-assistance/financial-counselling/#youretheboss',
    name: 'Salvation Army - Financial Counselling',
  },
  // 8
  {
    url: 'https://www.salvationarmy.org.au/need-help/financial-assistance/no-interest-loan-scheme/',
    name: 'Salvation Army - No Interest Loan Scheme',
  },
  // 9
  {
    url: 'https://www.missionaustralia.com.au/servicedirectory/189-family-domestic-violence',
    name: 'Mission Australia - Family and Domestic Violence Services',
  },
  // 10
  {
    url: 'https://www.missionaustralia.com.au/servicedirectory/190-financial-support',
    name: 'Mission Australia - Financial Support',
  },
  // 11
  {
    url: 'https://www.missionaustralia.com.au/servicedirectory/191-housing-homelessness',
    name: 'Mission Australia - Housing Homelessness',
  },
  // 12
  {
    url: 'https://www.missionaustralia.com.au/servicedirectory/194-strengthening-communities',
    name: 'Mission Australia - Strengthening Communities',
  },
  // 13
  {
    url: 'https://griefline.org.au/',
    name: 'Griefline - Grief Counselling',
  },
  // 14
  {
    url: 'http://www.1800respect.org.au/',
    name: '1800Respect - Domestic and Family Violence Helpline',
  },
  // 15
  {
    url: 'https://moneysmart.gov.au/managing-debt/financial-counselling',
    name: 'Money Smart - Financial Counselling',
  },
  // 16
  {
    url: 'https://moneysmart.gov.au/managing-debt/free-legal-advice',
    name: 'Money Smart - Free Legal Help',
  },
  // 17
  {
    url: 'https://moneysmart.gov.au/managing-debt/financial-hardship',
    name: 'Money Smart - Financial Hardship',
  },
  // 18
  {
    url: 'https://www.servicesaustralia.gov.au/individuals/services/social-work-services',
    name: 'Australian Government - Social Work Services',
  },
  // 19
  {
    url: 'https://www.facebook.com/groups/203272480265341/',
    name: 'Facebook Group - Brisbane Homeless Support Group',
  },
  // 20
  {
    url: 'https://www.facebook.com/groups/2143787252331906/',
    name: 'Facebook Group - Domestic violence support Australia',
  },
  // 21
  {
    url: 'https://www.facebook.com/groups/474720916046306/',
    name: 'Facebook Group - Domestic Violence Support For Women',
  },
  // 22
  {
    url: 'https://www.facebook.com/groups/440714653344343/',
    name: 'Facebook Group - Domestic Violence Information Library (Australia)',
  },
  // 23
  {
    url: 'https://www.facebook.com/groups/366342180941739/',
    name: 'Facebook Group - Domestic violence, support, healing and chat for women',
  },
  // 24
  {
    url: 'https://www.facebook.com/groups/1495677953858136/',
    name: 'Facebook Group - Women Creating Financial Independence Online',
  },
  // 25
  {
    url: 'https://adf.org.au/help-support/',
    name: 'The Alcohol and Drug Foundation - Support services on alcohol or drugs',
  },
  // 26
  {
    url: 'https://moneysmart.gov.au/dealing-with-illness',
    name: 'Money Smart - Dealing with illness',
  },
  // 27
  {
    url: 'https://askizzy.org.au/health/personalise',
    name: 'AskIzzy - Immeadiate help and location of free services',
  },
];

const getLink = (index) => {
  return links[index - 1];
};

// For objects with 0 and 1s, means False:0 and True: 1
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
