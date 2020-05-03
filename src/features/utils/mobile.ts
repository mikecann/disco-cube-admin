export const fixMobileBrowserWindow = () => {
  const onresize = () => ((document.body as any).height = window.innerHeight);
  window.onresize = onresize;
  onresize();
};
