import { RouteObject } from 'react-router-dom';
import EventsIndex from '../pages/Events/EventsIndex';

const eventsRouter: RouteObject = {
  path: '/events',
  children: [
    {
      path: '',
      element: <EventsIndex />,
    },
  ],
};

export default eventsRouter;
