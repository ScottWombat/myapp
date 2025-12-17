import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { Provider } from "react-redux";
import { store } from './store';
import { Render } from '@shared';

import { App } from './components/App'

export const render: Render = ({ url, initialData, options }) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App initialData={initialData} />
      </StaticRouter>
    </Provider>
    ,
    options,
  )
}
