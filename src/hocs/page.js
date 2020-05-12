import { compose } from 'redux';
// Global HOCs
import WithAuth from './withAuth';
import WithLayout from './withLayout'
import { withRouter } from 'react-router-dom';
// HOCs mapping
import HOCS_MAP from './hocsMap';

// TODO -> Also handle environments dynamicly (server\client only HOCs)

const globalHocs = compose(
  WithLayout,
  WithAuth,
  withRouter,
);

const page = (Component, currentPage) => {
  const hocsToApply = HOCS_MAP[currentPage];
  let hocsList = (a => a); // Just a dummy function so we can compose
  hocsToApply.forEach((hoc) => {
    hocsList = compose(hocsList, hoc);
  });
  hocsList = compose(globalHocs, hocsList);
  return hocsList(Component);
};

export default page;
