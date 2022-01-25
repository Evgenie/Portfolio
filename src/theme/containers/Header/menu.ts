import { TCSSObjProps } from "../../../definitions";
import { BUTTON_MENU } from "../../images";

export const blocks: TCSSObjProps = {
   core: {
      transition: 'opacity .35s cubic-bezier(.3,.86,.36,.95)',
      background: 'none',
      padding: '0',
      border: '0',
      color: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: '2',
      backfaceVisibility: 'hidden',
      outline: '1px solid transparent',
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