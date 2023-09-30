import { RouteObject } from 'react-router-dom';
import EditEvent from '../components/Pages/Events/EditEvent';
import EventPage from '../components/Pages/Events/EventPage';
import EventsIndex from '../components/Pages/Events/EventsIndex';

const eventsRouter: RouteObject = {
  path: '/events',
  children: [
    {
      path: '',
      element: <EventsIndex />,
    },
    {
      path: ':id',
      element: <EventPage />,
    },
    {
      path: ':id/edit',
      element: <EditEvent />,
    },
  ],
};

export default eventsRouter;
