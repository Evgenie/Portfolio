import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      position: 'relative',
      border: '0',
<<<<<<< HEAD
      cursor: 'none',
=======
<<<<<<< HEAD
      cursor: 'none',
=======
>>>>>>> 7b397f7875be628e947abac407cfa27c0ef629a9
>>>>>>> 3437cdfbd283b6c36cae9260f8b44b8101249b45
      background: 'none',
      zIndex: '2',
      transition: 'opacity .35s cubic-bezier(.3,.86,.36,.95)',
      '&:before': {
         content: '""',
         width: '55px',
         height: '55px',
         position: 'absolute',
         left: '50%',
         top: '50%',
         transform: 'translate(-50%,-50%)',
         zIndex: '-1',
      },
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;