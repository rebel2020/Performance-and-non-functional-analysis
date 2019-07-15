const parseFilterData = Data => {
  const Brand = ['All'];
  const Phase = ['All'];
  const Project = ['All'];
  const FinalUrl = ['All'];
  Data.lighthousedata.forEach((val, i) => {
    if (Brand.indexOf(val.brand.trim()) === -1) Brand.push(val.brand);
    if (Phase.indexOf(val.phase.trim()) === -1) Phase.push(val.phase.trim());
    if (Project.indexOf(val.project) === -1) Project.push(val.project);
    if (FinalUrl.indexOf(val.finalUrl) === -1) FinalUrl.push(val.finalUrl);
  });
  const filterList = {
    brand: Brand,
    phase: Phase,
    project: Project,
    finalUrl: FinalUrl
  };
  // console.log(filterList.finalUrl);
  return filterList;
};

export default parseFilterData;
