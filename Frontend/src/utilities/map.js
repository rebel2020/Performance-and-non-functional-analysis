const map = {
  performance: 'performance_audits',
  accessibility: 'accessibility_audits',
  best_practices: 'best_practices_audits',
  p_w_a: 'pwa_audits',
  s_e_o: 'seo_audits'
};
const AuditMap = {
  performance: 'Performance_Audit',
  accessibility: 'Accessibility_Audit',
  best_practices: 'Best_Practices_Audit',
  p_w_a: 'Performance_Web_App_Audit',
  s_e_o: 'Search_Engine_Optimization_Audit'
};
const mapAuditRecommendations = {
  performance: 'PerformanceAuditRecommendations',
  accessibility: 'AccessibilityAuditRecommendations',
  best_practices: 'BPAAuditRecommendations',
  p_w_a: 'PWAAuditRecommendations',
  s_e_o: 'SEOAuditRecommendations'
};
const averageMap = {
  performance: 'performanceAverage',
  accessibility: 'accessibilityAverage',
  best_practices: 'bestPracticesAverage',
  p_w_a: 'pwaAverage',
  s_e_o: 'seoAverage'
};
const metricMap = {
  performance: 'performance',
  accessibility: 'accessibility',
  best_practices: 'best_practices',
  s_e_o: 'seo',
  p_w_a: 'pwa'
};
const pagesMap = {
  'http://fca-qa1-jeep-sape.test.com/jeep-life.html': 'Jeep_Life',
  'http://fca-qa1-jeep-sape.test.com/grand-cherokee.html': 'Jeep_Contacts',
  'http://fca-qa1-jeep-sape.test.com/': 'Jeep_Home',
  'http://fca-qa1-alfaromeousa-sape.test.com/a-story-that-made-history': 'Alfa_Story',
  'http://fca-qa1-alfaromeousa-sape.test.com/world': 'Alfa_World',
  'http://fca-qa1-alfaromeousa-sape.test.com/car-shopping/current-offers': 'Alfa_Offers',
  'http://fca-qa1-alfaromeousa-sape.test.com/lineup.inventory?app=inventory': 'Alfa_inventory',
  'http://fca-qa1-alfaromeousa-sape.test.com/bmo#/vehicles': 'Alfa_Vehicles',
  'http://fca-qa1-alfaromeousa-sape.test.com/': 'Alfa_Home',
  'http://fca-qa1-ramtrucks-sape.test.com/upfitguide/upfits/vehicle.html/27': 'Ramtruks_Vehicle',
  'http://fca-qa1-ramtrucks-sape.test.com/upfitguide/upfits.html': 'Ramtrucks_Upfits',
  'http://fca-qa1-ramtrucks-sape.test.com/ram-commercial/body-builders-guide.html':
    'Ramtrucks_Commercial',
  'http://fca-qa1-jeep-sape.test.com/lineup.compare.html?app=compare': 'Jeep_Compare',
  'http://fca-qa1-jeep-sape.test.com/new-inventory.wrangler.2018.html?modelYearCode=IUJ201810&radius=25':
    'Jeep_inventory',
  'http://fca-qa1-jeep-sape.test.com/custom-graphics/design-your-graphic-tool.html#CUJ201809BUTL74A':
    'Jeep_Custom_Graphic',
  'http://fca-qa1-jeep-sape.test.com/custom-graphics.html': 'Jeep_Custom_Home',
  'http://fca-qa1-jeep-sape.test.com/jeep-wave.html': 'Jeep_Wave',
  'http://fca-qa1-jeep-sape.test.com/trail-rated.html': 'Jeep_Trail',
  'http://fca-qa1-ramtrucks-sape.test.com/body-builders-guide.html': 'Ramtrucks_Guide',
  'http://fca-qa1-jeep-sape.test.com/2018/grand-cherokee/gallery.html': 'Jeep_Cherokee',
  'http://fca-qa1-alfaromeousa-sape.test.com/suvs/stelvio': 'Alfa_Stelvio'
};
export default map;
export { averageMap, metricMap, pagesMap, AuditMap, mapAuditRecommendations };
