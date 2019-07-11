const map = {
  performance: 'performance_audits',
  accessibility: 'accessibility_audits',
  best_practices: 'best_practices_audits',
  p_w_a: 'pwa_audits',
  s_e_o: 'seo_audits'
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
  'http://fca-qa1-jeep-sape.test.com/jeep-life.html': 'Jeep Life',
  'http://fca-qa1-jeep-sape.test.com/grand-cherokee.html': 'Jeep Contacts',
  'http://fca-qa1-jeep-sape.test.com/': 'Jeep Home',
  'http://fca-qa1-alfaromeousa-sape.test.com/a-story-that-made-history': 'Alfa Story',
  'http://fca-qa1-alfaromeousa-sape.test.com/world': 'Alfa World',
  'http://fca-qa1-alfaromeousa-sape.test.com/car-shopping/current-offers': 'Alpha Offers',
  'http://fca-qa1-alfaromeousa-sape.test.com/lineup.inventory?app=inventory': 'Alpha inventory',
  'http://fca-qa1-alfaromeousa-sape.test.com/bmo#/vehicles': 'Alfa Vehicles',
  'http://fca-qa1-alfaromeousa-sape.test.com/': 'Alfa Home',
  'http://fca-qa1-ramtrucks-sape.test.com/upfitguide/upfits/vehicle.html/27': 'Ramtruks Vehicle',
  'http://fca-qa1-ramtrucks-sape.test.com/upfitguide/upfits.html': 'Ramtrucks Upfits',
  'http://fca-qa1-ramtrucks-sape.test.com/ram-commercial/body-builders-guide.html':
    'Ramtrucks Guide',
  'http://fca-qa1-jeep-sape.test.com/lineup.compare.html?app=compare': 'Jeep Compare',
  'http://fca-qa1-jeep-sape.test.com/new-inventory.wrangler.2018.html?modelYearCode=IUJ201810&radius=25':
    'Jeep inventory',
  'http://fca-qa1-jeep-sape.test.com/custom-graphics/design-your-graphic-tool.html#CUJ201809BUTL74A':
    'Jeep Custom Graphic',
  'http://fca-qa1-jeep-sape.test.com/custom-graphics.html': 'Jeep Custom Home',
  'http://fca-qa1-jeep-sape.test.com/jeep-wave.html': 'Jeep Wave',
  'http://fca-qa1-jeep-sape.test.com/trail-rated.html': 'Jeep Trail',
  'http://fca-qa1-ramtrucks-sape.test.com/body-builders-guide.html': 'Ramtrucks Guide',
  'http://fca-qa1-jeep-sape.test.com/2018/grand-cherokee/gallery.html': 'Jeep Cherokee',
  'http://fca-qa1-alfaromeousa-sape.test.com/suvs/stelvio:': 'Alfa Stelvio'
};
export default map;
export { averageMap, metricMap, pagesMap };
