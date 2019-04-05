import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import Ink from 'react-ink'
import Icon from 'elements/Icon'
interface IProps extends WithStyles<typeof styles> {
  children: React.ReactNode
  alt: string
  onClick: () => void
}

const IconButton: React.FunctionComponent<IProps> = ({ children, classes, alt, onClick }) => {
  return (
    <button className={classes.root} onClick={() => onClick()}>
      <Ink opacity={0.5} />
      <Icon alt={alt}>
        {children}

      </Icon>
    </button>
  )
}

const styles = {
root: {
    alignItems: 'center',
    // backgroundColor: 'rgb(157, 0, 56)',
    backgroundColor: 'transparent',
    borderImageOutset: 0,
    borderImageRepeat: 'stretch',
    borderImageSlice: '100%',
    borderImageSource: 'none',
    borderImageWidth: 1,
    borderColor: 'rgb(255, 255, 255)',
    borderRadius: '50%',
    borderStyle: 'none',
    borderLeftStyle: 'none',
    borderWidth: 0,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeight: 500,
    height: 40,
    justifyContent: 'center',
    letterSpacing: 0.4,
    minHeight: 36,
    minWidth: 0,
    // outlineColor: 'rgb(200, 140, 155)',
    // outlineColor: 'red',
    outlineStyle: 'none',
    outlineWidth: 0,
    padding: 0,
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'none',
    transitionDelay: '0s, 0s, 0s',
    transitionDuration: '0.25s, 0.25s, 0.25s',
    transitionProperty: 'background-color, box-shadow, border',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)',
    userSelect: 'none',
    verticalAlign: 'middle',
    width: 40,
    MozAppearance: 'none',
    MozUserSelect: 'none',
    '&:hover': {
      // backgroundColor: hoverColor,
      backgroundColor: 'rgba(167, 167, 167, 1)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        // backgroundColor: hoverColor,
        backgroundColor: 'rgba(167, 167, 167, 1)',
      },
    },
    '&:active': {
      boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    },
    // '&:focus': {
    //   outline: 0,
    // },
    '&::-moz-focus-inner': {
      border: 'none'
    }
  },
}

export default withStyles(styles)(IconButton)