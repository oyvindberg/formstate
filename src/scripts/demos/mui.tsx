import { cssRaw, forceRenderStyles, style, classes } from "typestyle";
import * as csstips from 'csstips';

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { observer } from 'mobx-react';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
cssRaw(`
@import url('https://fonts.googleapis.com/css?family=Roboto');
`);
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let Component: any;

const App = () => (
  <MuiThemeProvider>
    <Component />
  </MuiThemeProvider>
);

/** Make it less magic to demo stuff by styling the browser built in stuff */
cssRaw(`
p {
  font-family: Roboto, arial;
  color: #333;
}
`);

export function render(component: () => React.ReactNode) {
  Component = observer(component as any);
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  forceRenderStyles();
}
export const buttonClass = style({
  fontFamily: 'helvetica',
  cursor: 'pointer',
  height: 'auto',
  padding: "12px 30px 11px",
  border: `1px solid #333`,
  borderRadius: '3px',
  color: `white`,
  backgroundColor: '#333',
  fontSize: '15px',
  textDecoration: "none",
  lineHeight: "1em",
  outline: 'none',
  transition: 'color .2s, background-color .2s',
  display: 'inline-block',
  $nest: {
    '&:hover': {
      backgroundColor: '#666',
    },
    '&:active': {
      backgroundColor: '#666',
    },
    '&:focus': {
      outline: 'thin dotted',
      outlineColor: `#333`
    }
  }
});
export const Button
  = (props: React.HTMLProps<HTMLButtonElement>) =>
    <button {...props}
      type={props.type || 'button'}
      className={classes(buttonClass, props.className)}
    />

export const ErrorText: React.StatelessComponent<{}> = ({children}) => {
  return <div style={{ color: 'red', fontFamily: 'arial' }}>{children}</div>;
}
