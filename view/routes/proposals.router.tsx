import { RouteObject } from 'react-router-dom';
import EditProposal from '../components/Pages/Proposals/EditProposal';
import ProposalPage from '../components/Pages/Proposals/ProposalPage';

const proposalsRouter: RouteObject = {
  path: '/proposals',
  children: [
    {
      path: ':id',
      element: <ProposalPage />,
    },
    {
      path: ':id/edit',
      element: <EditProposal />,
    },
  ],
};

export default proposalsRouter;
