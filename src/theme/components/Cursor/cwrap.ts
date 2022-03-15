import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '42px',
      minHeight: '42px',
      border: '1px solid #a4a4a4',
      borderRadius: '50%',
      zIndex:'3000',
      display: 'none',
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;