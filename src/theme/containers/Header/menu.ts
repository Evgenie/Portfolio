import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
      core: {
            position: 'relative',
            border: '0',
            cursor: 'none',
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